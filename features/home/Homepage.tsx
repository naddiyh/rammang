import { Box } from "@/app/components/atom/Box";
import { PrimaryButton } from "@/app/components/atom/PrimaryButton";
import Image from "next/image";
import { About } from "../about/About";
import { CaraouselSpot } from "./CaraouselSpot";
import { Wisata } from "../wisata/Wisata";
import { Location } from "./Location";
import { Footer } from "@/app/components/Footer/Footer";
export const Home = () => {
  return (
    <>
      <section
        id="beranda"
        className="flex min-h-screen w-screen flex-col gap-10 pb-20 md:gap-20"
      >
        <Image
          src="/images/hero.webp"
          alt="rammang-rammang"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="brightness-50"
        />
        <section className="h-[750px] w-full px-6 md:h-[900px] md:px-10 md:pt-20">
          <div className="relative h-full w-full items-center justify-center">
            <section className="absolute flex w-full flex-col gap-4 px-4 pt-52 md:gap-8 md:px-20">
              <p className="text-text-l text-white md:text-heading-m">
                Explore the Beauty of Nature
              </p>
              <div className="flex flex-col">
                <h2 className="text-heading-l font-semibold leading-none text-white md:text-[60px]">
                  The Wonderful of
                </h2>
                <h2 className="text-heading-l font-semibold text-white md:text-[60px]">
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
        <section className="flex flex-col items-center justify-center gap-10 px-10 py-10 md:flex-row md:gap-16 md:py-14">
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
        <section className="relative flex min-h-screen w-full flex-col py-24">
          <div className="flex flex-col items-center gap-4 md:gap-10">
            <h2 className="z-20 text-heading-m font-semibold text-white md:text-[50px]">
              Let{"'"}s Go To Rammang
            </h2>
            <p className="z-20 px-10 text-center text-text-l font-light text-white md:w-1/2 md:px-0">
              Discover breathtaking karst landscapes, tranquil river tours, and
              vibrant village culture. Explore, unwind, and be amazed—your next
              adventure starts here!
            </p>
          </div>
          <Image
            src={"/images/dive.png"}
            fill
            priority
            objectFit="cover"
            objectPosition="top"
            alt={""}
          />
        </section>
        <Location />
      </section>
      <Footer />
    </>
  );
};
