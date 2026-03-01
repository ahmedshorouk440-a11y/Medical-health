
import React from "react";
import Banner from "../componets/Banner/Banner";
import { GrMapLocation  } from "react-icons/gr";
import { SlEnvelopeOpen } from "react-icons/sl";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import './contact.css';
import FormContact from "./FormContact";

const Contact = () =>{


    return(
     <>
     <Banner title="Contact" smtitle="contact" />
     <section className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
                <FormContact/>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="side">
                <div className="overlay">
                 <h3> Contact Us For Any Informations</h3>
                 
                 <li><GrMapLocation/> Location</li>
                 <hr/>
                 <p> shorouk </p>
                  <li><SlEnvelopeOpen/> Email & Phone</li>
                  <hr/>
                  <p> ahmedshorouk440@gamil.com</p>
                  <p>1279834208</p>
                   <li><AiOutlineGlobal/> Follow Us</li>
                   <ul>
                    <li><FaFacebook/></li>
                    <li>< FaInstagram/></li>
                    <li><FaWhatsapp/></li>
                   </ul>

                </div>
              </div>
            </div>
           
          </div>
        </div>
     </section>
     </>
    )
}
export default Contact;
