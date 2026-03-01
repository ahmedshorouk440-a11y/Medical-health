
import React from 'react'
import headerimg from '../Assets/Blog1.jpeg'
import './Home.css';
import { FaSquare } from "react-icons/fa";


const Home = () =>{
    return(
    <header>
         <div className='container'>

            <div className='row'>
             <div className='col-md-6 col-lg-6'>
              <h5>We Provide All Health Care Solution</h5>
              <h2> Product Your Health And Take Care To Of Your Health</h2>
              <button> <a href='#'> Read More</a></button>
              <span> + </span>
             </div>
             <div className='col-lg-6 col-md-6'>
               <div className='image-box'>
                <img src={headerimg}/>
                       <FaSquare />
                     
                   </div>
             </div>





            </div>

         </div>



    </header>
    )
}



export default Home ;

