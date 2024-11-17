"use client";
import Link from "next/link";
import { Navlink } from "./navLink";
import { useEffect, useState } from "react";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import Image from "next/image";

import { useTranslation } from "react-i18next";
export const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const { t } = useTranslation();
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
      className={`fixed z-[60] flex w-screen items-center justify-between px-8 py-4 transition-colors duration-300 md:px-20 md:py-6 ${isScroll ? "bg-black bg-opacity-50 text-white" : ""}`}
    >
      <Image
        src="/icon/welcome.webp"
        width={50}
        height={50}
        objectFit="cover"
        objectPosition="top"
        alt=""
        className=""
      />

      <section className="hidden gap-8 px-8 md:inline-flex">
        {Navlink.map((item) => (
          <Link key={item.href} href={item.href}>
            <div className="font-semibold text-white">{t(item.title)}</div>
          </Link>
        ))}
      </section>

      <div className="flex items-center md:hidden">
        {!isMenu ? (
          <IoIosMenu
            className="h-8 w-8 cursor-pointer text-white"
            onClick={openMenu}
          />
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
