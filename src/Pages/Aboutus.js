
import about1 from '../Assets/about1.jpg';

import about4 from '../Assets/about4.jpg';

import Banner from "../componets/Banner/Banner";
import { FaTruckMedical , FaUserDoctor} from "react-icons/fa6";
import { MdHandshake } from "react-icons/md";
import { BsArrowThroughHeartFill } from "react-icons/bs";
import  PageTransition from '../componets/Page';

import './Aboutus.css';

const Aboutus = () => {
  return (
< PageTransition>
   
    <>
      <Banner title="About us" smtitle="about us" />

      <section className="about-us py-5">
        <div className="container">
          <div className="row align-items-center">

            {/* ===== الصور (الشمال) ===== */}
            <div className="col-lg-6 col-md-12 position-relative mb-5 mb-lg-0">
              <img
                src={about4}
                alt="background"
                className="img-fluid rounded-4 main-img shadow"
              />
              <img
                src={about1}
                alt="top-left"
                className="img-fluid rounded-4 overlap-img top-left shadow-lg"
              />
            </div>

            {/* ===== الكلام + الكروت (اليمين) ===== */}
            <div className="col-lg-6 col-md-12 ps-lg-5">

              {/* About Us */}
              <h5 className='btm-about'>
                About Us
              </h5>
              <h2 className="display-6 fw-bold mb-3">
                The Great Place Of Medical Hospital Center
              </h2>
              <p /*className="text-muted"*/>
                We provide the special tips and advice of health care treatment
                and high level of best technology involve in our hospital
              </p>

              {/* Our Story */}
              <h5 className='btm-about' >
                Our Story 
              </h5>
              <p>
                Our hospital started with a vision to provide the best medical
                services using the latest technology and a dedicated team of
                professionals committed to patient care
              </p>

              {/* Our Mission */}
              <h5 className='btm-about' >
                Our Mission
              </h5>
              <p>
                Our mission is to deliver exceptional healthcare services,
                promote wellness, and ensure every patient receives personalized
                attention in a safe and caring environment
              </p>

              {/* ===== الكروت الأربعة ===== */}
              <div className="row g-4 mt-3">

                <div className="col-sm-6">
                  <div className="d-flex align-items-center p-3 border rounded-3 bg-white shadow-sm h-100">
                    <div className="icon-box me-3 rounded p-2" style={{ backgroundColor: '#eef2ff' }}>
                      <i className="bi bi-truck fs-4 text-primary"><FaTruckMedical/></i>
                    </div>
                    <span className="fw-semibold">Emergency Help</span>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex align-items-center p-3 border rounded-3 bg-white shadow-sm h-100">
                    <div className="icon-box me-3 rounded p-2" style={{ backgroundColor: '#f0fdf4' }}>
                      <i className="bi bi-person-plus fs-4 text-success"><FaUserDoctor/></i>
                    </div>
                    <span className="fw-semibold">Qualified Doctors</span>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex align-items-center p-3 border rounded-3 bg-white shadow-sm h-100">
                    <div className="icon-box me-3 rounded p-2" style={{ backgroundColor: '#fdf2f8' }}>
                      <i className="bi bi-heart-pulse fs-4 text-danger">< BsArrowThroughHeartFill/></i>
                    </div>
                    <span className="fw-semibold">Best Professionals</span>
                  </div>
                </div>
                  <div className="col-sm-6">
                  <div className="d-flex align-items-center p-3 border rounded-3 bg-white shadow-sm h-100">
                    <div className="icon-box me-3 rounded p-2" style={{ backgroundColor: '#fffbeb' }}>
                      <i className="bi bi-capsule fs-4 text-warning"> <MdHandshake/></i>
                    </div>
                    <span className="fw-semibold">Medical Treatment</span>
                  </div>
                </div>

              </div>

              {/* زر */}

              <div className='font'>
                <span className='ch'> + </span>
                 <span className='ch'> + </span>
                   <span className='ch'> + </span>
                </div>

            </div>
          </div>
        </div>
      </section>
    </>
    </ PageTransition>

   
  );
};

export default Aboutus;


