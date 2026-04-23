
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaAmbulance, FaEnvelope, FaClock } from "react-icons/fa";
import './Info.css';
import { BsSuitHeartFill } from "react-icons/bs";
import PageTransition from '../componets/Page';


const ContactInfo = () => {
  return (
    <PageTransition>
    <div className="container py-5">

      {/* 🔹 Title */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Hospital Contact Info</h2>
        <p className="text-muted"><BsSuitHeartFill style={{color:"red"}} />  Reach us anytime for emergency and support  <BsSuitHeartFill style={{color:"red"}}/> </p>
      </div>

      {/* 🔹 Info Cards */}
      <div className="row g-4">

        <div className="col-md-4">
          <div className="card info-card text-center p-4">
            <FaMapMarkerAlt className="icon" />
            <h5>Address</h5>
            <p>Alexandria, Egypt</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card info-card text-center p-4 emergency">
            <FaAmbulance className="icon" />
            <h5>Emergency</h5>
            <p>14050</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card info-card text-center p-4">
            <FaPhoneAlt className="icon" />
            <h5>Phone</h5>
            <p>0123456789</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card info-card text-center p-4">
            <FaEnvelope className="icon" />
            <h5>Email</h5>
            <p>hospital@email.com</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card info-card text-center p-4">
            <FaClock className="icon" />
            <h5>Working Hours</h5>
            <p>24 Hours - 7 Days</p>
          </div>
        </div>

      </div>

      {/* 🚑 Emergency Button */}
      <div className="text-center mt-5">
        <a href="tel:12345"   className="btn btn-danger btn-lg px-5" >
          Call Emergency Now
        </a>
      </div>

      {/* 🗺️ Map */}
      <div className="mt-5">
        <iframe
          title="map"
          className="w-100 rounded"
          height="300"
          src="https://maps.google.com/maps?q=alexandria&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>

    </div>
    </PageTransition>
  );
};

export default ContactInfo;
