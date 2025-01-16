import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Itemcart from "./Itemcart";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cart);
  // console.log(cartItems);
  const [activeCart, setActiveCart] = useState(false);
  return (
    <>
      <div
        className={`fixed right-0 top-0 lg:w-[20vw] w-full h-full bg-white p-3 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
        //  translate-x-full=translate-x-full will move the element completely off to the right by its own width. This is often used for animations, sliding effects, or when you want to hide elements off-screen..
      >
        <div className="flex justify-between items-center my-3 ">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => {
              setActiveCart(!activeCart);
            }}
            className="border-2 border-gray-600 text-gray-600 font-bold text-xl hover:text-red-300 hover:border-red-300 rounded-md "
          />
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <Itemcart
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="text-center text-xl font-bold text-gray-800">
            Your cart is empty
          </h2>
        )}

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items:1</h3>
          <h3 className="font-semibold text-gray-800">Total Amount:130</h3>
          <hr className="w-[93vw] lg:w-[18.5vw] my-2" />
          <button className="bg-green-500 font-bold text-white p-2 rounded-lg w-[93vw] lg:w-[18.5vw] mb-5">
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => {
          setActiveCart(!activeCart);
        }}
        className="rounded-full bg-white shadow-md text-5xl p-3 fixed lg:bottom-4 lg:right-4 right-1 bottom-5"
      />

      <div></div>
    </>
  );
};

export default Cart;
