"use client";
import { DataCaraousel } from "./dataCaraousel";
import Image from "next/image";
import { useRef } from "react";
import useDraggableScroll from "use-draggable-scroll";

export const CaraouselSpot = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { onMouseDown } = useDraggableScroll(ref, { direction: "horizontal" });
  const handleMouseDown = (event: React.MouseEvent) => {
    onMouseDown(event);

    event.preventDefault();
  };
  return (
    <section className="flex w-full flex-col gap-16">
      <h1 className="px-8 text-heading-l font-bold italic md:px-20">
        Dive Into The Beauty of The World
      </h1>

      <div
        ref={ref}
        onMouseDown={handleMouseDown}
        className="flex select-none gap-6 overflow-x-scroll scroll-smooth px-10 duration-300 ease-in-out md:overflow-x-hidden"
      >
        {DataCaraousel.map((item) => (
          <div
            className="relative h-[450px] w-[550px] flex-shrink-0"
            key={item.name}
          >
            <Image
              src={item.src}
              alt={item.name}
              fill
              priority
              objectFit="cover"
              className="rounded-md"
            />
            <div className="absolute bottom-10 flex w-full flex-col rounded-md bg-white/30 p-4 px-16 py-10 text-white backdrop-blur">
              <p className="text-heading-m font-semibold">{item.name}</p>
              <p className="text-heading-s">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
