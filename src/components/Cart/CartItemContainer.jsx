import React from "react";
import CartItemInfo from "./CartItemInfo";
import ItemImg from "./ItemImg";

const CartItemContainer = ({ product }) => {
  const { img, name, price, id, qty } = product;
  return (
    <>
      <ItemImg img={img} />
      <CartItemInfo name={name} price={price} id={id} qty={qty} />
    </>
  );
};

export default CartItemContainer;
