import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="p-4 bg-white sticky top-0 dark:bg-white text-slate-700 w-full mx-auto z-50">
      <div className="flex md:w-4/6 w-full container justify-between h-16 mx-auto">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <Image
            src={"/images/logo.svg"}
            width={70}
            height={70}
            alt="logo"
            className="rounded-full"
          />
        </a>
        <div className="md:flex hidden justify-end items-center gap-10">
          <ul className="hidden md:flex gap-3 items-center">
            <li className="flex hover:font-semibold font-normal duration-500  w-20 overflow-hidden">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1"
              >
                Services
              </a>
            </li>
            <li className="flex hover:font-semibold font-normal duration-500 w-20 overflow-hidden">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1"
              >
                Projects
              </a>
            </li>
            <li className="flex hover:font-semibold font-normal duration-500 w-20 overflow-hidden">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1"
              >
                About
              </a>
            </li>
          </ul>
          <Button>Contact</Button>
        </div>

        <button className="flex justify-end p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
