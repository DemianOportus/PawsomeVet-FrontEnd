import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <div id="footer">
      <div className="md:flex justify-between text-white py-5 px-16 pt-60 lg:px-32 ">
        <div>
          <div>
            <h3>{t("Footer.locationTitle")}</h3>
            <p className="text-white">{t("Footer.location")}</p>
          </div>
          <div className="mt-4">
            <h3>{t("Footer.contactTitle")}</h3>
            <a 
              className="text-white hover:underline"
              href="mailto:pawsomevet@example.com"
            >
              <i className="fa-solid fa-envelope pr-2" aria-label={t("Footer.emailIcon")}></i>{t("Footer.email")}
            </a>
            <p className="text-white">
              <i className="fa-solid fa-phone pr-2" aria-label={t("Footer.phoneIcon")}></i>{t("Footer.phone")}
            </p>
          </div>
        </div>
        <div>
          <div className="mt-4 md:mt-0">
            <h3>{t("Footer.socialTitle")}</h3>
            <div className="text-white flex space-x-8 mt-1 mb-5">
              <a 
                href="https://www.instagram.com/" 
                target="_blank"
                className="hover:scale-[1.05]"
              >
                <i className="fa-brands fa-instagram fa-xl" aria-label={t("Footer.instagramIcon")}></i>
              </a>
              <a 
                href="https://www.facebook.com/" 
                target="_blank"
                className="hover:scale-[1.05]"
              >
                <i className="fa-brands fa-facebook fa-xl" aria-label={t("Footer.facebookIcon")}></i>
              </a>
              <a 
                href="https://www.youtube.com/" 
                target="_blank"
                className="hover:scale-[1.05]"
              >
                <i className="fa-brands fa-youtube fa-xl" aria-label={t("Footer.youtubeIcon")}></i>
              </a>
            </div>
          </div>
          <div className="mt-4">
            <h3>{t("Footer.hoursTitle")}</h3>
            <p className="text-white">{t("Footer.hours")}</p>
          </div>
        </div>
      </div>
      <p className="text-center text-white pb-3 pt-10">
        {t("Footer.copyright")}
      </p>
    </div>
  );
}

export default Footer;
