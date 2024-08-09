"use client"
import React from 'react';
import { FaRocket, FaUserFriends, FaShieldAlt } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AboutPage = () => {
  const notify = () => {
    toast.info('Welcome to Our About Page!', {
      autoClose: 3000,
    });
  };

  React.useEffect(() => {
    notify();
  }, []);

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-8">
        <ToastContainer />
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <p className="text-center text-xl mb-8">
          Welcome to <span className="text-blue-500">Next Door</span>, where we bring you the best platform for property rentals.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="mb-6 md:mb-0">
            <FaRocket className="text-blue-500 text-6xl mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-center mb-2">Our Mission</h2>
            <p className="text-center">
              Our mission is to provide a seamless and efficient property rental experience. We aim to revolutionize the real estate industry with innovative and user-friendly solutions.
            </p>
          </div>

          <div className="mb-6 md:mb-0">
            <FaUserFriends className="text-green-500 text-6xl mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-center mb-2">Our Team</h2>
            <p className="text-center">
              Our team is composed of talented and passionate individuals dedicated to making Next Door the best it can be. We believe in teamwork and innovation.
            </p>
          </div>

          <div>
            <FaShieldAlt className="text-red-500 text-6xl mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-center mb-2">Our Values</h2>
            <p className="text-center">
              We prioritize security, integrity, and user satisfaction in everything we do. Our values guide us in delivering top-notch services to our users.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">Join Us on Our Journey</h2>
          <p className="text-lg">
            We are constantly working on new features and improvements. Stay tuned and be a part of our exciting journey towards making Next Door even better.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-8">
          <h2 className="text-2xl font-semibold mb-4">Connect with Us</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-900 text-3xl hover:text-blue-500" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-700 text-3xl hover:text-blue-500" />
            </a>
            <a href="https://instagram.com/allthingsman" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-500 text-3xl hover:text-blue-500" />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-blue-400 text-3xl hover:text-blue-500" />
            </a>
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-blue-600 text-3xl hover:text-blue-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
