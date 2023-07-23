import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  function handleClick() {
    if (i18n.language === "en") {
      i18n.changeLanguage("fr");
      localStorage.setItem("language", "fr");
    } else {
      i18n.changeLanguage("en");
      localStorage.setItem("language", "en");
    }
  }

  const isActiveLink = (path) => {
    return location.pathname === path ? "underline" : "";
  };

  return (
    <nav className="relative z-50 flex flex-wrap items-center justify-between">
      <Link to="/">
        <h3>{t("Navbar.title")}</h3>
      </Link>
      <div className="relative md:flex gap-10" id="menu">
        <div
          className={`md:hidden absolute bg-white top-full left-0 right-0 mt-5 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col">
            <Link to="/" className={`hover:text-[#555555] ${isActiveLink("/")}`}>
              {t("Navbar.home")}
            </Link>
            <Link to="/services" className={`hover:text-[#555555] ${isActiveLink("/services")}`}>
              {t("Navbar.services")}
            </Link>
            {/* <a href="#footer" className="hover:text-[#555555]">{t("Navbar.contact")}</a> */}
            <Link
              to="/"
              className="hover:text-[#555555]"
              onClick={() => {
                scroll.scrollToTop(); // Scroll to the top of the page first
                scroller.scrollTo("footer", {
                  smooth: true,
                  offset: -50, // Adjust the offset value if needed
                }); // Scroll to the "footer" section using its ID
              }}
            >
              {t("Navbar.contact")}
            </Link>
          </div>
        </div>
        <i
          className="fa-solid fa-bars fa-xl cursor-pointer md:hidden block"
          onClick={toggleMenu}
          id="menu-button"
        ></i>
      </div>
      <div className="hidden md:flex gap-16 font-medium text-2xl" id="menu">
        <Link to="/" className={`hover:text-[#555555] ${isActiveLink("/")}`}>
          {t("Navbar.home")}
        </Link>
        <Link to="/services" className={`hover:text-[#555555] ${isActiveLink("/services")}`}>
          {t("Navbar.services")}
        </Link>
        {/* <a href="#footer" className="hover:text-[#555555]">{t("Navbar.contact")}</a> */}
        <Link
          to="/"
          className="hover:text-[#555555]"
          onClick={() => {
            scroll.scrollToTop(); // Scroll to the top of the page first
            scroller.scrollTo("footer", {
              smooth: true,
              offset: -50, // Adjust the offset value if needed
            }); // Scroll to the "footer" section using its ID
          }}
        >
          {t("Navbar.contact")}
        </Link>
        <button className="bg-white rounded-lg text-black py-1 px-6 hover:text-[#555555]" onClick={handleClick}>
          {i18n.language === "en" ? "FR" : "EN"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
