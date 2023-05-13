import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navBarHandler = () => {
    setNav((prev) => !prev);
  };
  return (
    <div className="flex justify-between items-center h-24 text-white mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">React</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Company</li>
        <li className="p-4">Home</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={navBarHandler} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[60%] h-full border-r border-r-black bg-black ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">React</h1>
        <ul className="uppercase p-4 ">
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 ">Contact</li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
