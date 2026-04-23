import { Link } from "react-router-dom";

import { BiHeart } from "react-icons/bi";
import "./Banner.css";

const Banner = (props) => {
  return (
    <section className="banner">

      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">

            <h2>{props.title}</h2>

            <div className="breadcrumb-box">
              <Link to="/" >
                <BiHeart/>
              </Link>
              <span>  {props.smtitle}</span>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Banner;