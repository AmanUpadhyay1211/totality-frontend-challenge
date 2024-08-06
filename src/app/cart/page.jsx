"use client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeCartItem,
  incrementItemQuantity,
  decrementItemQuantity,
} from "@/Redux/slices/cartSlice";
import Image from "next/image";
import Script from "next/script";
import Razorpay from "razorpay";
import envConf from "@/envConf/envConf";

const Cart = () => {
  const dispatch = useDispatch();
  const reduxUserData = useSelector((state) => state.auth.userData);
  const reduxCartData = useSelector((state) => state.cart.cart);
  const [cartItem, setcartItem] = useState(reduxCartData?.cartItem || []);
  const [JSONcart, setJSONcart] = useState([]);
  useEffect(() => {
    setcartItem(reduxCartData?.cartItem || []);
  }, [reduxCartData]);
  useEffect(() => {
    const parsedCart = cartItem.map((item) => {
      try {
        return JSON.parse(item);
      } catch (error) {
        console.error("Invalid JSON string:", item);
        return null;
      }
    });
    setJSONcart(parsedCart);
  }, [cartItem]);

  const [amount, setAmount] = useState("100");
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
  setIsProcessing(true);
  try {
    // Create Order
    const response = await fetch("/api/razorpayPayment", { method: "POST" });
    const data = await response.json();

    if (response.ok) {
      // Initializing Razorpay
      const options = {
        key: envConf.razorpayKeyID,
        amount: amount * 100,
        currency: "INR",
        name: "Next Door : Test Payment",
        description: "Next Door : Test Payment",
        order_id: data.orderId,
        handler: function (response) {
          console.log(response);
          // Handle successful payment (e.g.: update UI, send to server)
        },
        prefill: {
          name: "Gaurav Jha",
          email: "gouravhumai@gmail.com",
          contact: "9996969699",
        },
        theme: {
          color: "3399cc",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } else {
      console.log("Error creating order:", data.error);
    }
  } catch (error) {
    console.log("payment failed:", error);
  } finally {
    setIsProcessing(false);
  }
};
  

  const handleRemove = (id) => {
    dispatch(removeCartItem(id));
  };

  const handleIncrement = (id) => {
    dispatch(incrementItemQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementItemQuantity(id));
  };

  const totalItems = JSONcart.length;
  const totalAmount = JSONcart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto my-10 p-5">
      <Script src="https://checkout.razorpay.com/v1/checkout.js"/>
      <h2 className="text-2xl font-bold mb-5">Cart Items</h2>
      <div className="flex gap-4 justify-between">
        <div className="w-2/3">
          {JSONcart.map((item) => (
            <div
              key={item.id}
              className="flex items-center p-5 mb-5 text-black bg-white shadow-lg rounded-lg"
            >
              <Image
                src={item.images[0]}
                alt={item.title}
                height={500}
                width={500}
                className="w-24 h-24 rounded-md"
              />
              <div className="ml-5 flex-1">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-500">{item.description}</p>
                <p className="text-lg font-bold">₹ {item.price}</p>
                <div className="flex items-center mt-2">
                  <p className="mr-2">Number of Nights -</p>
                  <button
                    onClick={() => handleDecrement(item.id)}
                    className="px-2 py-1 border rounded-md"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="px-2 py-1 border rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="ml-5 px-4 py-2 bg-red-400 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <div className="w-1/3 p-5 text-black bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold mb-5">Order Summary</h3>
          <p className="mb-2">Total Items: {totalItems}</p>
          <p className="mb-2">Total Amount: ₹ {totalAmount.toFixed(2)}</p>
          <p className="mb-2">Full Name: {reduxUserData.name}</p>
          <p className="mb-5">Email: {reduxUserData.email}</p>
          <button
            onClick={handlePayment}
            disabled={isProcessing}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            {isProcessing ? "Processing..." : "Checkout"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
