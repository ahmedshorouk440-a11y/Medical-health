
import React, { useState } from "react";
import Banner from "../componets/Banner/Banner";
import "./booking.css";
import  PageTransition from '../componets/Page';

const Booking = () => {
  const [specialty, setSpecialty] = useState("");
  const [doctor, setDoctor] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const data = {
    Cardiology: ["Dr. Ahmed", "Dr. Hassan", "Dr. Youssef"],
    Dermatology: ["Dr. Sara", "Dr. Mona", "Dr. Laila"],
    Pediatrics: ["Dr. Nour", "Dr. Karim", "Dr. Salma"],
    Neurology: ["Dr. Omar", "Dr. Mostafa"],
  };

  const times = ["10:00", "11:00", "12:00", "1:00", "2:00", "3:00"];

  const handleSubmit = () => {
   alert( 
    `Booked with  ${doctor} at ${selectedTime} (${specialty})`
    );
  };

  return (
    <>
    <PageTransition>
    
    
    <Banner title="Booking" smtitle="Booking" />
    

    <div className="booking-page">
      <div className="booking-box">

        <h3 className="text-center mb-4">Book Appointment</h3>

        {/* SPECIALTY */}
        <div className="mb-3">
          <label>Choose Specialty</label>
          <select
            className="custom-select"
            value={specialty}
            onChange={(e) => {
              setSpecialty(e.target.value);
              setDoctor("");
            }}
          >
            <option value="">Select specialty</option>
            {Object.keys(data).map((spec, i) => (
              <option key={i}>{spec}</option>
            ))}
          </select>
        </div>

        {/* DOCTORS */}
        <div className="mb-3">
          <label>Choose Doctor</label>

          <div className="doctor-grid">
            {specialty &&
              data[specialty].map((doc, i) => (
                <div
                  key={i}
                  className={`doctor-card ${
                    doctor === doc ? "active" : ""
                  }`}
                  onClick={() => setDoctor(doc)}
                >
                  👨‍⚕️ {doc}
                </div>
              ))}

            {!specialty && (
              <p className="text-muted mt-2">
                Please select a specialty first
              </p>
            )}
          </div>
        </div>

        {/* DATE */}
        <div className="mb-3">
          <label>Select Date</label>
          <input type="date" className="custom-select" />
        </div>

        {/* TIME */}
        <div className="mb-3">
          <label>Select Time</label>

          <div className="time-grid">
            {times.map((t, i) => (
              <div
                key={i}
                className={`time-slot ${
                  selectedTime === t ? "active" : ""
                }`}
                onClick={() => setSelectedTime(t)}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* BUTTON */}
        <button
          className="confirm-btn"
          onClick={handleSubmit}
          disabled={!doctor || !selectedTime}
        >
          Confirm Booking
        </button>

      </div>
    </div>

        </PageTransition>
                </>
  );
};


export default Booking ;