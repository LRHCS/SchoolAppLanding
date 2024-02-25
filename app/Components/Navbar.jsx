"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HoverToGrow } from "../HoverToGrow";

export const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };

  return (
    <div>
      <header
        className={`bg-white dark:bg-black fixed top-0 w-screen z-20 mix-blend-difference h-14`}
      >
        <nav className="mx-auto w-screen text-white ">
          <div className="text-2xl flex justify-around">
            <Link href="/" className="font-extrabold cursor-pointer px-6 ">
              <HoverToGrow>
                <div>SchoolApp</div>
              </HoverToGrow>
            </Link>
            <Link href="/register/school" className="">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <HoverToGrow>
                <div>School?</div>
              </HoverToGrow>
            </Link>
            <div>
              <div onClick={toggleMenu} className="cursor-pointer">
                <HoverToGrow>Login</HoverToGrow>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
