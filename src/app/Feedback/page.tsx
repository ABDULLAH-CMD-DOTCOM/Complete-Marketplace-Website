"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import axios from "axios";  // Axios for API requests
import { toast, ToastContainer } from "react-toastify"; // Importing Toastify
import { FaCheckCircle, FaExclamationCircle, FaTimesCircle } from "react-icons/fa"; // Import React Icons
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

// Define types for the form and feedback
interface FeedbackType {
  name: string;
  product: string;
  feedback: string;
}

const Feedback = () => {
  const [form, setForm] = useState<FeedbackType>({
    name: "",
    product: "",
    feedback: "",
  });

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload

    if (form.name && form.product && form.feedback) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/send-feedback",
          form
        );

        if (response.status === 200) {
          toast.success("Your feedback has been successfully submitted!", {
            position: "top-center",
            autoClose: 5000,
            closeButton: true,
            hideProgressBar: false,
            icon: <FaCheckCircle size={24} color="green" />,  // Success icon
          });
          setForm({ name: "", product: "", feedback: "" });  // Reset form after submit
        }
      } catch (error) {
        toast.error("Oops! Something went wrong. Please try again later.", {
          position: "top-center",
          autoClose: 5000,
          closeButton: true,
          hideProgressBar: false,
          icon: <FaTimesCircle size={24} color="red" />,  // Error icon
        });
      }
    } else {
      toast.warn("Please fill out all fields before submitting.", {
        position: "top-center",
        autoClose: 5000,
        closeButton: true,
        hideProgressBar: false,
        icon: <FaExclamationCircle size={24} color="orange" />,  // Warning icon
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#F6F7F9] py-8">
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
          {/* Feedback Form */}
          <h2 className="text-3xl font-bold text-center text-black mb-6">
            We Value Your Feedback
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-black">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md text-black focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out hover:border-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="product" className="block text-lg font-medium text-black">
                Product
              </label>
              <input
                type="text"
                name="product"
                id="product"
                value={form.product}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-3 border border-gray-300 text-black rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out hover:border-blue-500"
                placeholder="Product or Marketplace"
                required
              />
            </div>
            <div>
              <label htmlFor="feedback" className="block text-lg font-medium text-black">
                Your Feedback
              </label>
              <textarea
                name="feedback"
                id="feedback"
                value={form.feedback}
                onChange={handleChange}
                rows={4}
                className="mt-2 w-full px-4 py-3 border border-gray-300 text-black rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out hover:border-blue-500"
                placeholder="Share your thoughts"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Submit Feedback
            </button>
          </form>

          {/* Toast Notifications */}
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            closeButton
            newestOnTop
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Feedback;
