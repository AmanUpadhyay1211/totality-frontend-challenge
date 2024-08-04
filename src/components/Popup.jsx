// components/PopupCard.js
"use client"
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const PopupCard = ({ message, color, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleClose = () => {
    setVisible(false);
    if (onClose) onClose();
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white rounded-lg shadow-lg p-6 w-80 relative">
      <div className="flex justify-between items-center mb-4">
        <span className="font-bold text-black">Server Message</span>
        <button 
          className="text-xl font-semibold text-gray-600 hover:text-gray-900"
          onClick={handleClose}
        >
          ×
        </button>
      </div>
      <div className="text-center mb-4" style={{ color: color }}>
        {message}
      </div>
      <button 
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mx-auto block"
        onClick={handleClose}
      >
        OK
      </button>
    </div>
  </div>
  );
};

PopupCard.propTypes = {
  message: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClose: PropTypes.func
};

export default PopupCard;
