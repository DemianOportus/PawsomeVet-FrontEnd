import { useTranslation } from "react-i18next";
import introductionImage from "../images/introduction-image.png";

function Introduction() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="mt-48 relative z-20">
        <h1 className="lg:max-w-[600px]">{t("Introduction.title")}</h1>
        <p className="mb-10">{t("Introduction.subtitle")}</p>
        <button className="bg-[#F97561] hover:bg-[#ED715E] rounded-lg text-white py-2 px-4">
          <a href="/#footer">{t("Introduction.contact")}</a>
        </button>
      </div>
      <div className="z-10">
        <img
          className="hidden absolute lg:block w-[1000px] top-0 right-0"
          src={introductionImage}
          alt={t("Introduction.imageAlt")}
        />
      </div>
    </div>
  );
}

export default Introduction;
