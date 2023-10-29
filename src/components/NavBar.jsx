import React from "react";
import { BsMoon } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav className="w-100% bg-white py-5 px-2 flex justify-between shadow shadow-gray-300">
      <p className="m-1 text-sm font-bold">Where in the World?</p>
      <div className="flex h-max align-middle p-1">
        <BsMoon />
        <p className=" text-xs ml-2">Dark Mode</p>
      </div>
    </nav>
  );
};

export default NavBar;
