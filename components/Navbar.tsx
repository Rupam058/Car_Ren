"use client";

import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <header
      className={
        header
          ? "w-full bg-primary-blue fixed z-10 rounded-b-lg"
          : "w-full absolute z-10"
      }
    >
      <nav className="max-w-[1440px] mx-auto flex justify-between item-center sm:px-16 px-6 py-[2px]">
        <Link href="/" className="flex justify-center item-center">
          <Image
            src={header ? "/Untitled.svg" : "/logo.svg"}
            alt="Car Hub Logo"
            width={118}
            height={32}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles={
            header
              ? "text-white text-xl font-bold rounded-full bg-primary-blue min-w-[130] hover:bg-white hover:text-primary-blue"
              : "text-primary-blue text-xl font-bold rounded-full bg-white min-w-[130] hover:bg-primary-blue hover:text-white"
          }
        />
      </nav>
    </header>
  );
};

export default Navbar;
