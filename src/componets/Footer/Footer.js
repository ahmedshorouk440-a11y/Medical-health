
import React from 'react';
import Footerlogo from '../../Assets/logo2.jpeg'


import { FaPhoneAlt ,FaLinkedin ,FaTwitter , FaFacebookSquare ,FaInstagramSquare  } from "react-icons/fa";


const Footer = () => {

    return(
        <footer>

        <div className='container'>
         <div className='row'>
           <div className='col-md-3 col-sm-6'>
             <img src={Footerlogo} alt="logo" className='footer-logo'/>
             <p>A dedicated care provider supports patients and families
               inside the hospital
               with kindness and respect </p>
               <div className='footer-contact'>
                <div className='footer-icon'>
                 < FaPhoneAlt/>
                 </div>
                 <div className='footer-text'>
                       <h6> Contact Us</h6>
                       <h4> +1279834208</h4>
                 </div>
                 </div>
           </div>
           <div className='col-md-3 col-sm-6'>
                 <h2> Quick Links</h2>
                 <ul>
                  <li><a href='#'></a>Home</li>
                   <li><a href='#'></a>About</li>
                    <li><a href='#'></a>Blog</li>
                     <li><a href='#'></a>Booking</li>
                      <li><a href='#'></a>Faqs</li>
                       <li><a href='#'></a>Our team</li>
                        <li><a href='#'></a>Services</li>

                 </ul>
           </div>
           <div className='col-md-3 col-sm-6'>
               <h2> Our Services</h2>
                 <ul>
                  <li><a href='#'></a>Dental Care</li>
                   <li><a href='#'></a>Cardiac Clinic</li>
                    <li><a href='#'></a>Massege Therapy</li>
                     <li><a href='#'></a>Cardiology</li>
                      <li><a href='#'></a>Precise Diagnosis</li>
                       <li><a href='#'></a>Abmbulance Service</li>
                        <li><a href='#'></a>Services</li>

                 </ul>

           </div>
           <div className='col-md-3 col-sm-6'>
              
            <h2> Subscribe</h2>
            <form>
              <input type='email' placeholder='Enter Your Email'/>
              <button type='submit'>Subscribe now</button>
            </form>
            <ul className='social'>
              <li><a href='#'> <FaLinkedin/></a></li>
              <li><a href='#'> <FaTwitter/></a></li>
              <li><a href='#'> < FaFacebookSquare/></a></li>
               <li><a href='#'> < FaInstagramSquare /></a></li>

            </ul>
           </div>
         </div>
        </div>
        <hr/>
        <div className="footer-buttom">
         <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <span>Copyright @ 2026 Design & Developed by ThemeTrades</span>
            </div>
          </div>
         </div>

        </div>

        </footer>
    )
}

export default Footer;


