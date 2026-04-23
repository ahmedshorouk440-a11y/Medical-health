
import React from 'react';
import Footerlogo from '../../Assets/logo2.jpeg'
import { FaPhoneAlt ,FaLinkedin ,FaTwitter , FaFacebookSquare ,FaInstagramSquare  } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Footer.css'

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
                  <Link  className='sho' to="/" >Home</Link>
                    <Link className='sho' to="/aboutus" ><li>About</li></Link>
                    <Link className='sho' to="/blog"><li>Blog</li></Link>
                   <Link className='sho' to="/booking"  > <li>Booking</li></Link>
                     <Link className='sho' to="/faqs" > <li>Faqs</li> </Link> 
                    <Link className='sho' to="/ourteam" > <li>Our team</li></Link>
                      <Link className='sho' to="/Info" > <li>Info</li></Link>


                 </ul>
           </div>
           <div className='col-md-3 col-sm-6'>
               <h2> Our Services</h2>
                 <ul>
                                      <Link  className='sho' ><li><a href='#'></a>Dental Care</li> </Link>
                                      <Link  className='sho'><li><a href='#'></a>Cardiac Clinic</li></Link>
                                        <Link  className='sho' ><li><a href='#'></a>Massege Therapy</li></Link>
                                       <Link  className='sho'><li><a href='#'></a>Cardiology</li></Link>
                                          <Link  className='sho' ><li><a href='#'></a>Precise Diagnosis</li></Link>
                                           <Link  className='sho'><li><a href='#'></a>Abmbulance Service</li></Link>
                                          <Link  className='sho' to="/services" > <li>Services</li></Link>
                                          
                 </ul>

           </div>
           <div className='col-md-3 col-sm-6'>
              
            <h2> Subscribe</h2>
            <form>
              <input type='email' placeholder='Enter Your Email'/>
              <button type='submit'>Subscribe now</button>
            </form>
            <ul className='social'>
                                  <Link> <li><a href='#'></a> <FaLinkedin/></li> </Link>
                                  <Link> <li> <a href='#'></a> <FaTwitter/></li></Link>
                                  <Link> <li> <a href='#'></a> < FaFacebookSquare/></li></Link>
                                  <Link>  <li> <a href='#'></a>  < FaInstagramSquare /></li></Link>

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


