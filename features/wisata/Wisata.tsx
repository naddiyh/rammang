import Link from "next/link";
import { DataWisata } from "./dataWisata";
import Image from "next/image";
export const Wisata = () => {
  return (
    <section className="flex flex-col gap-10 px-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-heading-m font-bold md:px-10 md:text-heading-l">
          Various kinds of beautiful caves
        </h1>
        <p className="text-heading-s md:px-10">
          Discover the mesmerizing beauty of caves around the world, each
          offering unique formations and breathtaking views.
        </p>
      </div>
      <section className="grid-cols- 1 grid gap-4 md:grid-cols-3">
        {DataWisata.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col gap-2 text-heading-s font-bold duration-300 ease-in-out hover:underline hover:brightness-50"
          >
            <Image
              src={item.img}
              alt=""
              width={450}
              height={200}
              objectFit="cover"
              className="rounded-md"
            />
            <h2 className="">{item.name}</h2>
          </Link>
        ))}
      </section>
    </section>
  );
};
