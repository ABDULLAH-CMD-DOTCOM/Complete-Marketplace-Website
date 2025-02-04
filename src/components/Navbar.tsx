"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { NavigationMenuDemo } from "./ui/Navcn";

const Navbar = () => {
  const [wishlistCount, setWishlistCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateWishlistCount = () => {
      const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      setWishlistCount(savedWishlist.length);
    };

    updateWishlistCount();
    window.addEventListener("storage", updateWishlistCount);
    return () => window.removeEventListener("storage", updateWishlistCount);
  }, []);

  return (
    <nav className="bg-white w-full py-4 px-6 flex items-center justify-between shadow-xl relative">
      <Link href="/" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 font-extrabold text-3xl hover:brightness-110 transition-all duration-300">MORENT</Link>

      <div className="md:hidden flex items-center" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <FaBars className="text-2xl text-gray-800" />
      </div>

      <div className={`flex-1 justify-center ${isMobileMenuOpen ? 'flex flex-col absolute bg-white top-[60px] left-0 w-full py-4 md:static md:flex-row md:gap-6 md:bg-transparent' : 'hidden md:flex'}`}>
        <NavigationMenuDemo />
      </div>

      <div className="relative hidden md:flex items-center px-4 py-2 border-2 border-gray-300 rounded-3xl w-[250px] sm:w-[300px] md:w-[400px] mx-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-gray-600 mr-3 rotate-90">
          <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
        </svg>
        <input type="text" placeholder="Search Something here" className="w-full outline-none bg-transparent text-gray-600 text-sm focus:ring-2 focus:ring-blue-500 rounded-lg px-2" list="search-options" />
        <datalist id="search-options">
          <Link href={"/details"}>
          <option value="SUVs" />
          <option value="MPV" />
          <option value="Sedan" />
          <option value="Sport" />
          <option value="Hatchback" />
          <option value="Coupe" />
          <option value="Tesla" />
          <option value="Audi" />
          </Link>
        </datalist>
      </div>

      <div className={`${isMobileMenuOpen ? "flex" : "hidden"} md:flex items-center gap-4 ml-auto`}>
        <ClerkProvider>
          <SignedOut>
            <div className="px-6 py-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-extrabold rounded-xl shadow-lg backdrop-blur-md hover:scale-105 hover:shadow-2xl hover:brightness-110 transition-all duration-300">
              <SignInButton />
            </div>
          </SignedOut>
          <SignedIn>
            <div className="border border-gray-300 rounded-full p-1 hover:shadow-md transition">
              <UserButton />
            </div>
          </SignedIn>
        </ClerkProvider>
      </div>
    </nav>
  );
};

export default Navbar;