import { useState } from "react";
import petVaccination from "../images/pet-vaccination.png";
import petNeuter from "../images/pet-neuter.png";
import microchipping from "../images/microchipping.png";
import { FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function ServiceCategories() {
  const { t } = useTranslation();
  const [showVideo1, setShowVideo1] = useState(false);
  const [showVideo2, setShowVideo2] = useState(false);
  const [showVideo3, setShowVideo3] = useState(false);

  const openVideoModal1 = () => {
    setShowVideo1(true);
  };

  const closeVideoModal1 = () => {
    setShowVideo1(false);
  };

  const openVideoModal2 = () => {
    setShowVideo2(true);
  };

  const closeVideoModal2 = () => {
    setShowVideo2(false);
  };

  const openVideoModal3 = () => {
    setShowVideo3(true);
  };

  const closeVideoModal3 = () => {
    setShowVideo3(false);
  };

  return (
    <div className="text-center mt-36 lg:mb-16">
      <h1 className="mb-16">{t("Services.title")}</h1>
      <div className="grid gap-16 md:grid-cols-2 xl:grid-cols-3">
        <div className="w-96 mx-auto">
          <div className="bg-[#FCF0CD] rounded-full h-36 w-36 pt-3 mx-auto">
            <img src={petVaccination} alt={t("Services.vaccinationAlt")} />
          </div>
          <h3 className="mt-6">{t("Services.vaccinationTitle")}</h3>
          <p>{t("Services.vaccinationDescription")}</p>
          <p
            className="hover:underline text-black font-medium"
            onClick={openVideoModal1}
          >
            {t("Services.learnMore")} &rarr;
          </p>
        </div>
        <div className="w-96 mx-auto">
          <div className="bg-[#FCF0CD] rounded-full h-36 w-36 mx-auto pl-3 pt-3">
            <img
              src={microchipping}
              alt={t("Services.microchippingAlt")}
              className="w-[125px]"
            />
          </div>
          <h3 className="mt-6">{t("Services.microchippingTitle")}</h3>
          <p>{t("Services.microchippingDescription")}</p>
          <p
            className="hover:underline text-black font-medium"
            onClick={openVideoModal2}
          >
            {t("Services.learnMore")} &rarr;
          </p>
        </div>
        <div className="w-96 mx-auto">
          <div className="bg-[#FCF0CD] rounded-full h-36 w-36 pt-2 mx-auto">
            <img src={petNeuter} alt={t("Services.neuteringAlt")} />
          </div>
          <h3 className="mt-6">{t("Services.neuteringTitle")}</h3>
          <p>{t("Services.neuteringDescription")}</p>
          <p
            className="hover:underline text-black font-medium"
            onClick={openVideoModal3}
          >
            {t("Services.learnMore")} &rarr;
          </p>
        </div>
      </div>

      {showVideo1 && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={closeVideoModal1}
              >
                <FaTimes />
              </button>
            </div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/0zyNzDtBCfI"
              title="Video 1"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {showVideo2 && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={closeVideoModal2}
              >
                <FaTimes />
              </button>
            </div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/YwLxphE8Tk8"
              title="Video 2"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {showVideo3 && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={closeVideoModal3}
              >
                <FaTimes />
              </button>
            </div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/oE-rLaXscGM"
              title="Video 3"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      <button className="bg-[#F97561] hover:bg-[#ED715E] rounded-lg text-white py-2 px-4 mt-12">
        <a href="/services">{t("Services.moreServices")}</a>
      </button>
    </div>
  );
}

export default ServiceCategories;
