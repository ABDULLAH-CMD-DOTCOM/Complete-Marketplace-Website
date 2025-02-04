"use client";

import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify"; // Import React-Toastify
import "react-toastify/dist/ReactToastify.css"; // Import styles

// Define the shape of a product object inline
interface Product {
  _id: string;
  name: string;
  description: string;
  pricePerDay: string;
  originalPrice: string;
  seatingCapacity: number;
  fuelCapacity: string;
  image?: {
    asset: {
      _ref: string;
    };
  };
  slug?: {
    current: string;
  };
}

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  // Fetch wishlist from localStorage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(savedWishlist);

    // Fetch all products
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch('*[_type == "car"]');
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  // Get the details of products in the wishlist
  const wishlistProducts = products.filter(product => wishlist.includes(product._id));

  // Remove from wishlist with animation
  const handleRemoveFromWishlist = (productId: string) => {
    const updatedWishlist = wishlist.filter(id => id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    // Show Toast Notification
    toast.error("Removed from wishlist!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "dark",
    });
  };

  // Redirect to homepage
  const goToHomePage = () => {
    router.push("/");
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen flex flex-col">
      <Navbar />
      <ToastContainer /> {/* Toast Notification Container */}

      <div className="flex-grow max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Your Wishlist
        </h2>

        {wishlistProducts.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-600 text-lg">Your wishlist is empty.</p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {wishlistProducts.map((product) => {
              const imageUrl = product.image?.asset ? urlFor(product.image).url() : "/fallback-image.jpg";

              return (
                <div
                  key={product._id}
                  className="relative bg-white rounded-xl shadow-xl border border-gray-300 hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                >
                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemoveFromWishlist(product._id)}
                    className="absolute top-4 right-4 bg-red-100 p-2 rounded-full hover:bg-red-200 transition"
                  >
                    <FaHeart className="text-red-500 text-lg" />
                  </button>

                  <div className="relative w-full h-48">
                    <img
                      src={imageUrl}
                      alt={product.name || "Car image"}
                      className="object-cover w-full h-full rounded-t-xl"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-xl font-extrabold text-gray-900 truncate">
                      {product.name || "Unknown Car"}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex justify-between items-center mt-4">
                      <p className="text-lg font-bold text-gray-900">{product.pricePerDay}</p>
                      <p className="text-gray-500 text-sm">{product.seatingCapacity} Seats</p>
                    </div>

                    <button
                      onClick={() => handleRemoveFromWishlist(product._id)}
                      className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-lg hover:brightness-110 transition-all duration-300"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Add More Button (Only One) */}
        <div className="mt-10 text-center">
          <button
            onClick={goToHomePage}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl hover:brightness-110 transition-all duration-300">
            Add More
          </button>
        </div>
      </div>

      {/* Footer with Fixed Width */}
      <Footer  />
    </div>
  );
};

export default WishlistPage;
