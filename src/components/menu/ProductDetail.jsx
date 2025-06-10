import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [zoomImage, setZoomImage] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://artiststation.co.in/sunkots-backend/api/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product.");
        const data = await res.json();
        setProduct(data);
        setZoomImage(data.images?.[0]?.imageUrl || "");
      } catch (err) {
        setError(err.message);
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading product...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-600">{error}</div>;
  if (!product) return null;

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left: Zoomed Image */}
      <div>
        <img
          src={zoomImage}
          alt="Zoomed"
          className="w-full max-h-[400px] object-contain rounded border"
        />
        <div className="mt-4 flex gap-3 overflow-x-auto">
          {product.images.map((img) => (
            <img
              key={img.id}
              src={img.imageUrl}
              alt={`Thumb ${img.id}`}
              className="w-20 h-20 object-cover rounded cursor-pointer border"
              onClick={() => setZoomImage(img.imageUrl)}
            />
          ))}
        </div>
      </div>

      {/* Right: Product Info */}
      <div>
        <h2 className="text-3xl font-bold text-green-800">{product.name}</h2>
        <p className="text-[#96712a] mt-2">{product.description}</p>
        <p className="font-semibold text-green-700 mt-4 text-xl">₹{parseFloat(product.price).toFixed(2)}/-</p>
        <p className="mt-4 text-gray-600">Weight: {product.weight} gm</p>
        <p className="mt-2 text-gray-600">Category: {product.category?.name || "N/A"}</p>

        <Link
          to="/products"
          className="inline-block mt-8 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Back to Products
        </Link>
      </div>
    </div>
  );
}

export default ProductDetail;
