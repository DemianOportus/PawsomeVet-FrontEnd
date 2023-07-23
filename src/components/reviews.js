import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import stars0 from "../images/0-stars.jpeg";
import stars1 from "../images/1-star.jpeg";
import stars2 from "../images/2-stars.jpeg";
import stars3 from "../images/3-stars.jpeg";
import stars4 from "../images/4-stars.jpeg";
import stars5 from "../images/5-stars.jpeg";

function Reviews() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviews, setReviews] = useState([
    {
      name: "Laura",
      content:
        "Exceptional care and expertise! Highly recommend this website for top-notch veterinary services.",
      stars: stars5,
    },
    {
      name: "Bob",
      content:
        "Game-changer for my cat's health. Knowledgeable, compassionate veterinarians dedicated to animal well-being.",
      stars: stars4,
    },
    {
      name: "John",
      content:
        "Impressed with the warm, friendly staff and comprehensive examinations. Satisfied with the service and will return for future pet care.",
      stars: stars5,
    },
  ]);
  const [newReview, setNewReview] = useState({
    name: "",
    content: "",
    stars: stars0,
  });

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % reviews.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + reviews.length) % reviews.length
    );
  };

  const handleOpenReviewModal = () => {
    setShowReviewModal(true);
  };

  const handleCloseReviewModal = () => {
    setShowReviewModal(false);
  };

  const handlePostReview = () => {
    setReviews((prevReviews) => [newReview, ...prevReviews]);
    setNewReview({ name: "", content: "", stars: stars0 });
    setShowReviewModal(false);
  };

  return (
    <div className="text-center mt-36">
      <h1 className="mb-4">{t("Reviews.title")}</h1>
      <h3>{reviews[currentSlide].name}</h3>
      <div className="flex justify-center">
        <button onClick={handlePrevSlide} className="pr-10 lg:pr-16 bodyText">
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <p className="lg:w-[800px]">{reviews[currentSlide].content}</p>
        <button onClick={handleNextSlide} className="pl-10 lg:pl-16 bodyText">
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
      <img
        src={reviews[currentSlide].stars}
        alt="stars"
        className="mx-auto my-8"
      />
      <button
        onClick={handleOpenReviewModal}
        className="bg-[#F97561] hover:bg-[#ED715E] rounded-lg text-white py-2 px-4"
      >
        {t("Reviews.leaveReview")}
      </button>

      {showReviewModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="font-bold mb-4">{t("Reviews.modalTitle")}</h2>
            <input
              type="text"
              placeholder={t("Reviews.placeholderName")}
              value={newReview.name}
              onChange={(e) =>
                setNewReview({ ...newReview, name: e.target.value })
              }
              className="w-full mb-4 p-2 bg-[#FFF5F3] rounded-xl bodyText placeholder-[#6C6B6B]"
            />
            <textarea
              placeholder={t("Reviews.placeholderComment")}
              value={newReview.content}
              onChange={(e) =>
                setNewReview({ ...newReview, content: e.target.value })
              }
              className="w-full mb-4 p-2 bg-[#FFF5F3] rounded-xl bodyText placeholder-[#6C6B6B]"
            />
            <label htmlFor="stars" className="block mb-2 font-bold text-left">
              {t("Reviews.stars")}
            </label>
            <select
              id="stars"
              value={newReview.stars}
              onChange={(e) =>
                setNewReview({ ...newReview, stars: e.target.value })
              }
              className="w-full mb-4 p-2 bg-[#FFF5F3] rounded bodyText"
            >
              <option value={stars0}>{t("Reviews.zeroStars")}</option>
              <option value={stars1}>{t("Reviews.oneStar")}</option>
              <option value={stars2}>{t("Reviews.twoStars")}</option>
              <option value={stars3}>{t("Reviews.threeStars")}</option>
              <option value={stars4}>{t("Reviews.fourStars")}</option>
              <option value={stars5}>{t("Reviews.fiveStars")}</option>
            </select>
            <div className="flex justify-end">
              <button
                onClick={handleCloseReviewModal}
                className="bodyText mr-2"
              >
                {t("Reviews.cancel")}
              </button>
              <button
                onClick={handlePostReview}
                className="bg-[#F97561] hover:bg-[#ED715E] rounded-lg text-white py-2 px-4"
              >
                {t("Reviews.postReview")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Reviews;
