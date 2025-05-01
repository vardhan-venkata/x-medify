import React, { useState } from 'react';
import './Slotbooking.css';

const SlotSelector = ({ hospital }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Utility to calculate date offset and format it
  const getFormattedDate = (offsetDays) => {
    const date = new Date();
    date.setDate(date.getDate() + offsetDays);
    // If offset is 0, show "Today" instead of the actual date string.
    return offsetDays === 0 ? "Today" : date.toLocaleDateString();
  };

  // Use offsets 0, 1, and 2 so that the first tab is for Today
  const dateOffsets = [0, 1, 2];
  const tabDates = dateOffsets.map((offset) => getFormattedDate(offset));

  const slots = {
    morning: ["09:00 AM", "10:00 AM", "11:00 AM"],
    afternoon: ["12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM"],
    evening: ["05:00 PM", "06:00 PM", "07:00 PM"]
  };

  const handleSlotClick = (timeOfDay, slot) => {
    setSelectedSlot({ timeOfDay, slot });
    console.log(`Selected ${timeOfDay} slot: ${slot}`);
  };

  const handleBooking = () => {
    console.log('handleBooking was clicked');
    
    const bookingObj = {
      'Hospital Name': hospital['Hospital Name'],
      'City': hospital.City,
      'State': hospital.State,
      'Hospital Type': hospital['Hospital Type'],
      'Hospital overall rating': hospital['Hospital overall rating'],
      'time': selectedSlot,
      'date': tabDates[selectedTab]
    };
  
    // Get existing bookings from localStorage or initialize as an empty array
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];

    // Add the new booking
    existingBookings.push(bookingObj);

    // Save updated array back to localStorage
    localStorage.setItem('bookings', JSON.stringify(existingBookings));
  };

  const renderTabPanel = (index) => {
    if (selectedTab !== index) return null;

    return (
      <div className="tab-panel">
        <h3 className="tab-panel-title">
          Available Slots for <p style={{ display: 'inline' }}>{tabDates[index]}</p>
        </h3>

        <div className="time-section">
          <div className="time-label"><p>Morning</p></div>
          <div className="slots-container">
            {slots.morning.map((slot, idx) => (
              <button 
                key={idx} 
                className={`slot-button ${
                  selectedSlot?.timeOfDay === 'morning' && selectedSlot?.slot === slot
                    ? 'selected'
                    : ''
                }`}
                onClick={() => handleSlotClick('morning', slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        <div className="time-section">
          <div className="time-label"><p>Afternoon</p></div>
          <div className="slots-container">
            {slots.afternoon.map((slot, idx) => (
              <button 
                key={idx} 
                className={`slot-button ${
                  selectedSlot?.timeOfDay === 'afternoon' && selectedSlot?.slot === slot
                    ? 'selected'
                    : ''
                }`}
                onClick={() => handleSlotClick('afternoon', slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        <div className="time-section">
          <div className="time-label"><p>Evening</p></div>
          <div className="slots-container">
            {slots.evening.map((slot, idx) => (
              <button 
                key={idx} 
                className={`slot-button ${
                  selectedSlot?.timeOfDay === 'evening' && selectedSlot?.slot === slot
                    ? 'selected'
                    : ''
                }`}
                onClick={() => handleSlotClick('evening', slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        <div className="action-container">
          <button 
            className="book-button"
            disabled={!selectedSlot}
            onClick={(e) => {
              handleBooking(e);
              console.log(
                `Booking confirmed for ${selectedSlot?.timeOfDay} at ${selectedSlot?.slot} on ${tabDates[selectedTab]}`
              );
            }}
          >
            Book Appointment
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="slot-selector-container">
      <div className="tabs">
        {tabDates.map((date, index) => (
          <button 
            key={index} 
            className={`tab-button ${selectedTab === index ? 'active' : ''}`}
            onClick={() => {
              setSelectedTab(index);
              setSelectedSlot(null); // Reset selected slot when changing tabs
            }}
          >
            <p>{date}</p>
          </button>
        ))}
      </div>
      
      {tabDates.map((_, index) => renderTabPanel(index))}
    </div>
  );
};

export default SlotSelector;