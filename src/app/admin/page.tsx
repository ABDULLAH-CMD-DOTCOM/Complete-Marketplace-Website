'use client'; // Add this at the top
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import 'material-icons/iconfont/material-icons.css'; // Import Material Icons CSS
import { Piecharts } from '@/components/ui/Piechart';

const Page = () => {
  return (
    <div className="bg-[#F6F7F9] min-h-screen flex flex-col">
      
      <Navbar />

      <div className="flex flex-col md:flex-row flex-1 py-6">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-white p-6 shadow-md">
          <nav className="flex flex-col h-full p-4 space-y-4">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Main Menu
            </div>
            <a
              href="#"
              className="flex items-center space-x-3 py-2 px-3 rounded-md text-blue-600 bg-blue-100"
            >
              <span className="material-icons">home</span>
              <span>Dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 py-2 px-3 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <span className="material-icons">directions_car</span>
              <span>Car Rent</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 py-2 px-3 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <span className="material-icons">insights</span>
              <span>Insight</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 py-2 px-3 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <span className="material-icons">receipt</span>
              <span>Reimburse</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 py-2 px-3 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <span className="material-icons">inbox</span>
              <span>Inbox</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 py-2 px-3 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <span className="material-icons">calendar_today</span>
              <span>Calendar</span>
            </a>

            <div className="mt-8 text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Preferences
            </div>
            <a
              href="#"
              className="flex items-center space-x-3 py-2 px-3 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <span className="material-icons">settings</span>
              <span>Settings</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 py-2 px-3 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <span className="material-icons">help_outline</span>
              <span>Help & Center</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 py-2 px-3 rounded-md text-gray-600 hover:bg-gray-100 mt-auto"
            >
              <span className="material-icons">logout</span>
              <span>Log Out</span>
            </a>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full">
              <Image
                className="w-full h-auto rounded-lg shadow"
                src="/Details Rental.png"
                height={836}
                width={534}
                alt="Rental details"
              />
            </div>

            <div className="w-full bg-white">

            <Piecharts/>
              <Image
                className="w-full h-auto rounded-lg shadow my-8"
                src="/rrr.png"
                height={524}
                width={480}
                alt="More rental details"
              />
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
