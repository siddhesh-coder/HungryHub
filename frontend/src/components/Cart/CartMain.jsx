import React from "react";
import CartItems from "./CartItems";
import { X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { EMPTY_CART } from "../../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { handleOpenCart } from "../../utils/Store/toggleCartSlice";

const CartMain = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleShowCart = () => {
    dispatch(handleOpenCart(false));
  };
  return (
    <div className="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
      <div className="flex items-start justify-between">
        <Dialog.Title className="text-lg font-medium text-gray-900">
          Cart
        </Dialog.Title>
        <div className="flex items-center ml-3 h-7">
          <button
            type="button"
            data-testid="toggle-cart"
            className="relative p-2 -m-2 text-gray-400 hover:text-gray-500"
            onClick={() => handleShowCart()}
          >
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Close panel</span>
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      </div>
      {cartItems.length === 0 ? (
        <img src={EMPTY_CART} alt="emptycart" className="relative top-40" />
      ) : (
        <CartItems cartItems={cartItems} />
      )}
    </div>
  );
};

export default CartMain;
