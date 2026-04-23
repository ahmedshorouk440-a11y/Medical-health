
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Blog.css";
import heart from '../Assets/heart.jpg'
import PageTransition from '../componets/Page';
import { Link } from "react-router-dom";



const BlogPosts = [
  {
    id: 1,
    title: "Heart Disease",
    symptoms: "Chest pain, shortness of breath",
    causes: "High blood pressure, smoking",
    treatment: "Healthy diet, medications",
    img: heart
  },
  {
    id: 2,
    title: "Diabetes",
    symptoms: "Frequent urination, fatigue",
    causes: "High sugar levels, genetics",
    treatment: "Insulin, healthy lifestyle",
    img: "https://images.unsplash.com/photo-1579154204601-01588f351e67"
  },
  {
    id: 3,
    title: "Migraine",
    symptoms: "Severe headache, nausea",
    causes: "Stress, lack of sleep",
    treatment: "Pain relievers, rest",
    img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063"
  }
];

function Blog() {
  return (
         <PageTransition>
    <div className="blog-page">

      {/* Banner */}
      <div className="blog-banner d-flex align-items-center text-center text-white">
        <div className="container">
          <h1>Medical Blog</h1>
          <p>Learn about diseases, symptoms and treatments</p>
        </div>
      </div>

      {/* Search */}
      <div className="container search-box">
        <div className="row">
          <div className="col-md-8">
            <input className="form-control" placeholder="Search diseases..." />
          </div>
          <div className="col-md-4">
            <select className="form-select">
              <option>All Categories</option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>General</option>
            </select>
          </div>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="container mt-5">
        <div className="row">
          {BlogPosts.map((post) => (
            <div className="col-md-4 mb-4" key={post.id}>
              <div className="card blog-card">
                <img src={post.img} className="card-img-top" alt="" />
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
        <Link to="/blog" className="btn btn-outline-primary m-1" >1</Link>
        <Link   to="/blogcont" className="btn btn-outline-primary m-1">2</Link>
        <Link   to="/blogcont2" className="btn btn-outline-primary m-1">3</Link>
      </div>

    </div>
    </PageTransition>
  );
}

export default Blog;