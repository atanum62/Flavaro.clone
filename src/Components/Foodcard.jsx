import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
const Foodcard = ({ id, name, img, desciption, catagory, price, rateing }) => {
  const dispatch = useDispatch();
  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg mx-6 gap-2">
      <img
        src={img}
        alt={name}
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-all duration-500 ease-in-out "
      />
      <div className="text-lg flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-500 ">₹{price}</span>
      </div>
      <p className="text-sm font-normal">{desciption.slice(0, 50)}...</p>
      <div className="flex justify-between">
        <span className="flex  justify-center items-baseline">
          <FaStar className="mr-1 text-yellow-400" /> {rateing}
        </span>
        <button
          onClick={() => {
            dispatch(addToCart({ id, name, price, rateing, qty: 1, img }));
          }}
          className="p-1  bg-gray-200 rounded-lg hover:bg-green-600 hover:text-white"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Foodcard;
