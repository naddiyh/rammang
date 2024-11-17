import Image from "next/image";
const GoaKunang = () => {
  return (
    <section className="flex w-full">
      <Image
        src="/images/goabatu.png"
        objectFit="cover"
        layout="fill"
        objectPosition="top"
        alt="goabatu"
        className="-z-10 brightness-50"
      />
      <section className="absolute bottom-0 z-10 flex flex-col gap-10 md:gap-20">
        <section className="flew-row flex w-full justify-between">
          <div className="hidden gap-6 px-20 md:flex">
            <Image
              src="/images/kunang1.png"
              width={200}
              height={100}
              alt=""
              objectFit="cover"
              className="rounded-md"
            />
            <Image
              src="/images/kunang2.png"
              width={200}
              height={100}
              alt="kunang"
              objectFit="cover"
              className="rounded-md"
            />
            <Image
              src="/images/kunang3.png"
              width={200}
              height={100}
              alt=""
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col px-20">
            <p className="text-heading-s font-bold text-white md:text-[75px] md:leading-[70px]">
              Kunang
            </p>
            <p className="text-text-l font-bold text-white md:text-[75px] md:leading-[70px]">
              Cave
            </p>
          </div>
        </section>
        <section className="h-[200p;x] flex-col gap-4 rounded-xl bg-[#CBD2B7] bg-opacity-75 px-6 py-6 md:flex md:h-[350px] md:flex-row md:gap-10 md:px-10 md:py-12">
          <p className="text-text-m text-white md:text-heading-s">
            Kunang-Kunang Cave is a natural attraction located in the karst area
            of Ramang-Ramang, Maros, South Sulawesi. The cave is famous for the
            unique glow of fireflies often seen inside, especially at night.
            Kunang-Kunang Cave offers a stunning natural experience with
            breathtaking views of towering karst formations and a cool, serene
            atmosphere. Visitors can explore the cave, enjoy the surrounding
            natural beauty, and witness the magical glow of fireflies that
            illuminate the cave{"'"}s darkness, creating a mystical ambiance.
          </p>
          <div className="flex">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.0615835190215!2d119.59823907547045!3d-4.92935599504667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbe571650fe7a87%3A0x30867521e38206e9!2sGua%20Batu%20Rammang-rammang!5e0!3m2!1sen!2sid!4v1731307329687!5m2!1sen!2sid"
              width="300"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-md pb-10 md:h-[300px] md:w-[550px]"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </section>
    </section>
  );
};

export default GoaKunang;
