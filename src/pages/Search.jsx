import React from "react";
import NavBar from "./../components/Navbar/NavBar";
import Dropdown from "../components/Dropdown/Dropdown";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import HospitalAd from "./../images/hospitalAd.png";
import "./Search.css";

const Search = () => {
  const [hospitalList, setHospitalList] = useState([]);
  const [displayHeading, setDisplayHeading] = useState(false);
  const [searchParams] = useSearchParams();

  // Retrieve values from URL query parameters
  const city = searchParams.get("city");
  const state = searchParams.get("state");

  console.log("City:", city);
  console.log("State:", state);
  const displayCityName = city ? city.toLowerCase() : "Unknown"
  useEffect(() => {
    const getHospitals = async () => {
      try {
        const response = await axios.get(`
            https://meddata-backend.onrender.com/data?state=${state}&city=${city}`);
        console.log(response.data);
        setHospitalList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    setDisplayHeading(true);
    getHospitals();
  }, [state, city]);

  return (
    
    <div>
      <NavBar />
      <Dropdown />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom:'10px',
          marginBottom:'50px',
        }}
      >
        <Grid container spacing={2} sx={{padding:'20px'}}>
          <Grid sx={{ overflow: "hidden" }} size={{ sm: 12, md: 9 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
               
              }}
            >
              {city ? (<h1 className="heading">
                {hospitalList.length} medical centers available in{' '}
                {displayCityName}
              </h1>):<h2>Search for your nearby hospitals.</h2>}
            </Box>
            {hospitalList.map((hospital) => (
              <HospitalCard hospital={hospital} bookingPage={false} />
            ))}
          </Grid>
          <Grid className="ad-grid" size={{ sm: 12, md: 3 }}>
            <img
              className="hospitalAd"
              src={HospitalAd}
              alt="hospital advertisment"
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Search;