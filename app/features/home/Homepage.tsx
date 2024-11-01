import { Box } from "@/app/components/atom/Box";
import { PrimaryButton } from "@/app/components/atom/PrimaryButton";
import Image from "next/image";
import { About } from "../about/About";
import { CaraouselSpot } from "./CaraouselSpot";
import { Wisata } from "../wisata/Wisata";
export const Home = () => {
  return (
    <section className="flex min-h-screen w-screen flex-col gap-20 pb-20">
      <section className="h-[900px] w-full px-10 md:pt-24">
        <div className="relative h-full w-full items-center justify-center">
          <Image
            src="/images/hero.webp"
            alt="rammang-rammang"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            className="rounded-xl brightness-50"
          />
          <section className="absolute flex w-full flex-col gap-4 px-10 pt-40 md:gap-8 md:px-24 md:pt-52">
            <p className="text-text-l text-white md:text-heading-m">
              Explore the Beauty of Nature
            </p>
            <div className="flex flex-col">
              <h2 className="text-heading-l font-semibold leading-none text-white md:text-[60px]">
                The Wonderful of
              </h2>
              <h2 className="text-heading-m font-semibold text-white md:text-[60px]">
                Rammang-Rammang
              </h2>
            </div>
            <p className="text-text-l text-white md:w-1/2 md:text-heading-s">
              A breathtaking limestone karst area surrounded by lush greenery
              and calm rivers in Maros, Indonesia
            </p>
            <PrimaryButton fullwidth={false} className="text-white">
              Learn More
            </PrimaryButton>
          </section>
        </div>
      </section>
      <section className="flex items-center justify-center gap-16 px-10">
        <Box>
          <p className="text-heading-l font-bold">3+</p>
          <p>Activities</p>
        </Box>
        <Box>
          <p className="text-heading-l font-bold">250k+</p>
          <p>Annual visitors per years</p>
        </Box>
        <Box>
          <p className="text-heading-l font-bold">3+</p>
          <p>activities</p>
        </Box>
      </section>
      <About />

      <CaraouselSpot />
      <Wisata />
    </section>
  );
};
