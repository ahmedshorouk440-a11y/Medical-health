import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import hairloss from '../Assets/hairloss.jpg';
import backpain from '../Assets/backpain.jpg';
import vatmain from '../Assets/vitamin.jpg';
import kneepain from '../Assets/kneepain.jpg'
import { Link } from "react-router-dom";
import PageTransition from '../componets/Page';

const blogPosts = [
  {
    id: 8,
    title: "Knee Pain",
    symptoms: "Swelling, stiffness, difficulty moving",
    causes: "Injury, arthritis, overuse",
    treatment: "Rest, physical therapy, pain relievers",
    img: kneepain
  },
  {
    id: 9,
    title: "Hair Loss",
    symptoms: "Thinning hair, bald spots",
    causes: "Genetics, stress, hormonal changes",
    treatment: "Medications, hair care, proper nutrition",
    img: hairloss
  },
  {
    id: 10,
    title: "Back Pain",
    symptoms: "Muscle ache, shooting pain, limited flexibility",
    causes: "Poor posture, injury, heavy lifting",
    treatment: "Exercise, physical therapy, pain relief meds",
    img: backpain
  },
  {
    id: 11,
    title: "Vitamin Deficiency",
    symptoms: "Fatigue, weak immunity, pale skin",
    causes: "Poor diet, lack of sunlight, absorption issues",
    treatment: "Balanced diet, supplements, medical advice",
    img: vatmain
  }
];

function Blogcont() {
  return (
    <PageTransition>
    <div className="blog-page">

      {/* Banner */}
      <div className="blog-banner d-flex align-items-center text-center text-white">
        <div className="container">
          <h1>Physical Health</h1>
          <p>Learn about common physical health conditions</p>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="container mt-5">
        <div className="row">
          {blogPosts.map((post) => (
            <div className="col-md-4 mb-4" key={post.id}>
              <div className="card blog-card">
                <img src={post.img} className="card-img-top" alt={post.title} />
                
                <div className="card-body">
                  <h5>{post.title}</h5>

                  <p><strong>Symptoms:</strong> {post.symptoms}</p>
                  <p><strong>Causes:</strong> {post.causes}</p>
                  <p><strong>Treatment:</strong> {post.treatment}</p>

                  <button className="btn btn-primary w-100">
                    Read More
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
        {/* Pagination */}
      <div style={{display:"flex" , justifyContent:"center", alignItems:"center"}} >
        <Link  to="/blog" className="btn btn-outline-primary m-1" >1</Link>
        <Link   to="/blogcont" className="btn btn-outline-primary m-1">2</Link>
        <Link   to="/blogcont2" className="btn btn-outline-primary m-1">3</Link>
      </div>

    </div>
    </PageTransition>
  );
}

export default Blogcont;
