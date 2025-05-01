import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Landing from "./pages/Landing";
import MyBookings from "./pages/MyBookings";
import Search from './pages/Search';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2AA8FF",
      },
      secondary: {
        main: "#102851",
      },
    },
  });

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="/search" element={<Search/>} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
Application Features & Requirements
1. Landing Page
✅ Top Navigation Bar (Links: Find Doctors, Hospitals, Medicines, etc.)
✅ Search Section:

State & City Dropdowns (Fetched from API).
Search Button (type="submit" labeled "Search").
2. Search Results Page
✅ List of Available Medical Centers (Hospital Name, Address, City, State, ZIP Code, Overall Rating).
✅ Booking Button: “Book FREE Center Visit”

3. Booking Interface
✅ Calendar Selection (Appointment dates within a week).
✅ Available Time Slots (Displayed using <p> tags as Today, Morning, Afternoon, Evening).

4. My Bookings Page
✅ Displays user’s booked appointments (Hospital Name, Address, Date, Time).
✅ Page Heading: <h1> "My Bookings"
✅ Route URL: /my-bookings (Use this exact route to avoid test failures).

5. Data Persistence
✅ Use localStorage to store booking data with the key "bookings".
✅ Data should persist after a page refresh.
*/