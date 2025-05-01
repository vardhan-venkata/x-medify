import React from "react";
import { useState } from "react";
import hospitalImage from "./../../images/hospital.png";
import "./HospitalCard.css";
import { useTheme } from "@mui/material/styles";
import SlotBooking from "../SlotBooking/SlotBooking";

const HospitalCard = ({ hospital, bookingPage }) => {
  const [isVisible, setIsVisible] = useState(false);
  console.log("Booking Page Prop:", bookingPage);
  const theme = useTheme();
  
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  // Handle both booking data formats (app format and test format)
  const getDisplayTime = () => {
    if (hospital.time && hospital.time.slot) {
      return hospital.time.slot;
    } else if (hospital.bookingTime) {
      return hospital.bookingTime;
    }
    return "Select Time";
  };

  const getDisplayDate = () => {
    if (hospital.date) {
      return hospital.date;
    } else if (hospital.bookingDate) {
      return hospital.bookingDate;
    }
    return "Select Date";
  };

  return (
    <>
    {/* hospital card display for my Bookings page */}
    {bookingPage ? (
      <div className="container">
        <div className="card">
          <div className="image-section">
            <img
              className="hospital-image"
              src={hospitalImage}
              alt="hospital-image"
            />
          </div>
          <div className="hospital-info">
            <h3 className="hospital-name">{hospital['Hospital Name']}</h3>
            <h5>
              {hospital.City}, {hospital.State || hospital['Country Name']}
            </h5>
            <p>FREE, consultation Fee at the clinic</p>
          </div>
          <div className="button-section">
            <button
              style={{
                backgroundColor: "white",
                color: theme.palette.primary.main,
                height: "40px",
                border: `1px solid ${theme.palette.primary.main}`,
                borderRadius: "5px",
                marginBottom: "5px",
              }}
              onClick={handleClick}
            >
              {getDisplayTime()}
            </button>
            <button
              style={{
                backgroundColor: "white",
                color: "green",
                height: "40px",
                border: "1px solid green",
                borderRadius: "5px",
              }}
              onClick={handleClick}
            >
              {getDisplayDate()}
            </button>
          </div>
        </div>
      </div>
    ) : (
      <div className="container">
        <div className="card">
          <div className="image-section">
            <img
              className="hospital-image"
              src={hospitalImage}
              alt="hospital-image"
            />
          </div>
          <div className="hospital-info">
            <h3 className="hospital-name">{hospital['Hospital Name']}</h3>
            <h5>
              {hospital.City}, {hospital.State || hospital['Country Name']}
            </h5>
            <p>FREE, consultation Fee at the clinic</p>
          </div>
          <div className="button-section">
            <p>Available today</p>
            <button
              style={{
                backgroundColor: theme.palette.primary.main,
                color: "white",
                height: "40px",
                border: 0,
                borderRadius: "5px",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
              onClick={handleClick}
            >
              {!isVisible ? 'Book FREE Center Visit' : 'Close Booking ^^'}
            </button>
          </div>
        </div>

        {isVisible && (
          <div className="slots">
            <SlotBooking hospital={hospital} />
          </div>
        )}
      </div>
    )}
    </>
  );
};

export default HospitalCard;