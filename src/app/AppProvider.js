// src/app/provider.js
"use client";

import { Provider } from "react-redux";
import store from "@/Redux/store";

export default function AppProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
