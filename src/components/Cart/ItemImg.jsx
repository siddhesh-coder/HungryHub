import React from "react";
import { FOOD_MENU } from "../../utils/constants";

const ItemImg = ({img}) => {
  return (
    <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
      <img
        src={FOOD_MENU + img}
        alt={img}
        className="object-cover object-center w-full h-full"
      />
    </div>
  );
};

export default ItemImg;
