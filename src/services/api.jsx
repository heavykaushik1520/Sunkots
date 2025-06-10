// src/services/api.js

// const api = async (endpoint, method = "GET", data = null, auth = false) => {
//   const headers = {
//     "Content-Type": "application/json",
//   };

//   // ✅ Add token if needed
//   if (auth) {
//     const token = localStorage.getItem("jwtToken"); // Or from context
//     if (!token) throw new Error("Authentication token not found.");

//     headers["Authorization"] = `Bearer ${token}`;
//   }

//   const options = {
//     method,
//     headers,
//   };

//   if (data) {
//     options.body = JSON.stringify(data);
//   }

//   const res = await fetch(`http://localhost:3000/api${endpoint}`, options);

//   if (!res.ok) {
//     const errorData = await res.json();
//     throw new Error(errorData.message || "API request failed");
//   }

//   return await res.json();
// };



// export default api;

let isRefreshing = false;
let refreshSubscribers = [];

const subscribeTokenRefresh = (cb) => {
  refreshSubscribers.push(cb);
};

const onRefreshed = (newToken) => {
  refreshSubscribers.forEach((cb) => cb(newToken));
  refreshSubscribers = [];
};

// This refreshToken function should ideally be in services/api.js and imported
export const refreshToken = async () => {
  const res = await fetch('https://artiststation.co.in/sunkots-backend/api/auth/user/refresh-token', {
    method: 'POST',
    credentials: 'include', // Make sure cookies (refresh token) are sent
  });

  if (!res.ok) throw new Error('Refresh token failed');

  const data = await res.json();
  localStorage.setItem('jwtToken', data.token);
  return data.token;
};

const api = async (endpoint, method = 'GET', data = null, auth = false) => {
  let token = localStorage.getItem('jwtToken');
  const headers = {
    'Content-Type': 'application/json',
  };

  if (auth && token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const options = { method, headers };
  if (data) options.body = JSON.stringify(data);

  const response = await fetch(`https://artiststation.co.in/sunkots-backend/api${endpoint}`, options);

  if (response.status === 401 && auth) {
    if (!isRefreshing) {
      isRefreshing = true;
      try {
        const newToken = await refreshToken();
        onRefreshed(newToken);
      } finally {
        isRefreshing = false;
      }
    }

    return new Promise((resolve, reject) => {
      subscribeTokenRefresh(async (newToken) => {
        headers['Authorization'] = `Bearer ${newToken}`;
        const retryRes = await fetch(`https://artiststation.co.in/sunkots-backend/api${endpoint}`, {
          ...options,
          headers,
        });

        if (!retryRes.ok) {
          const errData = await retryRes.json();
          return reject(new Error(errData.message || 'API request failed after retry'));
        }

        const result = await retryRes.json();
        resolve(result);
      });
    });
  }

  if (!response.ok) {
    const errData = await response.json();
    throw new Error(errData.message || 'API request failed');
  }

  return await response.json();
};

export default api;