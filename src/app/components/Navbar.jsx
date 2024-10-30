import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full fixed z-20 bg-[#000300]">
      <div className="w-full mx-auto max-w-[1400px]">
        <div className="justify-center w-full">
          <div
            className="text-black flex justify-between md:shadow-none shadow-xl h-20 w-full  md:top-0 top-0
     bg-[#000300] max-w-[1400px] mx-auto"
          >
            <div className="lg:flex lg:flex-row lg:justify-center lg:items-center hidden lg:gap-2">
              <div className="pl-4"></div>
              <div className="font-semibold text-[30px] hidden lg:block">
                <h2 className="text-green-500">PURNESH.</h2>
              </div>
            </div>

            <div className="md:ml-4 lg:hidden flex justify-center items-center ">
              <div className="font-semibold text-[30px] pl-6">
                <h2 className="text-green-500">PURNESH.</h2>
              </div>
            </div>

            <ul className="hidden md:flex md:pt-4 ">
              <li className="lg:p-4 p-[11px] group cursor-pointer text-white font-medium uppercase text-sm tracking-wider hover:text-gray-300 transition duration-1000 ">
                <a href="#home">Home</a>
                <div className="bg-green-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
              </li>
              <li className="lg:p-4 p-[11px] group cursor-pointer text-white font-medium uppercase text-sm tracking-wider hover:text-gray-300 transition duration-1000">
                <a href="#skills">Skills</a>
                <div className="bg-green-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
              </li>
              <li className="lg:p-4 p-[11px] group cursor-pointer text-white font-medium uppercase text-sm tracking-wider hover:text-gray-300 transition duration-1000">
                <a href="#projects">Projects</a>
                <div className="bg-green-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
              </li>
              <li className="lg:p-4 p-[11px] group cursor-pointer text-white font-medium uppercase text-sm tracking-wider hover:text-gray-300 transition duration-1000">
                <a href="#timeline">Experience</a>
                <div className="bg-green-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
              </li>
              <li className="lg:p-4 p-[11px] cursor-pointer font-medium">
                <a
                  href="#contact"
                  className="bg-green-500 duration-1000 ease-in-out transition hover:bg-[#10C0A2]
        rounded-full text-black px-8 py-2.5 text-center"
                >
                  Contact{" "}
                </a>
              </li>
            </ul>

            <div onClick={handleNav} className="block md:hidden cursor-pointer">
              {!nav ? (
                <RiMenu3Fill size={24} className=" mr-4 mt-6 text-white" />
              ) : (
                <AiOutlineClose size={24} className=" mr-4 mt-6  text-white" />
              )}
            </div>

            <div
              className={
                !nav
                  ? "md:hidden fixed left-[-100%] h-[75%] ease-in-out duration-1000 transition"
                  : "md:hidden fixed left-0 top-0 w-[70%] border-r h-[75%] bg-[#000300] ease-in-out duration-1000 rounded-b-lg z-10 shadow-xl "
              }
            >
              <h1 className="w-full text-2xl text-green-500 font-bold m-4 cursor-pointer">
                PURNESH.
              </h1>
              <ul className=" uppercase p-4">
                <li className="p-4 border-b border-gray-500 text-white cursor-pointer font-medium dark:text-white ">
                  <a href="#home">Home</a>
                </li>
                <li className="p-4 border-b border-gray-500 text-white cursor-pointer font-medium dark:text-white ">
                  <a href="#skills">Skills</a>
                </li>
                <li className="p-4 border-b border-gray-500 text-white cursor-pointer font-medium dark:text-white ">
                  <a href="#projects">Projects</a>
                </li>
                <li className="p-4 border-b border-gray-500 text-white cursor-pointer font-medium dark:text-white ">
                  <a href="#timeline">Experience</a>
                </li>
                <li className="p-4 border-b border-gray-500 text-white cursor-pointer font-medium dark:text-white ">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
