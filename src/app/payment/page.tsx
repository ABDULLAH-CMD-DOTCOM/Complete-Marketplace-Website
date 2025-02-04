'use client';  // Marking this as a client component

import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Don't forget to import the toast styles
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import StripePayment from "@/components/StripePayment";
import CheckoutPage from "@/components/CheckoutPage";
import dynamic from "next/dynamic";

interface FormData {
  name: string;
  phoneNumber: string;
  address: string;
  city: string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "",
    address: "",
    city: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Display a success notification
    toast.success("Rental booking successful!");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof FormData) => {
    setFormData({ ...formData, [field]: e.target.value });
  };
  const DynamicComponentWithNoSSR = dynamic(
    () => import('@/components/StripePayment'),
    { ssr: false }
  )
  

  return (
    <div className="bg-[#F6F7F9]">
      <Navbar />
      <div className="flex">
        {/* Sidebar (If needed, you can add a Sidebar here) */}

        {/* Main Content */}
        <main className="container mx-auto p-4 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Billing Info Section */}
            <section className="lg:col-span-2 space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-extrabold mb-4 text-black">Billing Info</h2>
                <p className="text-gray-600 mb-4">Please enter your billing info</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Name', 'Phone Number', 'Address', 'City'].map((label, index) => (
                    <div key={index}>
                      <label className="block text-gray-700">{label}</label>
                      <input
                        type="text"
                        value={formData[label.toLowerCase().replace(' ', '') as keyof FormData]}
                        onChange={(e) => handleInputChange(e, label.toLowerCase().replace(' ', '') as keyof FormData)}
                        className="w-full p-2 border border-gray-300 rounded mt-1 bg-[#F6F7F9]"
                        placeholder={`Your ${label}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Rental Info Section */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-extrabold text-black mb-4">Rental Info</h2>
                <p className="text-gray-600 mb-4">Please select your rental date</p>

                {['Pick-Up', 'Drop-Off'].map((type, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex items-center mb-4">
                      <h3 className="font-semibold text-black">{type}</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {['Locations', 'Date', 'Time'].map((label, idx) => (
                        <div key={idx}>
                          <label className="block text-gray-700 my-4">{label}</label>
                          <select className="w-full p-2 border text-black border-gray-300 rounded bg-[#F6F7F9]">
                            {label === 'Locations' && [
                              'Karachi', 'Lahore', 'Peshawar', 'Islamabad', 'Multan', 'Pindi', 'Okara', 'Kashmir'
                            ].map((option, i) => <option key={i}>{option}</option>)}
                            {label === 'Date' && [
                              '1 January', '2 January', '3 January', '4 January', '7 January', '12 January', '16 January', '26 January'
                            ].map((option, i) => <option key={i}>{option}</option>)}
                            {label === 'Time' && [
                              '1 AM', '3 AM', '4 AM', '7 AM', '9 AM', '10 AM', '11 AM'
                            ].map((option, i) => <option key={i}>{option}</option>)}
                          </select>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Payment Method Section */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                
              <DynamicComponentWithNoSSR />
                
              </div>

              {/* Confirmation Section */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-extrabold text-black mb-4">Confirmation</h2>
                <p className="text-gray-600 mb-4">
                  We are getting to the end. Just a few clicks and your rental is ready!
                </p>
                <div className="space-y-4">
                  {['Marketing and newsletter emails', 'Terms and conditions and privacy policy'].map((text, index) => (
                    <label key={index} className="block text-gray-700">
                      <input type="checkbox" className="mr-2" /> I agree with {text}.
                    </label>
                  ))}
                </div>
                <button
                  onClick={handleSubmit}
                  className="px-6 py-3 my-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg backdrop-blur-md hover:scale-105 hover:shadow-2xl hover:brightness-110 transition-all duration-300">
                  Rent Now
                </button>
              </div>
            </section>

            {/* Rental Summary Section */}
            <aside className="bg-white p-6 rounded-xl shadow-md h-[700px]">
              <h2 className="text-xl font-extrabold text-black mb-4">Rental Summary</h2>
              <p className="text-gray-600 mb-4">
                Prices may change depending on the length of the rental and the price of your rental car.
              </p>
              <div className="flex items-center mb-4">
                <Image
                  src="/product.png"
                  alt="Product Image"
                  width={150}
                  height={90}
                  className="w-auto h-auto object-cover rounded mr-4"
                />
                <div>
                  <h3 className="font-bold text-black">Nissan GTR</h3>
                  <p className="text-yellow-500 flex items-center">
                    {[...Array(4)].map((_, i) => (
                      <i key={i} className="fa fa-star"></i>
                    ))}
                    <i className="fa fa-star-half-alt"></i>
                    <span className="ml-2">440 Reviews</span>
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4">
                {['Subtotal', 'Tax'].map((label, index) => (
                  <div key={index} className="flex justify-between mb-2">
                    <span className="text-gray-700">{label}</span>
                    <span className="text-gray-700">${label === 'Subtotal' ? '80.00' : '0.00'}</span>
                  </div>
                ))}

                <div className="flex justify-between mb-4">
                  <span className="text-gray-700 font-semibold">Promo Code</span>
                  <input
                    type="text"
                    placeholder="Enter Promo Code"
                    className="w-[160px] p-2 border border-gray-300 rounded"
                  />
                </div>

                <div className="flex justify-between mb-4">
                  <span className="text-gray-700 font-bold text-2xl">Total</span>
                  <span className="text-gray-700 font-bold text-2xl">$80.00</span>
                </div>
                <p className="text-black text-sm mt-2">Overall price includes rental discounts.</p>
              </div>
              <div className="flex justify-center items-center my-6">
          <Link href="/Feedback">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg backdrop-blur-md hover:scale-105 hover:shadow-2xl hover:brightness-110 transition-all duration-300">
              Feedback
            </button>
          </Link>
        </div>
            </aside>
          </div>

          {/* Toast Notification */}
          <ToastContainer />
        </main>

       
      </div>

      <Footer />
    </div>
  );
}
