"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <div className="bg-[#F6F7F9] w-full">
        {/* Main Hero Section */}
        <div className="flex flex-col sm:flex-row justify-center max-w-screen-xl mx-auto px-4 py-8 space-y-6 sm:space-y-0 sm:space-x-6">
          {/* Left Section */}
          <div className="bg-[#54A6FF] flex flex-col items-center w-full sm:w-1/2 p-6 sm:p-8 rounded-xl space-y-6">
            <h2 className="text-xl sm:text-3xl font-bold text-center">
              The Best Platform for Car Rental
            </h2>
            <p className="text-base sm:text-lg text-center">
              Ease of doing a car rental safely and reliably. Of course at a low price.
            </p>
            <Link href="/payment">
              <button className="bg-[#2f53c3] py-3 px-6 rounded-xl text-white font-semibold text-lg w-full sm:w-auto hover:bg-blue-600 transition duration-300 transform hover:scale-105">
                Rent Now
              </button>
            </Link>
            <div className="overflow-hidden">
              <Image src="/img-1.png" width={406} height={116} alt="car-1" className="car-animation mx-auto" />
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-[#3563E9] flex flex-col items-center w-full sm:w-1/2 p-6 sm:p-8 rounded-xl space-y-6">
            <h2 className="text-xl sm:text-3xl font-bold text-center">
              Easy way to rent a car at a low price
            </h2>
            <p className="text-base sm:text-lg text-center">
              Providing cheap car rental services and safe and comfortable facilities.
            </p>
            <Link href="/payment">
              <button className="bg-[#54A6FF] py-3 px-6 rounded-xl text-white font-semibold text-lg w-full sm:w-auto hover:bg-[#2f53c3] transition duration-300 transform hover:scale-105">
                Rent Now
              </button>
            </Link>
            <div className="overflow-hidden">
              <Image src="/img-2.png" width={340} height={108} alt="car-2" className="car-animation mx-auto" />
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-[#54A6FF] to-[#3563E9] text-white p-8 rounded-xl text-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto mt-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
            Don’t Just Rent, Drive in Style!
          </h2>
          <p className="text-lg sm:text-xl font-semibold">
            Get Premium Cars at Great Prices
          </p>
        </div>

        {/* Pick-up and Drop-off Section */}
        <div className="flex flex-col lg:flex-row justify-center py-12 w-full bg-gray-50">
          <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-screen-xl gap-8">
            {/* Pick-up Section */}
            <div className="bg-white py-8 px-8 lg:py-12 lg:px-12 w-full lg:w-[45%] rounded-xl shadow-xl">
              <div className="flex items-center mb-6">
                <Image
                  className="mr-4"
                  src={"/mark-1.png"}
                  width={28}
                  height={28}
                  alt="mark"
                />
                <p className="text-black font-bold text-xl">Pick-up</p>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4 text-black font-semibold text-sm">
                <p>Location</p>
                <p className="mx-3">Date</p>
                <span className="mx-10">Time</span>
              </div>
              <div className="flex flex-col lg:flex-row gap-4">
                <select className="text-gray-700 w-full lg:w-auto py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select city ↓</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Islamabad">Islamabad</option>
                </select>
                <input
                  type="date"
                  className="text-gray-700 w-full lg:w-auto py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="time"
                  className="text-gray-700 w-full lg:w-auto py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Switch Icon */}
            <div className="flex justify-center items-center mx-4 lg:mx-8">
              <Image
                src={"/Switch.png"}
                width={100}
                height={100}
                alt="switch"
                className="w-16 h-16 lg:w-24 lg:h-24"
              />
            </div>

            {/* Drop-off Section */}
            <div className="bg-white py-8 px-8 lg:py-12 lg:px-12 w-full lg:w-[45%] rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Image
                  className="mr-4"
                  src={"/mark-2.png"}
                  width={28}
                  height={28}
                  alt="mark"
                />
                <p className="text-black font-bold text-xl">Drop-off</p>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4 text-black font-semibold text-sm">
                <p>Location</p>
                <p className="mx-3">Date</p>
                <span className="mx-10">Time</span>
              </div>
              <div className="flex flex-col lg:flex-row gap-4">
                <select className="text-gray-700 w-full lg:w-auto py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select city ↓</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Islamabad">Islamabad</option>
                </select>
                <input
                  type="date"
                  className="text-gray-700 w-full lg:w-auto py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="time"
                  className="text-gray-700 w-full lg:w-auto py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;