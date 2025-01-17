import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/cartSlice";
import toast from "react-hot-toast";

const Itemcart = ({ id, name, price, img, qty }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
        <img
          src={img}
          alt=""
          className="w-[70px] h-[70px] lg:w-[80px] lg:h-[80px]"
        />
        <div className="leading-5">
          <div className="flex justify-center items-center gap-2  ">
            <h2 className="font-bold text-gray-500">
              {name.length > 20 ? name.slice(0, 20) + "..." : name}
            </h2>
            <MdDelete
              onClick={() => {
                dispatch(removeFromCart({ id, name, img, price, qty }));
                // toast(`${name} Removed From Cart! `, {
                //   icon: "👍",
                // });
                toast.custom(
                  (t) => (
                    <div
                      className={`bg-white text-black px-4 py-2 shadow-lg rounded-lg max-w-xs w-full mr-7 transition-all duration-500 ${
                        t.visible ? "animate-enter" : "animate-leave"
                      }`}
                    >
                      {name} Removed From Cart! 👍
                    </div>
                  ),
                  {
                    duration: 1000, // Stay on screen for 2 seconds
                  }
                );
              }}
              className="absolute right-7 text-gray-600 cursor-pointer"
            />
          </div>
          <div className="flex  justify-between ">
            <span className="text-green-500 font-bold">₹{price}</span>
            <div className="flex justify-center items-center gap-2 absolute right-7 ">
              <FaPlus
                onClick={() => dispatch(incrementQty({ id }))}
                className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
              />
              <span>{qty}</span>
              <FaMinus
                onClick={() =>
                  qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
                }
                className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Itemcart;
