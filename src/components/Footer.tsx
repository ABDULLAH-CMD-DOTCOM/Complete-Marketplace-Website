import React from 'react';
import { FaDiscord, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h1 className="text-blue-600 text-3xl font-extrabold">MORENT</h1>
            <p className="text-gray-600 mt-2">Our vision is to provide convenience and help increase your sales business.</p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:flex-row justify-center sm:justify-start md:grid-cols-3 gap-6 mt-6 md:mt-0">
            <div>
              <h2 className="text-gray-800 font-bold">About</h2>
              <ul className="mt-2 space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">How it works</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Featured</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Partnership</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Business Relation</a></li>
              </ul>
            </div>

            <div>
              <h2 className="text-gray-800 font-bold">Community</h2>
              <ul className="mt-2 space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Events</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Podcast</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Invite a friend</a></li>
              </ul>
            </div>

            <div>
              <h2 className="text-gray-800 font-bold">Socials</h2>
              <ul className="mt-2 space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Discord</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Instagram</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Twitter</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Connect with Developer Section */}
        <div className="text-center md:text-left mt-8 mb-6">
          <h2 className="text-gray-800 font-semibold text-lg mb-4">Connect With Developer</h2>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="https://discord.com"
              className="text-white bg-blue-600 py-3 px-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <FaDiscord />
              <span>Discord</span>
            </a>
            <a
              href="https://www.linkedin.com/in/abdullah-abdulrehman-989b352b3"
              className="text-white bg-blue-600 py-3 px-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <p className="text-black text-sm mt-8 md:mt-0 text-center md:text-left">&copy;2024 MORENT. All rights reserved Abdullah</p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 md:mt-0 justify-center md:justify-start mt-6">
            <a href="#" className="text-black font-semibold hover:text-gray-800">Privacy & Policy</a>
            <a href="#" className="text-black font-semibold hover:text-gray-800">Terms & Condition</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
