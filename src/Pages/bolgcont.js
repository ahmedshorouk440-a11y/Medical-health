import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import PageTransition from '../componets/Page';


const blogPosts = [
  {
    id: 4,
    title: "Depression",
    symptoms: "Persistent sadness, loss of interest, fatigue",
    causes: "Chemical imbalance, stress, trauma",
    treatment: "Therapy, antidepressant medications",
    img: "https://images.unsplash.com/photo-1493836512294-502baa1986e2"
  },
  {
    id: 5,
    title: "Alzheimer's Disease",
    symptoms: "Memory loss, confusion, difficulty thinking",
    causes: "Brain cell damage, age, genetics",
    treatment: "Medications, supportive care",
    img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0"
  },
  {
    id: 6,
    title: "Epilepsy",
    symptoms: "Seizures, temporary confusion, staring spells",
    causes: "Brain injury, genetics, infections",
    treatment: "Anti-seizure medications, surgery in some cases",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309"
  },
  {
    id: 7,
    title: "Anxiety Disorder",
    symptoms: "Excessive worry, restlessness, rapid heartbeat",
    causes: "Stress, genetics, brain chemistry",
    treatment: "Therapy, relaxation techniques, medications",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773"
  }
];

function Blogcont() {
  return (
    <PageTransition>
    <div className="blog-page">

      {/* Banner */}
      <div className="blog-banner d-flex align-items-center text-center text-white">
        <div className="container">
          <h1>Neurology & Mental Health</h1>
          <p>Learn about neurological and mental disorders</p>
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

