import React from "react";
import Foodcard from "./Foodcard";
import FoodData from "../data/FoodData";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const Fooditems = () => {
  const handleToast = (name) => toast.success(`Added ${name} to cart`);
  const category = useSelector((state) => state.category.category);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start  ">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food;
          } else {
            return category === food.category;
          }
        }).map((food) => (
          <Foodcard
            key={food.id}
            id={food.id}
            name={food.name}
            img={food.img}
            desciption={food.desc}
            catagory={food.category}
            price={food.price}
            rateing={food.rating}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
};

export default Fooditems;
