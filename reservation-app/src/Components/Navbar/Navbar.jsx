import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="flex items-center justify-between  bg-black text-white py-3">
      <div>
        <h1 className="uppercase mx-3 md:text-3xl text-xl">HotelTonight</h1>
      </div>

      <div>
        <ul className="md:flex hidden items-center uppercase text-lg gap-4 cursor-pointer">
          <li>Home</li>
          <li>Our Hotels</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="mr-5 md:block hidden">
        <button className="bg-blue-700 px-4 py-1 rounded">Login</button>
        <button className="border-2 border-blue-700  py-1 px-2 rounded mx-3 hover:bg-[blue]">
          Create Account
        </button>
      </div>

      {/* Responsive */}

      <div className="md:hidden block" onClick={() => setMenu(!menu)}>
        <div>
          {!menu ? (
            <BiMenuAltRight className="mr-5 text-3xl" />
          ) : (
            <AiOutlineClose className="mr-5 text-3xl" />
          )}
        </div>

        <div>
          {menu ? (
            <ul className=" flex items-center flex-col gap-7 bg-blue-900  absolute top-[3rem] right-0.5 w-[70%] h-screen text-white text-xl z-40">
              <li className="mt-5">Home</li>
              <li>Our Hotels</li>
              <li>About</li>
              <li>Contact</li>

              <button className="bg-red-700 px-4 py-1 rounded">Login</button>
              <button className="border-2 border-black  py-1 px-3 rounded mx-3 bg-[black]">
                Create Account
              </button>
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
