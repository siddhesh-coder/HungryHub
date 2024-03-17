import React from "react";
import CartItemContainer from "./CartItemContainer";

const CartItems = ({ cartItems }) => {
  return (
    <div className="mt-8">
      <div className="flow-root">
        <ul role="list" className="-my-6 divide-y divide-gray-200">
          {cartItems.map((product) => (
            <li data-testid="item-test" key={product?.id} className="flex py-6">
              <CartItemContainer product={product}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartItems;
