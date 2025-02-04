"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling the toasts
import Link from "next/link";

const Page = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [maxPrice, setMaxPrice] = useState(100); // State for tracking price range
  const [filteredCars, setFilteredCars] = useState<any[]>([]); // State to store filtered cars

  // Dummy data for cars
  const cars = [
    { id: 1, name: "Car Model 1", price: 30, image: "/car-1.png" },
    { id: 2, name: "Car Model 2", price: 50, image: "/car-2.png" },
    { id: 3, name: "Car Model 3", price: 80, image: "/car-3.png" },
    { id: 4, name: "Car Model 4", price: 96, image: "/car-4.png" },
    { id: 5, name: "Car Model 5", price: 20, image: "/car-5.png" },
    { id: 6, name: "Car Model 6", price: 60, image: "/car-6.png" },
    { id: 7, name: "Car Model 7", price: 100, image: "/car-7.png" },
    { id: 8, name: "Car Model 8", price: 70, image: "/car-8.png" },
  ];

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Error parsing cart from localStorage:", e);
      }
    }
  }, []);

  useEffect(() => {
    // Filter cars based on the price range
    const filtered = cars.filter((car) => car.price <= maxPrice);
    setFilteredCars(filtered);
  }, [maxPrice]);

  const addToCart = (product: any) => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    const isProductInCart = cartItems.some((item: any) => item.id === product.id);

    if (!isProductInCart) {
      const updatedCart = [...cartItems, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCart(updatedCart); // Update the cart state
      toast.success(`${product.name} has been added to the cart!`, {
        position: "bottom-center", // Correct positioning
        autoClose: 3000, // Toast will disappear after 3 seconds
      });
    } else {
      toast.info(`${product.name} is already in the cart.`, {
        position: "bottom-center", 
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <div className="bg-[#F6F7F9] min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Sidebar */}
          <aside className="bg-white p-4 rounded-lg shadow-md w-full lg:w-1/4 min-h-screen mb-6 lg:mb-0 ml-7 mt-4">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-black mb-2">Type</h2>
              <ul className="text-black">
                {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    {type}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-2 text-black">Capacity</h2>
              <ul className="text-black">
                {["2 Person", "4 Person", "6 Person", "8 or More"].map((capacity, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    {capacity}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2 text-black">Price</h2>
              <input
                type="range"
                className="w-full"
                min="0"
                max="100"
                defaultValue="50"
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
              <div className="text-right text-black">Max. ${maxPrice}</div>
            </div>
          </aside>

          {/* Main Content (Right Side) */}
          <div className="flex-1 px-4 lg:px-8 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredCars.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                  <p className="text-black font-bold">{product.name}</p>
                  <p className="text-[#90A3BF] mb-4">Sports</p>
                  <Image
                    src={product.image}
                    width={232}
                    height={72}
                    alt="Car"
                    loading="lazy"
                  />
                  <p className="font-bold mt-4 text-black">${product.price}/</p>
                  <p className="text-[#90A3BF]">Day</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-lg backdrop-blur-md hover:scale-105 hover:shadow-2xl hover:brightness-110 transition-all duration-300"
                  >
                    Rent Now
                  </button>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center mt-10 mb-10">
              <Link href={"/cart"}>
  <button className="text-white bg-gradient-to-r from-blue-500 to-blue-600 py-3 px-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 hover:shadow-2xl">
    Cart
  </button></Link>
</div>

          </div>
         
        </div>

        <Footer />
      </div>

      <ToastContainer />
    </>
  );
};

export default Page;
