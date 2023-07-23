import { useTranslation } from "react-i18next";
import aboutUsImage from "../images/about-us-image.jpg";

function About() {
  const { t } = useTranslation();

  return (
    <div className="mt-80 grid lg:grid-cols-2 gap-16">
      <img
        src={aboutUsImage}
        alt={t("About.imageAlt")}
        className="rounded-2xl"
      />
      <div>
        <h1>{t("About.title")}</h1>
        <p>{t("About.description")}</p>
      </div>
    </div>
  );
}

export default About;
