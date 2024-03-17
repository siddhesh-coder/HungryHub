import React from "react";
import { Minus, Plus } from "lucide-react";
import { incrementItem } from "../../utils/Store/cartSlice";
import { decrementItem } from "../../utils/Store/cartSlice";
import { removeItem } from "../../utils/Store/cartSlice";
import { useDispatch } from "react-redux";
import useNotify from "../../hooks/useNotify";

const CartItemInfo = ({ name, price, id, qty }) => {
  const dispatch = useDispatch();
  const notify = useNotify();

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
    notify({ message: "Item removed" });
  };

  const handleIncrement = (id) => {
    dispatch(incrementItem(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementItem(id));
  };
  return (
    <div className="flex flex-col flex-1 ml-4">
      <div>
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3>
            <p>{name}</p>
          </h3>
          <p className="ml-4">₹{price}</p>
        </div>
      </div>
      <div className="flex items-end justify-between flex-1 text-sm">
        <div className="flex items-center justify-center">
          <Minus
            data-testid="minus"
            className="w-4 cursor-pointer hover:text-gray-700"
            onClick={() => handleDecrement(id, price)}
          />
          <p className="mx-2 text-gray-500">Qty {qty}</p>
          <Plus
            data-testid="plus"
            className="w-4 cursor-pointer hover:text-gray-700"
            onClick={() => handleIncrement(id, price)}
          />
        </div>
        <div className="flex">
          <button
            data-testid="remove"
            type="button"
            className="font-medium text-indigo-600 hover:text-indigo-500"
            onClick={() => handleRemoveItem(id, price)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemInfo;