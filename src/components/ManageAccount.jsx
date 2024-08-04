"use client";
import React, { useState } from "react";
import { Btn } from "@/components/index";
import { useDispatch, useSelector } from "react-redux";
import authService from "@/appwrite/authService";
import { logout } from "@/Redux/slices/authSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";

function ManageAccount() {
  const reduxUserData = useSelector((state) => state.auth.userData);
  const [userData, setUserData] = useState(reduxUserData);
  const [menuOpen, setMenuOpen] = useState(false);
  const userAvatar = userData?.prefs?.avatar;
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await authService.logout();
      dispatch(logout());
      router.push("/");
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  const getInitials = (fullName) => {
    let nameParts = fullName.split(" ");
    let initials = nameParts.map((name) => name.charAt(0)).join("");
    return initials.toUpperCase();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  if (!userData) {
    return null;
  }

  return (
    <div className="relative">
      <div className="flex items-center space-x-4 cursor-pointer" onClick={toggleMenu}>
        <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full text-white font-bold">
          {userAvatar ? (
            <Image src={userAvatar} alt="avatar" height={500} width={500} className="rounded-full" />
          ) : (
            getInitials(userData.userName)
          )}
        </div>
      </div>
      {menuOpen && (
        <div className="absolute right-0 mt-2 w-auto bg-white rounded-md shadow-lg z-20">
          <div className="flex items-center space-x-2 p-4">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full text-white font-bold">
              {userAvatar ? (
                <Image src={userAvatar} alt="avatar" height={500} width={500} className="rounded-full" />
              ) : (
                getInitials(userData.userName)
              )}
            </div>
            <div className="text-sm ">
            
              <p className="text-gray-900 font-semibold">{userData.name}</p>
              <p className="text-gray-600">{userData.email}</p>
            </div>
          </div>
          <div className="py-2">
            <button
              onClick={() => router.push("/manage-account")}
              className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
            >
              Manage Account
            </button>
            <button
              onClick={handleLogout}
              className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageAccount;
