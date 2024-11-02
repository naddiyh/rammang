export const Location = () => {
  return (
    <section className="flex flex-col gap-10 px-8">
      <h1 className="text-heading-s font-bold md:text-heading-l">
        Location of Rammang-Rammang
      </h1>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7950.29062064949!2d119.60284519357911!3d-4.9153433999999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbe59e388afe0ad%3A0x3590926b8cb4858a!2sRammang%20Rammang%20Karst%20Village!5e0!3m2!1sen!2sid!4v1730521498378!5m2!1sen!2sid"
        height="450"
        style={{ border: 0 }}
        className="rounded-xl"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};
