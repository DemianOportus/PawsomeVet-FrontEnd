import React, { useState } from "react";
import servicesImage from "../images/services-image.png";
import Navbar from "../components/navbar.js";
import cat from "../images/cat.png";
import dog from "../images/dog.png";
import bird from "../images/bird.png";
import Footer from "../components/footer";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();
  const servicesData = [
    {
      title: t("SpecificService.RabiesVaccine"),
      description: t("SpecificService.RabiesVaccineDescription"),
      time: "15 min",
      price: "$ 44 CAD",
      animalType: "dog",
      image: dog,
      alt: t("SpecificService.DogIconAlt"),
      category: "vaccines",
    },
    {
      title: t("SpecificService.DistemperVaccine"),
      description: t("SpecificService.DistemperVaccineDescription"),
      time: "15 min",
      price: "$ 49 CAD",
      animalType: "dog",
      image: dog,
      alt: t("SpecificService.DogIconAlt"),
      category: "vaccines",
    },
    {
      title: t("SpecificService.HepatitisVaccine"),
      description: t("SpecificService.HepatitisVaccineDescription"),
      time: "15 min",
      price: "$ 51 CAD",
      animalType: "dog",
      image: dog,
      alt: t("SpecificService.DogIconAlt"),
      category: "vaccines",
    },
    {
      title: t("SpecificService.FelineRabiesVaccine"),
      description: t("SpecificService.FelineRabiesVaccineDescription"),
      time: "15 min",
      price: "$ 51 CAD",
      animalType: "cat",
      image: cat,
      alt: t("SpecificService.CatIconAlt"),
      category: "vaccines",
    },
    {
      title: t("SpecificService.PanleukopeniaVaccine"),
      description: t("SpecificService.PanleukopeniaVaccineDescription"),
      time: "15 min",
      price: "$ 51 CAD",
      animalType: "cat",
      image: cat,
      alt: t("SpecificService.CatIconAlt"),
      category: "vaccines",
    },
    {
      title: t("SpecificService.PolyomavirusVaccine"),
      description: t("SpecificService.PolyomavirusVaccineDescription"),
      time: "15 min",
      price: "$ 51 CAD",
      animalType: "bird",
      image: bird,
      alt: t("SpecificService.BirdIconAlt"),
      category: "vaccines",
    },
    {
      title: t("SpecificService.NeuteringFeline"),
      description: t("SpecificService.NeuteringFelineDescription"),
      time: "2h",
      price: "$ 299 CAD",
      animalType: "cat",
      image: cat,
      alt: t("SpecificService.CatIconAlt"),
      category: "neutering",
    },
    {
      title: t("SpecificService.NeuteringCanine"),
      description: t("SpecificService.NeuteringCanineDescription"),
      time: "2h",
      price: "$ 319 CAD",
      animalType: "dog",
      image: dog,
      alt: t("SpecificService.DogIconAlt"),
      category: "neutering",
    },
    {
      title: t("SpecificService.MicrochippingBirds"),
      description: t("SpecificService.MicrochippingBirdsDescription"),
      time: "1h",
      price: "$ 353 CAD",
      animalType: "bird",
      image: bird,
      alt: t("SpecificService.BirdIconAlt"),
      category: "microchipping",
    },
    {
      title: t("SpecificService.MicrochippingCats"),
      description: t("SpecificService.MicrochippingCatsDescription"),
      time: "1h",
      price: "$ 299 CAD",
      animalType: "cat",
      image: cat,
      alt: t("SpecificService.CatIconAlt"),
      category: "microchipping",
    },
    {
      title: t("SpecificService.MicrochippingDogs"),
      description: t("SpecificService.MicrochippingDogsDescription"),
      time: "1h",
      price: "$ 325 CAD",
      animalType: "dog",
      image: dog,
      alt: t("SpecificService.DogIconAlt"),
      category: "microchipping",
    },
  ];
  

  const [selectedAnimalType, setSelectedAnimalType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const handleAnimalTypeChange = (event) => {
    setSelectedAnimalType(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const filterAndSortServices = () => {
    let filteredServices = servicesData;

    if (selectedAnimalType) {
      filteredServices = filteredServices.filter(
        (service) =>
          service.animalType.toLowerCase() === selectedAnimalType.toLowerCase()
      );
    }

    if (selectedCategory) {
      filteredServices = filteredServices.filter(
        (service) =>
          service.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (selectedPrice === "lowest") {
      filteredServices.sort(
        (a, b) =>
          parseFloat(a.price.substring(1)) - parseFloat(b.price.substring(1))
      );
    } else if (selectedPrice === "highest") {
      filteredServices.sort(
        (a, b) =>
          parseFloat(b.price.substring(1)) - parseFloat(a.price.substring(1))
      );
    }

    return filteredServices;
  };

  const filteredServices = filterAndSortServices();
  return (
    <div>
      <div className="my-5 mx-16">
        <Navbar />
        <div className="mt-48 relative z-20">
          <h1>{t("ServicesPage.servicesWeOffer")}</h1>
          <p className="mb-10 max-w-[600px]">{t("ServicesPage.description")}</p>
        </div>
        <div className="z-10">
          <img
            className="hidden absolute lg:block w-[1000px] top-0 right-0"
            src={servicesImage}
            alt={t("ServicesPage.altImage")}
          />
        </div>
        <div className="md:flex justify-between lg:mt-96">
          <div>
            <label className="pr-3">{t("ServicesPage.animalType")}</label>
            <select
              className="bg-[#F1F1F1] rounded-md"
              value={selectedAnimalType}
              onChange={handleAnimalTypeChange}
            >
              <option value="">{t("ServicesPage.any")}</option>
              <option value="dog">{t("ServicesPage.dog")}</option>
              <option value="cat">{t("ServicesPage.cat")}</option>
              <option value="bird">{t("ServicesPage.bird")}</option>
            </select>
          </div>
          <div>
            <label className="pr-3">{t("ServicesPage.category")}</label>
            <select
              className="bg-[#F1F1F1] rounded-md"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">{t("ServicesPage.any")}</option>
              <option value="vaccines">{t("ServicesPage.vaccines")}</option>
              <option value="microchipping">
                {t("ServicesPage.microchipping")}
              </option>
              <option value="neutering">{t("ServicesPage.neutering")}</option>
            </select>
          </div>
          <div>
            <label className="pr-3">{t("ServicesPage.price")}</label>
            <select
              className="bg-[#F1F1F1] rounded-md"
              value={selectedPrice}
              onChange={handlePriceChange}
            >
              <option value="">{t("ServicesPage.anyPrice")}</option>
              <option value="lowest">{t("ServicesPage.lowestPrice")}</option>
              <option value="highest">{t("ServicesPage.highestPrice")}</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid justify-center xl:grid-cols-2  bg-[#FFF8F7] py-5 px-16 mt-16 pb-20">
        {filteredServices.map((service, index) => (
          <div
            key={index}
            className="flex items-center  w-[560px] border-[1px] border-[#BCBCBC] bg-white rounded-xl my-2 p-10"
          >
            <div className="bg-[#FCF0CD] rounded-full w-64 mr-8">
              <img src={service.image} className="p-2" alt={service.alt}/>
            </div>
            <div>
              <h3>{service.title}</h3>
              <p className="pt-2">{service.description}</p>
              <div className="flex items-center space-x-8 mt-4">
                <p className="bg-[#F1F1F1] rounded-xl px-3 py-1 text-black text-[22px] w-[140px] text-center">
                  <i class="fa-regular fa-clock pr-2"></i>
                  {service.time}
                </p>
                <p className="bg-[#F1F1F1] rounded-xl px-3 py-1 text-black text-[22px] w-[140px] text-center">
                  {service.price}
                </p>
              </div>
              <button 
                  className="bg-[#F97561] hover:bg-[#ED715E] rounded-lg text-white py-2 px-4 w-[312px] mt-8"
                  onClick={() => {
                    window.location.href = "/book-a-reservation";
                  }}
              >
                {t("ServicesPage.bookNow")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
