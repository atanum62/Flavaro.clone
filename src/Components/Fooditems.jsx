import React from "react";
import Foodcard from "./Foodcard";
import FoodData from "../data/FoodData";

const Fooditems = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center lg:justify-start  ">
      {FoodData.map((food) => {
        return (
          <Foodcard
            key={food.id}
            id={food.id}
            name={food.name}
            img={food.img}
            desciption={food.desc}
            catagory={food.category}
            price={food.price}
            rateing={food.rating}
          />
        );
      })}
    </div>
  );
};

export default Fooditems;
