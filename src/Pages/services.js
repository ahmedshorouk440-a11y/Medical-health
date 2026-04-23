
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './services.css';
import Banner from "../componets/Banner/Banner";
import PageTransition from '../componets/Page';
import ser1 from '../Assets/ser1.jpg';
import ser2 from '../Assets/ser2.jpg';
import ser3 from '../Assets/ser3.jpg';
import ser4 from '../Assets/ser4.jpg';
import ser5 from '../Assets/ser5.jpg';

import ser6 from '../Assets/ser6.jpg';



function Services() {
   
  const services = [
    {
      title: "Medical Consultations",
      img: ser1
    },
    {
      title: "Surgery & Operations",
      img: ser2
    },
    {
      title: "Maternity & Childcare",
      img: ser3
    },
    {
      title: "Diagnostics & Labs",
      img: ser4
    },
    {
      title: "Emergency Care",
      img: ser5
    },
    {
      title: "Pharmacy Services",
      img: ser6
    }
  ];

  return (
    <>
    <PageTransition>
     <Banner title="Our services" smtitle="Our services"/>
    <div className="container py-5">

      {/* Title */}
      <div className="text-center mb-5">
       
        <p className="services-intro">Explore the medical services we provide</p>
      </div>

      {/* Services */}
      <div className="row g-4">

        {services.map((service, index) => (

          <div className="col-md-4" key={index}>

            <div className="card shadow-sm border-0 h-100">

              <img
                src={service.img}
                className="card-img-top"
                style={{height:"200px",objectFit:"cover"}}
              />

              <div className="card-body text-center">

                <h5 className="card-title fw-bold">
                  {service.title}
                </h5>

                <button className="nnn">
                  View Details
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
    </PageTransition>
    </>
  );
}

export default Services;