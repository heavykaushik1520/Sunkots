

/* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { toast } from "react-hot-toast";

// const containerVariants = {
//   initial: { opacity: 0, y: 50 },
//   animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
// };

// const formVariants = {
//   initial: { scale: 0.95, opacity: 0 },
//   animate: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: "easeOut", delay: 0.2 } },
// };

// const headingVariants = {
//   initial: { y: -20, opacity: 0 },
//   animate: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut", delay: 0.3 } },
// };

// const inputVariants = {
//   initial: { opacity: 0, y: 10 },
//   animate: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.3, ease: "easeOut", delay: 0.1 * i + 0.4 },
//   }),
// };

// const buttonVariants = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1, transition: { duration: 0.4, ease: "easeOut", delay: 0.7 } },
//   hover: { scale: 1.05, transition: { duration: 0.2 } },
// };

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("https://artiststation.co.in/sunkots-backend/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         toast.success("Form submitted successfully!");
//         setFormData({ firstname: "", lastname: "", phone: "", message: "" });
//       } else {
//         toast.error("Failed to submit form.");
//       }
//     } catch (error) {
//       toast.error("Something went wrong.");
//     }
//   };

//   return (
//     <motion.div
//       className="min-h-screen bg-[#f8f8f8] flex items-center justify-center px-4 py-10"
//       variants={containerVariants}
//       initial="initial"
//       animate="animate"
//     >
//       <motion.div
//         className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8"
//         style={{
//           boxShadow: "inset 0 0 25px rgba(1, 112, 67, 0.25)",
//         }}
//         variants={formVariants}
//         initial="initial"
//         animate="animate"
//       >
//         <motion.h2
//           className="text-3xl font-bold text-[#96712a] mb-6 text-center"
//           variants={headingVariants}
//           initial="initial"
//           animate="animate"
//         >
//           CONTACT US
//         </motion.h2>

//         <form className="space-y-6" onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <motion.div variants={inputVariants} custom={0}>
//               <label className="block text-[#96712a] font-semibold mb-1">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 name="firstname"
//                 value={formData.firstname}
//                 onChange={handleChange}
//                 placeholder="first name"
//                 className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#017043]"
//               />
//             </motion.div>

//             <motion.div variants={inputVariants} custom={1}>
//               <label className="block text-[#96712a] font-semibold mb-1">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 name="lastname"
//                 value={formData.lastname}
//                 onChange={handleChange}
//                 placeholder="last name"
//                 className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#017043]"
//               />
//             </motion.div>
//           </div>

//           <motion.div variants={inputVariants} custom={2}>
//             <label className="block text-[#96712a] font-semibold mb-1">
//               Phone No.
//             </label>
//             <input
//               type="text"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="phone no."
//               className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#017043]"
//             />
//           </motion.div>

//           {/* <motion.div variants={inputVariants} custom={3}>
//             <label className="block text-[#96712a] font-semibold mb-1">
//               Attach File
//             </label>
//             <input
//               type="file"
//               className="w-full border border-gray-300 rounded-md p-2 bg-white text-gray-700"
//             />
//           </motion.div> */}

//           <motion.div variants={inputVariants} custom={4}>
//             <label className="block text-[#96712a] font-semibold mb-1">
//               Description
//             </label>
//             <textarea
//               rows="4"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Write your message..."
//               className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#017043]"
//             ></textarea>
//           </motion.div>

//           <motion.button
//             type="submit"
//             className="w-full bg-[#017043] text-white font-semibold py-3 rounded-md hover:bg-[#055b37] transition duration-300"
//             variants={buttonVariants}
//             initial="initial"
//             animate="animate"
//             whileHover="hover"
//           >
//             Submit
//           </motion.button>
//         </form>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default ContactForm;


/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

const containerVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const formVariants = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: "easeOut", delay: 0.2 } },
};

const headingVariants = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut", delay: 0.3 } },
};

const inputVariants = {
  initial: { opacity: 0, y: 10 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut", delay: 0.1 * i + 0.4 },
  }),
};

const buttonVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4, ease: "easeOut", delay: 0.7 } },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://artiststation.co.in/sunkots-backend/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Form submitted successfully!");
        setFormData({ firstname: "", lastname: "", phone: "", message: "" });
      } else {
        toast.error("Failed to submit form.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-[#f8f8f8] flex items-center justify-center px-4 py-10"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8"
        style={{
          boxShadow: "inset 0 0 25px rgba(1, 112, 67, 0.25)",
        }}
        variants={formVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h2
          className="text-3xl font-bold text-[#96712a] mb-6 text-center"
          variants={headingVariants}
          initial="initial"
          animate="animate"
        >
          CONTACT US
        </motion.h2>

        {/* Added Contact Details Section */}
        <div className="mb-8 text-gray-700 text-center md:text-left">
          <p className="mb-2">
            <strong className="text-[#017043]">Address:</strong> Babosa Industrial Park Bldg No.A8 Unit No. 201-205 Sonale Village Tal.Bhiwandi, Dist. Thane (M.H.)-421311
          </p>
          <p className="mb-2">
            <strong className="text-[#017043]">Customer Care:</strong>{" "}
            <a href="tel:+918928633289" className="text-blue-600 hover:underline">
              +91 8928633289
            </a>
          </p>
          <p>
            <strong className="text-[#017043]">Mail:</strong>{" "}
            <a href="mailto:support@sunkots.com" className="text-blue-600 hover:underline">
              support@sunkots.com
            </a>
          </p>
        </div>
        {/* End of Contact Details Section */}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div variants={inputVariants} custom={0}>
              <label className="block text-[#96712a] font-semibold mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="first name"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#017043]"
              />
            </motion.div>

            <motion.div variants={inputVariants} custom={1}>
              <label className="block text-[#96712a] font-semibold mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="last name"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#017043]"
              />
            </motion.div>
          </div>

          <motion.div variants={inputVariants} custom={2}>
            <label className="block text-[#96712a] font-semibold mb-1">
              Phone No.
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="phone no."
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#017043]"
            />
          </motion.div>

          <motion.div variants={inputVariants} custom={4}>
            <label className="block text-[#96712a] font-semibold mb-1">
              Description
            </label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#017043]"
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-[#017043] text-white font-semibold py-3 rounded-md hover:bg-[#055b37] transition duration-300"
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;