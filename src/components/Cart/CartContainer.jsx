import React from "react";
import { useSelector } from "react-redux";
import CheckoutBox from "./CheckoutBox";
import ClearCart from "./ClearCart.jsx";
import CartMain from "./CartMain.jsx";

const CartContainer = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalPrice = useSelector((store) => store.cart.totalPrice);
  return (
    <div className="flex flex-col h-full overflow-y-scroll bg-white shadow-xl">
      <CartMain />
      {cartItems.length === 0 ? null : <ClearCart />}
      {cartItems.length === 0 ? null : <CheckoutBox totalPrice={totalPrice} />}
    </div>
  );
};

export default CartContainer;
