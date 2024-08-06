// src/app/api/razorpayPayment/route.js
import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import envConf from "@/envConf/envConf";

const razorpay = new Razorpay({
  key_id: envConf.razorpayKeyID,
  key_secret: envConf.razorpayKeySecret,
});

export async function POST(request) {
  try {
    const order = await razorpay.orders.create({
      amount: 100 * 100, // Amount in Paise
      currency: "INR",
      receipt: "receipt_" + Math.random().toString(36).substring(7),
    });
    return NextResponse.json({ orderId: order.id }, { status: 200 });
  } catch (error) {
    console.error(`Error creating order: ${error}`);
    return NextResponse.json({ error: "Error Creating Order" }, { status: 500 });
  }
}
