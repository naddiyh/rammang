"use client";
import Link from "next/link";
import { Navlink } from "./navLink";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  //   const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScroll(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //   const toggleMenu = () => {
  //     setIsMenu(!isMenu);
  //   };

  //   const closeToggle = () => {
  //     setIsMenu(false);
  //   };

  return (
    <nav
      className={`fixed z-[60] flex w-screen justify-between px-8 py-6 transition-colors duration-300 md:px-20 ${isScroll ? "bg-black text-white opacity-80" : ""}`}
    >
      <h1 className="text-text-l font-bold md:text-heading-s">
        Rammang-Rammang
      </h1>
      <section className="hidden gap-8 md:inline-flex">
        {Navlink.map((item) => (
          <Link key={item.href} href={item.href}>
            <div className="font-semibold">{item.title}</div>
          </Link>
        ))}
      </section>
    </nav>
  );
};
