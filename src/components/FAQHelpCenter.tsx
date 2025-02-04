"use client";
import React from "react";
import { FaPhoneAlt, FaRegCommentDots } from "react-icons/fa"; // Importing icons for phone and chat

const FAQHelpCenter = () => {
  // Sample FAQ data
  const faqData = [
    { question: "How can I rent a car?", answer: "You can rent a car by signing up and choosing your vehicle on our website." },
    { question: "What are the payment options?", answer: "We accept all major credit cards and debit cards for payments." },
    { question: "Is there a delivery service?", answer: "Yes, we offer car delivery within the city for an additional fee." },
    { question: "What should I do in case of an accident?", answer: "Call our customer support immediately for assistance and guidance." },
    { question: "How can I cancel my booking?", answer: "You can cancel your booking through your account or by contacting our support team." },
  ];

  return (
    <div className="faq-container bg-white text-black min-h-screen px-4 py-8 flex flex-col items-center">
      {/* FAQ Section */}
      <div className="faq-section mb-12 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-blue-500 mb-6 text-center">Frequently Asked Questions (FAQ)</h2>
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item mb-6 border-b border-gray-300 pb-4">
            <h3 className="font-semibold text-xl text-blue-500">{faq.question}</h3>
            <p className="text-gray-700 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="contact-section mt-12 flex flex-col sm:flex-row justify-center items-center w-full max-w-4xl space-y-6 sm:space-y-0 sm:space-x-8">
        <div className="contact-info flex flex-col items-center sm:items-start text-center sm:text-left text-gray-700 mb-6 sm:mb-0">
          <h4 className="font-semibold text-lg mb-4 text-blue-500">Need Assistance?</h4>
          <div className="flex items-center text-gray-700 mb-2">
            <FaPhoneAlt className="mr-2 text-blue-500" />
            <span>+1 800 123 4567</span>
          </div>
          <div className="flex items-center text-gray-700 mb-2">
            <FaRegCommentDots className="mr-2 text-blue-500" />
            <span>Live Chat</span>
          </div>
        </div>

        {/* Buttons for Live Chat and Call Us */}
        <div className="flex gap-6">
          {/* Live Chat Button */}
          <div className="chatbot-btn p-4 bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-600 transition duration-300 flex items-center justify-center">
            <a
              href="https://your-chatbot-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-white font-medium text-sm sm:text-base"
            >
              <FaRegCommentDots size={24} />
              <span className="ml-2">Chat with Us</span>
            </a>
          </div>

          {/* Call Us Button */}
          <div className="call-us-btn p-4 bg-green-500 text-white rounded-full cursor-pointer hover:bg-green-600 transition duration-300 flex items-center justify-center">
            <a
              href="tel:+18001234567"
              className="flex items-center justify-center text-white font-medium text-sm sm:text-base"
            >
              <FaPhoneAlt size={24} />
              <span className="ml-2">Call Us</span>
            </a>
          </div>

          {/* Email Button */}
          <div className="email-btn p-4 bg-orange-500 text-white rounded-full cursor-pointer hover:bg-orange-600 transition duration-300 flex items-center justify-center">
            <a
              href="mailto:ranabdullah90800@gmail.com?subject=Need Assistance&body=Hello, I need assistance with my booking."
              className="flex items-center justify-center text-white font-medium text-sm sm:text-base"
            >
              <FaRegCommentDots size={24} />
              <span className="ml-2">Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQHelpCenter;
