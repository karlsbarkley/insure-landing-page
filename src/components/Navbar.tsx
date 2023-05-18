"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full h-24 bg-white z-40 px-6 md:px-10 lg:px-40 md:py-8">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <Image src={Logo} alt="Insure company logo"></Image>
        </Link>

        <ul className="hidden md:flex items-center uppercase">
          <Link href="#">
            <li className="ml-10  hover:text-tahiti text-sm tracking-wider">
              How we work
            </li>
          </Link>
          <Link href="#">
            <li className="ml-10 hover:text-tahiti text-sm tracking-wider">
              Blog
            </li>
          </Link>
          <Link href="#">
            <li className="ml-10  hover:text-tahiti text-sm tracking-wider">
              Account
            </li>
          </Link>
          <Link href="#">
            <li className="ml-10  hover:text-white hover:bg-midnight text-sm tracking-wider border-2 px-7 py-3">
              View plans
            </li>
          </Link>
        </ul>
        <div
          onClick={handleNav}
          className="md:hidden cursor-pointer border-2 border-midnight p-1"
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed text-light left-0 top-[6rem] w-full md:hidden h-screen bg-midnight p-10 ease-in duration-500"
            : "fixed text-light left-[100%] top-[6rem] w-[65%] md:hidden h-screen bg-midnight p-10 ease-in duration-500"
        }
      >
        <div className="flex flex-col w-full items-center justify-end">
          <div
            onClick={handleNav}
            className="cursor-pointer border-2 border-light p-1"
          >
            <AiOutlineClose size={25} />
          </div>
          <div>
            <ul className="tracking-widest text-xl leading-10 text-center">
              <Link href="#">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="mt-10 uppercase hover:border-b"
                >
                  How we work
                </li>
              </Link>
              <Link href="#">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="mt-10 uppercase hover:border-b"
                >
                  Blog
                </li>
              </Link>
              <Link href="#">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="mt-10 uppercase hover:border-b"
                >
                  Account
                </li>
              </Link>
              <Link href="#">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="mt-10 mx-6 uppercase hover:border-b border-2 p-3"
                >
                  View plans
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
