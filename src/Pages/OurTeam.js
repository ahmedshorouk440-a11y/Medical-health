
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./OurTeam.css";


import team1 from '../Assets/team1.png'
import team5 from '../Assets/team5.jpg'
import about1 from '../Assets/about1.jpg'
import ourteam from '../Assets/ourteam.jpg'
import nurse from '../Assets/nurse.jpg'
import PageTransition from '../componets/Page';

const teamMembers = [
  {
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800",
    name: "Dr. Ahmed Ali",
    role: "Doctor"
  },
  {
    img: about1,
    name: "Dr. Sara Hassan",
    role: "Surgeon"
  },
  {
    img: nurse,
    name: "Mona Adel",
    role: "Nurse"
  },
  {
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800",
    name: "Hagar Mohamed",
    role: "Receptionist"
  },
  {
    img: team5 ,
    name: "Omar Samy",
    role: "Pharmacist"
  },
  {
    img: ourteam,
    name: "Laila Ahmed",
    role: "Radiologist"
  },
  {
    img: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=800",
    name: "Salma Nabil",
    role: "Customer Support"
  },
  {
    img: team1,
    name: "Mostafa Ali",
    role: "Accountant"
  }
];

const OurTeam = () => {
  return (
    <>
    <PageTransition>

      <div className="team-page">

        {/* ===== Header ===== */}
        <div className="team-header text-center text-white d-flex align-items-center justify-content-center">
          <div>
            <h1>Meet Our Team</h1>
            <p>We are a group of skilled and passionate professionals</p>
          </div>
        </div>

        {/* ===== Team Cards ===== */}
        <div className="container py-5">
          <h2 className="text-center mb-5">Our Creative Team</h2>

          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="team-card">
                  <img src={member.img} alt={member.name} />
                  <div className="team-info text-center">
                    <h5>{member.name}</h5>
                    <p>{member.role}</p>

                    <div className="social-icons">
                      <i className="bi bi-facebook"></i>
                      <i className="bi bi-twitter"></i>
                      <i className="bi bi-linkedin"></i>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Stats Section ===== */}
        <div className="stats-section text-center py-5">
          <div className="container">
            <div className="row">

              <div className="col-md-3">
                <h2>50+</h2>
                <p>Doctors</p>
              </div>

              <div className="col-md-3">
                <h2>200+</h2>
                <p>Patients Daily</p>
              </div>

              <div className="col-md-3">
                <h2>15+</h2>
                <p>Departments</p>
              </div>

              <div className="col-md-3">
                <h2>10+</h2>
                <p>Years Experience</p>
              </div>

            </div>
          </div>
        </div>

        {/* ===== Why Choose Us ===== */}
        <div className="why-section py-5 text-center">
          <h2 className="mb-4">Why Choose Us?</h2>

          <div className="container">
            <div className="row">

              <div className="col-md-4">
                <div className="why-box">
                  <i className="bi bi-heart-pulse-fill"></i>
                  <h5>Care</h5>
                  <p>We provide the best healthcare services</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="why-box">
                  <i className="bi bi-lightbulb-fill"></i>
                  <h5>Innovation</h5>
                  <p>Modern solutions for better care</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="why-box">
                  <i className="bi bi-people-fill"></i>
                  <h5>Teamwork</h5>
                  <p>Strong and collaborative environment</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ===== Testimonials ===== */}
        <div className="testimonials py-5 bg-light text-center">
          <h2 className="mb-4">What Our Patients Say</h2>

          <div className="container">
            <div className="row">

              <div className="col-md-4">
                <div className="testimonial-card">
                  <p>"Amazing service and friendly staff!"</p>
                  <h6>- Ahmed</h6>
                </div>
              </div>

              <div className="col-md-4">
                <div className="testimonial-card">
                  <p>"Best hospital experience ever."</p>
                  <h6>- Sara</h6>
                </div>
              </div>

              <div className="col-md-4">
                <div className="testimonial-card">
                  <p>"Highly professional doctors."</p>
                  <h6>- Mona</h6>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ===== CTA ===== */}
        <div className="cta-section text-center py-5">
          <h2>Need Medical Help?</h2>
          <p>Contact us now and get the best care</p>
          <button className="btn btn-primary">Book Appointment</button>
        </div>

      </div>
      </PageTransition>
    </>
  );
};

export default OurTeam;