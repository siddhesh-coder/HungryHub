import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../utils/Store/cartSlice";
import useNotify from "../../hooks/useNotify.js";

const ClearCart = () => {
  const dispatch = useDispatch();
  const notify = useNotify();

  const handleClearCart = () => {
    dispatch(clearCart());
    notify({ message: "Cart cleared" });
  };

  return (
    <button
      type="button"
      onClick={handleClearCart}
      className="flex items-center justify-center w-40 px-6 py-2 mt-4 mb-4 ml-6 text-base font-medium text-white transition-all bg-black border border-transparent rounded-md shadow-sm hover:bg-gray-900"
    >
      Clear Cart
    </button>
  );
};

export default ClearCart;