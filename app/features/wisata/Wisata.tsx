import Link from "next/link";
import { DataWisata } from "./dataWisata";
import Image from "next/image";
export const Wisata = () => {
  return (
    <section className="flex flex-col gap-10 px-8">
      <h1 className="text-heading-m font-bold md:px-10 md:text-heading-l">
        Various kinds of beautiful caves
      </h1>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {DataWisata.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col gap-2 text-heading-s font-bold"
          >
            <Image src={item.img} alt="" width={450} height={200} />
            {item.name}
          </Link>
        ))}
      </section>
    </section>
  );
};
