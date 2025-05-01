import React from "react";
import { useTheme } from "@mui/material/styles";
import "./NavBar.css";
import logo from "./../../images/Group 7.png";
import { useNavigate } from "react-router";

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="info-bar"
        style={{ backgroundColor: theme.palette.primary.main }}
      >
        <p>
          The health and well being of our patients and their health care teams
          will always be our priority, so we follow the best practices for
          cleanliness
        </p>
      </div>
      <div className="navbar">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="tab-container" >
          <button className="tab-item">Find doctors</button>
          <button className="tab-item" onClick={() => navigate("/search")}>Hospitals</button>
          <button className="tab-item">medicine</button>
          <button className="tab-item">Surgeries</button>
          <button className="tab-item">software for provider</button>
          <button className="tab-item">Facilities</button>
        </div>
        <button
          className="my-booking-button"
          style={{
            backgroundColor: theme.palette.primary.main,
            color: "white",
          }}
          onClick={()=>navigate('/my-bookings')}
        >
          My Bookings
        </button>
      </div>
    </div>
  );
};

export default Navbar;