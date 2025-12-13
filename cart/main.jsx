import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./cart.css";
import Cart from "./components/cart";

createRoot(document.getElementById("cart-root")).render(
  <StrictMode>
    <Cart />
  </StrictMode>
);
