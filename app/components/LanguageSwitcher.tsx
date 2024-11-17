import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex gap-4">
      <button
        className="rounded-md px-4 py-2 text-black transition-all duration-300 hover:bg-gray-700"
        onClick={() => changeLanguage("en")}
      >
        English
      </button>
      <button
        className="rounded-md px-4 py-2 text-black transition-all duration-300 hover:bg-gray-700"
        onClick={() => changeLanguage("id")}
      >
        Indonesia
      </button>
    </div>
  );
};
