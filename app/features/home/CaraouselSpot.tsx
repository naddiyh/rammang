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
    <section className="flex w-full flex-col gap-10 md:gap-16">
      <h1 className="px-8 text-heading-m font-bold italic md:px-20 md:text-heading-l">
        Dive Into The Beauty of The World
      </h1>

      <div
        ref={ref}
        onMouseDown={handleMouseDown}
        className="flex select-none gap-6 overflow-x-scroll scroll-smooth px-10 duration-300 ease-in-out md:overflow-x-hidden"
      >
        {DataCaraousel.map((item) => (
          <div
            className="relative h-[350px] w-[360px] flex-shrink-0 md:h-[450px] md:w-[500px]"
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
            <div className="absolute bottom-10 flex w-full flex-col rounded-md bg-white/30 px-10 py-4 text-white backdrop-blur md:px-16 md:py-10">
              <p className="text-text-l font-semibold md:text-heading-m">
                {item.name}
              </p>
              <p className="text-heading-s">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
