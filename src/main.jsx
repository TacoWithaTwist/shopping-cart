import React from "react";
import ReactDOM from "react-dom/client";
import { ShopProvider } from "./components/ShopContext.jsx";
import Router from "./components/Router.jsx";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopProvider value={{ cartItems: [], addToCart: () => {} }}>
      <Router></Router>
    </ShopProvider>
  </React.StrictMode>
);
