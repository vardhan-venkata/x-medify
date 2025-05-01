import React from "react";
import doctors from "./../../images/NicePng_doctor.png";
import "./../Hero/Hero.css";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router";

const Hero = () => {
    const theme = useTheme();
    const navigate = useNavigate()
    
  return (
    <div className="section">
      <div className="heading">
        <h2> skip the travel! Find Online</h2>
        <h1>
          <span>Medical</span>
          <span style={{color: theme.palette.primary.main}}> Centers</span>
        </h1>
        <p>
          connect instantly with a 24x7 specialist to choose to video visit a
          particular doctor
        </p>
        <button style={{backgroundColor: theme.palette.primary.main,color:'white'}} onClick={()=>navigate('/search')}>Find Centers</button>
      </div>
      <div className="hero-image">
        <img src={doctors} alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;