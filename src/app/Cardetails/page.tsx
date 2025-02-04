"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Page = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [maxPrice, setMaxPrice] = useState(100);
  const [filteredCars, setFilteredCars] = useState<any[]>([]);

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
    setFilteredCars(cars.filter((car) => car.price <= maxPrice));
  }, [maxPrice]);

  const addToCart = (product: any) => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    if (!cartItems.some((item: any) => item.id === product.id)) {
      const updatedCart = [...cartItems, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCart(updatedCart);
    }
  };

  return (
    <div className="bg-[#f6f7f9] min-h-screen">
      <Navbar />

      <div className="flex flex-col lg:flex-row p-6 gap-6">
        {/* Sidebar */}
        <aside className="bg-white p-6 rounded-lg shadow-md w-full lg:w-1/4">
          <h2 className="text-lg font-bold text-black mb-4">Filters</h2>

          {/* Car Type Filter */}
          <div className="mb-6">
            <h3 className="font-extrabols text-black mb-2">Type</h3>
            <ul className="text-black">
              {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map(
                (type, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    {type}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Capacity Filter */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Capacity</h3>
            <ul className="text-black">
              {["2 Person", "4 Person", "6 Person", "8 or More"].map(
                (capacity, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    {capacity}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className=" mb-2 text-black font-extrabold">Price</h3>
            <input
              type="range"
              className="w-full"
              min="0"
              max="100"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
            <div className="text-right text-black font-extrabold">Max. ${maxPrice}</div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="w-full lg:w-3/4">
  {/* Filters Section */}
  <aside className="w-full lg:w-[25%] bg-white p-4 rounded-lg shadow-md">
    {/* Filters Content Here */}
  </aside>

  {/* Main Content */}
  <div className="w-full lg:w-[75%] flex flex-col gap-10">
    {/* Car Detail Section */}
    <section className="w-full flex flex-col md:flex-row gap-5 items-center justify-around">
      <div className="first flex flex-col gap-4 w-full lg:max-w-[470px] lg:max-h-[508px]">
        <div>
          <Image src="/View.png" alt="" width={492} height={360} />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-between lg:gap-2">
          <Image src="/View 1.png" alt="Thumbnail 1" width={148} height={124} className="w-full sm:w-auto" />
          <Image src="/View 2.png" alt="Thumbnail 2" width={148} height={124} className="w-full sm:w-auto" />
          <Image src="/View 3.png" alt="Thumbnail 3" width={148} height={124} className="w-full sm:w-auto" />
        </div>
      </div>
      <div className="flex flex-col w-full lg:max-w-[492px] h-auto lg:max-h-[508px] bg-white justify-between rounded-xl shadow-md">
        <Image src="/Detail Car (1).png" alt="Detail Car" width={492} height={508} className="w-full h-auto rounded-t-xl object-cover" />
        <div className="p-4 flex items-center gap-4">
          <div className="flex items-center justify-between w-full">
            <h1 className="font-bold text-lg sm:text-xl lg:text-2xl text-black">
              $80.00 / <span className="text-gray-500 text-sm lg:text-base">day $100.00</span>
            </h1>
          </div>
          <Link href="/payment">
            <button className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg  p-3 sm:p-4 px-6 sm:px-10 text-nowrap text-white  hover:shadow-2xl hover:brightness-110 transition-all duration-300">
      
              Rent Now
            </button>
          </Link>
        </div>
      </div>
    </section>

    {/* Reviews Section */}
    <section className="w-full flex items-center justify-center">
      <Image src="/Reviews.png" alt="" width={1010} height={452} className="hidden md:flex" />
      <Image src="/Reviews (1).png" alt="" width={492} height={384} className="md:hidden" />
    </section>

  
   
    
  </div>


          {/* Cars Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 my-7">
            {filteredCars.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center"
              >
                {/* Car Image */}
                <Image
                  src={car.image}
                  alt={car.name}
                  width={300}
                  height={200}
                  className="object-cover rounded-lg"
                />

                {/* Car Details */}
                <div className="w-full text-center mt-4">
                  <h2 className="font-bold text-xl">{car.name}</h2>
                  <p className="text-gray-600 text-lg">${car.price} / day</p>
                </div>

<Link href={"/details"}>
                <button
               className="px-6 py-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-lg backdrop-blur-md hover:scale-105 hover:shadow-2xl hover:brightness-110 transition-all duration-300">
                  Rent Now
                </button>
                </Link>
              </div>
            ))}
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
