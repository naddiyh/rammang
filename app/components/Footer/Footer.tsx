"use client";

import Image from "next/image";
import { DataMedsos } from "./dataMedsos";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bottom-0 left-0 right-0 flex w-full flex-col gap-16 bg-slate-200 p-14">
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex flex-col items-center justify-center gap-8">
          <Image
            src="/icon/welcome.webp"
            alt="Welcome09 Logo"
            height={150}
            width={150}
          />
          <div className="flex items-center justify-center gap-4">
            {DataMedsos.map((item) => (
              <Link
                key={item.src}
                href={item.src}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-100 p-2 transition-transform duration-300 hover:scale-110"
              >
                <item.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-semibold">About us</h2>
          <p>
            WELCOME09 SMFT-UH is a Worldwide Language Community of Engineering.
            Senat Mahasiswa Fakultas Teknik Universitas Hasanuddin was
            established on September 9th, 1998, and is one of the student
            activity units in the Faculty of Engineering, Unhas, focusing on
            enhancing worldwide language skills for students in the Faculty of
            Engineering, Unhas.
          </p>
        </div>
      </section>

      <p className="text-center text-text-s">
        Copyright © 2024 All Rights Reserved, Welcome09
      </p>
    </footer>
  );
};
