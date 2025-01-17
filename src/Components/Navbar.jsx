import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlices";
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between mx-6 py-3 mb-2 lg:mt-2">
      <div>
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold">Flavaro Foods</h1>
      </div>
      <div>
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search here"
          autoComplete="off"
          className="p-5 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw] placeholder:font-bold placeholder:text-gray-500"
          onChange={(e) => {
            dispatch(setSearch(e.target.value));
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
