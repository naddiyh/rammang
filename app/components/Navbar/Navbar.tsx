import Link from "next/link";
import { Navlink } from "./navLink";

export const Navbar = () => {
  return (
    <nav className="fixed z-20 flex w-screen justify-between px-14 py-8 md:px-20">
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
