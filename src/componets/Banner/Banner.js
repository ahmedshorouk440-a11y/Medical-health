
import React from "react";
import {Link} from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import './Banner.css';


const Banner =(props)=>{

return(
    <section className="banner">

        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12">
                     <h2>
                       {props.title}
                     </h2>
                     <li>
                        <Link to="/">
                         <FaHome/> home
                        </Link>

                        / {props.smtitle}
                     </li>
                </div>
            </div>
        </div>

    </section>
    
    
)


}

export default Banner;