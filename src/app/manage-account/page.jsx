"use client";
import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { LogoBar, VerticalNavbar } from '@/components/index';
import { useSelector } from 'react-redux';
import Image from 'next/image';

const ManageAccount = () => {
  const userData = useSelector((state) => state.auth.userData);

  const userInfo = {
    profileName: "ALL THINGS",
    email: "amanupadhyay1211@gmail.com",
    connectedAccounts: [
      {
        provider: "Google",
        email: "amanupadhyay1211@gmail.com",
        icon: <FaGoogle />,
      },
    ],
    devices: [
      {
        name: "X11",
        os: "Chrome 127.0.0.0",
        ip: "2401:4900:8842:7788:96db:5a5c:440:5a35",
        location: "Delhi, IN",
        lastActive: "Today at 8:01 PM",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <LogoBar /><VerticalNavbar />
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Account</h2>

        <div className="mb-8">
          <h3 className="text-lg font-semibold">Profile</h3>
          <div className="flex items-center mt-4">
            <Image
              src="https://via.placeholder.com/100"
              alt="Profile"
              height={100} width={100}
              className="w-16 h-16 rounded-full"
            />
            <div className="ml-4">
              <h4 className="font-bold text-lg">{userData.userName || userData.name}</h4>
              <p className="text-sm text-gray-500">{userData.email}</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold">Email addresses</h3>
          <div className="mt-4">
            <p>{userData.email} <span className="text-sm text-gray-500">(Primary)</span></p>
            <button className="text-blue-500 mt-2 hover:underline">+ Add an email address</button>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold">Connected accounts</h3>
          <div className="mt-4">
            {userInfo.connectedAccounts.map((account, index) => (
              <div key={index} className="flex items-center mb-4">
                <div className="text-2xl mr-3">{account.icon}</div>
                <p>{account.provider} ({account.email})</p>
              </div>
            ))}
            <button className="text-blue-500 hover:underline">+ Connect account</button>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-6">Security</h2>

        <div className="mb-8">
          <h3 className="text-lg font-semibold">Password</h3>
          <button className="text-blue-500 mt-2 hover:underline">+ Set password</button>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold">Active devices</h3>
          <div className="mt-4">
            {userInfo.devices.map((device, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4">
                <div>
                  <p className="font-bold">{device.name}</p>
                  <p className="text-sm text-gray-500">{device.os}</p>
                  <p className="text-sm text-gray-500">IP: {device.ip}</p>
                  <p className="text-sm text-gray-500">{device.location}</p>
                  <p className="text-sm text-gray-500">{device.lastActive}</p>
                </div>
                <button className="text-red-500 hover:underline">Logout</button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-red-500">Danger</h3>
          <button className="text-red-500 mt-2 hover:underline">DELETE ACCOUNT</button>
          <p className="text-sm text-gray-500 mt-2">Delete your account and all its associated data.</p>
        </div>
      </div>
    </div>
  );
};

export default ManageAccount;
