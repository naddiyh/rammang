import Image from "next/image";
const GoaBatue = () => {
  return (
    <section className="flex h-auto w-full">
      <Image
        src="/images/goabatu.png"
        objectFit="cover"
        layout="fill"
        objectPosition="top"
        alt="goabatu"
        className="-z-10 brightness-50"
      />
      <section className="absolute bottom-0 z-10 flex flex-col gap-8 pt-20 md:gap-20">
        <section className="flew-row flex w-full md:justify-between">
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
          <div className="flex flex-col px-10 md:px-20">
            <p className="text-heading-l font-bold text-white md:text-[75px] md:leading-[70px]">
              Batu
            </p>
            <p className="text-heading-l font-bold text-white md:text-[75px] md:leading-[70px]">
              Cave
            </p>
          </div>
        </section>
        <section className="flex flex-col-reverse gap-4 rounded-xl bg-[#CBD2B7] bg-opacity-75 p-6 md:h-[350px] md:flex-row md:gap-10 md:px-10 md:py-12">
          <p className="text-text-s text-white md:text-heading-s">
            Batu Cave in Ramang-Ramang, Makassar, is a natural cave located in
            the karst region of Maros, South Sulawesi. The cave is known for its
            beautiful and unique limestone formations, offering a peaceful and
            scenic natural environment. Visitors can explore the cave, which has
            developed over thousands of years, with its stunning stalactites and
            stalagmites adding to its beauty. Batu Cave is part of the
            breathtaking Ramang-Ramang karst landscape, making it an attractive
            destination for nature lovers and tourists looking to experience the
            natural beauty of Sulawesi.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.0615835190215!2d119.59823907547045!3d-4.92935599504667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbe571650fe7a87%3A0x30867521e38206e9!2sGua%20Batu%20Rammang-rammang!5e0!3m2!1sen!2sid!4v1731307329687!5m2!1sen!2sid"
            width="320"
            height="180"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-md md:h-[300px] md:w-[550px]"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </section>
  );
};

export default GoaBatue;
