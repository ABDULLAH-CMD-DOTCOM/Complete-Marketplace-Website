import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200 shadow-xl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-blue-700 text-3xl font-extrabold">MORENT</h1>
            <p className="text-gray-600 mt-2">Our vision is to provide convenience and help increase your sales business.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-gray-800 font-semibold">About</h2>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">How it works</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Featured</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Partnership</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Business Relation</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-gray-800 font-semibold">Community</h2>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Events</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Podcast</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Invite a friend</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-gray-800 font-semibold">Socials</h2>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Twitter</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-900">Whatsapp (03452503136)</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">TikTok</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center md:text-left">
          <h2 className="text-gray-800 font-semibold text-lg mb-4">Connect With Developer</h2>
          <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-8">
            <a
              href="https://discord.com"
              className="text-white bg-blue-600 py-3 px-6 rounded-xl shadow-lg transition-transform transform hover:scale-110 hover:bg-blue-700"
            >
              Discord
            </a>
            <a
              href="https://www.linkedin.com/in/abdullah-abdulrehman-989b352b3"
              className="text-white bg-blue-600 py-3 px-6 rounded-xl shadow-lg transition-transform transform hover:scale-110 hover:bg-blue-700"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-center md:text-left">
          <p className="text-black text-sm mt-8 md:mt-0">&copy;2022 MORENT. All rights reserved Abdullah</p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-8 md:mt-0">
            <a href="#" className="text-black font-semibold hover:text-gray-900">Privacy & Policy</a>
            <a href="#" className="text-black font-semibold hover:text-gray-900">Terms & Condition</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
