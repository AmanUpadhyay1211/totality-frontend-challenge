// components/VerticalNavbar.js
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { ManageAccount } from "@/components/index";

export default function VerticalNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const reduxUserData = useSelector((state) => state.auth.userData);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        onClick={toggleNavbar}
        className="fixed bg-transparent w-auto top-0 right-0 p-4 z-50 text-white"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <div
        className={`fixed top-0 right-0 h-screen w-[250px] bg-gray-900 p-4 z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {reduxUserData ? (
          <div className="flex items-center space-x-4">
            <ManageAccount /> <div>
            <p className="text-gray-900 font-semibold">{reduxUserData?.userName || reduxUserData?.name}</p>
            <p className="text-gray-600">{reduxUserData?.email || reduxUserData?.email}</p>
                               </div>
          </div>
        ) : (
          <Link href="/signin">
            <div className="hover:text-yellow-500 text-white">Sign In</div>
          </Link>
        )}
        <div className="my-2">
        <Link href="/cart">
          <p className="text-xl font-bold">Cart</p>
        </Link></div>

        <div>
          <div className="text-xl font-bold">More</div>
          <div className="flex flex-col space-y-4 mt-4">
            <Link href="/contact">
              <p className="hover:text-yellow-500">Contact</p>
            </Link>
            <Link href="/explore">
              <p className="hover:text-yellow-500">Explore</p>
            </Link>
            <Link href="/about">
              <p className="hover:text-yellow-500">About</p>
            </Link>
            <Link href="/social-media">
              <p className="hover:text-yellow-500">Social Media</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
