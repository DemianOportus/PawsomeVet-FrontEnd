import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/navbar";

function BookAReservation() {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCVV] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [notification, setNotification] = useState();

  function ProgressBar({ step }) {
    const steps = [
      { id: 1, label: t("Reservation.step1") },
      { id: 2, label: t("Reservation.step2") },
      { id: 3, label: t("Reservation.step3") },
    ];

    const isStepCompleted = (stepId) => step >= stepId;

    return (
      <div className="progress-bar">
        <div className="progress-bar__line">
          <div
            className="progress-bar__line-fill"
            style={{ width: `${(step / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
        <div className="progress-bar__checkmarks">
          {steps.map((stepItem) => (
            <div
              key={stepItem.id}
              className={`progress-bar__step ${
                isStepCompleted(stepItem.id) ? "completed" : ""
              }`}
            >
              <div
                className={`progress-bar__circle ${
                  isStepCompleted(stepItem.id) ? "active" : ""
                }`}
              >
                {(isStepCompleted(stepItem.id) ||
                  currentStep === stepItem.id) && (
                  <span className="checkmark">&#10003;</span>
                )}
              </div>
              <span className="step-label text-[22px]">{stepItem.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const handleNextStep = () => {
    const missing = [];
    var nextStep = true;
    if (currentStep === 0) {
      if (firstName === "") missing.push(t("Reservation.firstName"));
      if (lastName === "") missing.push(t("Reservation.lastName"));
      if (email === "") {
        missing.push(t("Reservation.email"));
      } else {
        if (!email.includes("@"))
          missing.push(t("Reservation.emailACommercialRequired"));
        if (!email.includes("."))
          missing.push(t("Reservation.emailPointRequired"));
      }

      if (phone === "" || isNaN(phone)) {
        phone === ""
          ? missing.push(t("Reservation.phone"))
          : missing.push(t("Reservation.phoneNumberRequired"));
      }
      nextStep = false;
    } else if (currentStep === 1) {
      if (date === "") missing.push(t("Reservation.date"));
      if (time === "") missing.push(t("Reservation.time"));
      nextStep = false;
    } else if (currentStep === 2) {
      if (cardNumber === "" || isNaN(cardNumber)) {
        cardNumber === ""
          ? missing.push(t("Reservation.cardNumber"))
          : missing.push(t("Reservation.cardNumberRequired"));
      }
      if (expiration === "" || isNaN(expiration)) {
        expiration === ""
          ? missing.push(t("Reservation.expiration"))
          : missing.push(t("Reservation.expirationNumberRequired"));
      }
      if (cvv === "" || isNaN(cvv)) {
        cvv === ""
          ? missing.push(t("Reservation.cvv"))
          : missing.push(t("Reservation.cvvNumberRequired"));
      }

      nextStep = false;
    }

    if (missing.length > 0) {
      setNotification({
        primary: t("Reservation.missingfields"),
        secondary: missing, //.join(","),
      });
    } else {
      setNotification(null);
      nextStep = true;
    }

    if (currentStep < 3 && nextStep === true) {
      setCurrentStep((prevStep) => prevStep + 1);
      return;
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "date":
        setDate(value);
        break;
      case "time":
        setTime(value);
        break;
      case "cardNumber":
        setCardNumber(value);
        break;
      case "expiration":
        setExpiration(value);
        break;
      case "cvv":
        setCVV(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep === 3) {
      setShowConfirmation(true);
    }
  };

  const [minDate, setMinDate] = useState("");
  const [minTime, setMinTime] = useState("");

  useEffect(() => {
    // Function to get the current date and time in Eastern Time (ET)
    const getCurrentEasternTime = () => {
      const now = new Date();
      const easternTimeOffset = -4; // Eastern Time (ET) is UTC-4 during Eastern Daylight Time (EDT)
      now.setHours(now.getHours() + easternTimeOffset);
      return now.toISOString().slice(0, 16); // Format to YYYY-MM-DDTHH:mm
    };

    const currentEasternTime = getCurrentEasternTime();
    setMinDate(currentEasternTime.slice(0, 10));
    setMinTime(currentEasternTime.slice(11, 16));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <Navbar />
      <h1 className="mt-12 mb-24 text-center">
        {t("Reservation.bookingTitle")}
      </h1>
      <ProgressBar step={currentStep} />
      <form onSubmit={handleSubmit} id="reservationForm">
        <div className="mt-16">
          {currentStep === 0 && (
            <div className="grid md:grid-cols-2">
              <input
                type="text"
                id="firstNameInput"
                name="firstName"
                placeholder={t("Reservation.firstName")}
                value={firstName}
                onChange={handleInputChange}
                className="mb-4 p-2 bg-[#FFF5F3] rounded-lg bodyText placeholder-[#6C6B6B] sm:w-[484px]"
                required
              />
              <input
                type="text"
                id="lastNameInput"
                name="lastName"
                placeholder={t("Reservation.lastName")}
                value={lastName}
                onChange={handleInputChange}
                className="mb-4 p-2 bg-[#FFF5F3] rounded-lg bodyText placeholder-[#6C6B6B] sm:w-[484px]"
                required
              />
              <input
                type="text"
                id="emailInput"
                name="email"
                placeholder={t("Reservation.email")}
                value={email}
                onChange={handleInputChange}
                className="mb-4 p-2 bg-[#FFF5F3] rounded-lg bodyText placeholder-[#6C6B6B] sm:w-[484px]"
                required
              />
              <input
                type="text"
                id="phoneInput"
                name="phone"
                placeholder={t("Reservation.phone")}
                value={phone}
                onChange={handleInputChange}
                className="mb-4 p-2 bg-[#FFF5F3] rounded-lg bodyText placeholder-[#6C6B6B] sm:w-[484px]"
                required
              />
            </div>
          )}
          {currentStep === 1 && (
            <div className="grid md:grid-cols-2">
              <input
                type="date"
                id="dateInput"
                name="date"
                min={minDate}
                placeholder={t("Reservation.date")}
                value={date}
                onChange={handleInputChange}
                className="mb-4 p-2 bg-[#FFF5F3] rounded-lg bodyText placeholder-[#6C6B6B] sm:w-[484px]"
                required
              />
              <br />
              <input
                type="time"
                id="timeInput"
                name="time"
                min={minTime}
                placeholder={t("Reservation.time")}
                value={time}
                onChange={handleInputChange}
                className="mb-4 p-2 bg-[#FFF5F3] rounded-lg bodyText placeholder-[#6C6B6B] sm:w-[484px]"
                required
              />
            </div>
          )}
          {currentStep === 2 && (
            <div>
              <input
                type="text"
                id="cardNumberInput"
                name="cardNumber"
                placeholder={t("Reservation.cardNumber")}
                value={cardNumber}
                onChange={handleInputChange}
                className="mb-4 p-2 bg-[#FFF5F3] rounded-lg bodyText placeholder-[#6C6B6B] sm:w-[484px]"
                required
              />
              <br />
              <input
                type="text"
                id="expirationInput"
                name="expiration"
                placeholder={t("Reservation.expiration")}
                value={expiration}
                onChange={handleInputChange}
                className="mb-4 p-2 bg-[#FFF5F3] rounded-lg bodyText placeholder-[#6C6B6B] sm:w-[484px]"
                required
              />
              <br />
              <input
                type="text"
                id="cvvInput"
                name="cvv"
                placeholder={t("Reservation.cvv")}
                value={cvv}
                onChange={handleInputChange}
                className="mb-4 p-2 bg-[#FFF5F3] rounded-lg bodyText placeholder-[#6C6B6B] sm:w-[484px]"
                required
              />
            </div>
          )}
        </div>

        <div className="text-center my-10  ">
          {notification && (
            <div
              className="bg-orange-100 border-l-4 border-orange-500 text-[#6C6B6B] p-4"
              role="alert"
            >
              <p className="font-bold text-3xl mb-3">{notification.primary}</p>
              <div className="flex justify-center text-left">
                <ul className="list-disc">
                  {notification.secondary.map((message, index) => (
                    <li key={index}>{message}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {currentStep > 0 && currentStep !== 3 && (
          <button
            onClick={handlePreviousStep}
            className="bg-[#F97561] hover:bg-[#ED715E] rounded-lg text-white py-2 px-4 w-[230px] mt-8 mr-5"
          >
            {t("Reservation.back")}
          </button>
        )}
        {currentStep === 3 && (
          <button
            onClick={() => {
              window.location.href = "/";
            }}
            className="bg-[#F97561] hover:bg-[#ED715E] rounded-lg text-white py-2 px-4 w-[230px] mt-8 mr-5"
          >
            {t("Navbar.home")}
          </button>
        )}

        {currentStep === 2 || currentStep === 3 ? (
          currentStep === 2 ? (
            <button
              onClick={handleNextStep}
              type="submit"
              className="bg-[#F97561] hover:bg-[#ED715E] rounded-lg text-white py-2 px-4 w-[230px] mt-8"
            >
              {t("Reservation.complete")}
            </button>
          ) : null
        ) : (
          <button
            onClick={handleNextStep}
            className="bg-[#F97561] hover:bg-[#ED715E] rounded-lg text-white py-2 px-4 w-[230px] mt-8"
          >
            {t("Reservation.nextStep")}
          </button>
        )}

        {currentStep === 3 && (
          <p className="mt-4 text-green-500">
            {t("Reservation.confirmationMessage")}
          </p>
        )}
      </form>
    </div>
  );
}

export default BookAReservation;
