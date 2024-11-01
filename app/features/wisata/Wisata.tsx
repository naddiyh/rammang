import Link from "next/link";
import { DataWisata } from "./dataWisata";
import Image from "next/image";
export const Wisata = () => {
  return (
    <section className="flex flex-col gap-10 px-10">
      <h1 className="px-10 text-heading-l font-bold">
        Various kinds of beautiful caves
      </h1>
      <section className="grid grid-cols-3 gap-6">
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
