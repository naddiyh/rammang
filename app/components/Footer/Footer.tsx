"use client";

import Image from "next/image";
import { DataMedsos } from "./dataMedsos";
import Link from "next/link";
import { Navlink } from "../Navbar/navLink";

export const Footer = () => {
  return (
    <footer className="bottom-0 flex flex-col gap-20 bg-gray-800 px-8 py-10 text-white md:flex-row md:px-20">
      <aside className="md:w-1/2">
        <Image
          src="/icon/welcome.webp"
          objectFit="cover"
          width={80}
          height={80}
          alt="logo"
        />

        <p className="pt-4 font-light">
          WELCOME09 SMFT-UH is a Worldwide Language Community of Engineering.
          Senat Mahasiswa Fakultas Teknik Universitas Hasanuddin was established
          on September 9th, 1998, and is one of the student activity units in
          the Faculty of Engineering, Unhas, focusing on enhancing worldwide
          language skills for students in the Faculty of Engineering, Unhas.
        </p>
      </aside>
      <nav className="flex flex-col gap-2">
        <h6 className="footer-title font-semibold">Organization</h6>
        {Navlink.map((item) => (
          <Link key={item.href} href={item.href}>
            {<div className="link-hover link flex-col gap-6">{item.title}</div>}
          </Link>
        ))}
      </nav>
      <nav className="flex flex-col gap-2">
        <h6 className="footer-title font-semibold">Connect with us</h6>
        <div className="flex flex-row gap-3">
          {DataMedsos.map((item) => (
            <Link href={item.src} key={item.src}>
              <item.icon className="h-6 w-6 hover:scale-75 hover:text-green-200" />
            </Link>
          ))}
        </div>
      </nav>
    </footer>
  );
};
