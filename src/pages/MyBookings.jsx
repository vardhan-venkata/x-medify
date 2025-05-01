import React, { useState, useEffect } from "react";
import NavBar from "../components/Navbar/NavBar";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import Box from "@mui/material/Box";


const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get bookings from localStorage
    const storedBookings = localStorage.getItem("bookings");
    
    // Set bookings state with stored data or empty array if none exists
    setBookings(storedBookings ? JSON.parse(storedBookings) : []);
    setLoading(false);
  }, []);

  return (
    <div>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <h1>My Bookings</h1>
        
        {loading ? (
          <p>Loading your bookings...</p>
        ) : bookings && bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <HospitalCard key={index} hospital={booking} bookingPage={true} />
          ))
        ) : (
          <p>No bookings found. Book an appointment to see it here.</p>
        )}
      </Box>
    </div>
  );
};

export default MyBookings;