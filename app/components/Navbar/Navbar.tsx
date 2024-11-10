"use client";
import Link from "next/link";
import { Navlink } from "./navLink";
import { useEffect, useState } from "react";
import { IoIosClose, IoIosMenu } from "react-icons/io";

export const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

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

  const openMenu = () => {
    setIsMenu(!isMenu);
  };

  const closeMenu = () => {
    setIsMenu(false);
  };

  return (
    <nav
      className={`fixed z-[60] flex w-screen justify-between py-4 transition-colors duration-300 md:px-20 md:py-6 ${isScroll ? "bg-black text-white" : ""}`}
    >
      <h1 className="px-8 text-text-l font-bold md:text-heading-s">Rammang</h1>

      <section className="hidden gap-8 px-8 md:inline-flex">
        {Navlink.map((item) => (
          <Link key={item.href} href={item.href}>
            <div className="font-semibold">{item.title}</div>
          </Link>
        ))}
      </section>

      <div className="flex items-center px-8 md:hidden">
        {!isMenu ? (
          <IoIosMenu className="h-8 w-8 cursor-pointer" onClick={openMenu} />
        ) : (
          <IoIosClose
            className="z-[80] h-9 w-9 cursor-pointer text-white"
            onClick={closeMenu}
          />
        )}
      </div>

      {isMenu && (
        <>
          <div className="fixed inset-0 z-[50] bg-black bg-opacity-10 backdrop-blur-sm"></div>
          <div className="absolute right-0 top-0 z-[70] flex h-screen w-[70%] flex-col items-center gap-6 bg-black bg-opacity-80 px-4 py-10 pt-16 shadow-md transition-transform duration-300 md:hidden">
            {Navlink.map((items) => (
              <Link
                key={items.href}
                className="rounded px-4 py-2 text-white transition duration-300 ease-in-out hover:text-[#708957]"
                href={items.href}
              >
                {items.title}
              </Link>
            ))}
          </div>
        </>
      )}
    </nav>
  );
};
