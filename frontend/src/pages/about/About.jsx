import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="about-title">About Us</h1>
        <div className="about-divider"></div>
      </div>
      
      <div className="about-content">
        <div className="about-section">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            We are dedicated to providing high quality online courses to help
            individuals learn and grow in their desired fields. Our experienced
            instructors ensure that each course is tailored for effective learning
            and practical application.
          </p>
        </div>
        
        <div className="about-section">
          <h2 className="section-title">Our Approach</h2>
          <p className="section-text">
            Our learning platform combines interactive content, expert instruction,
            and a supportive community to create an engaging educational experience.
            We believe in making quality education accessible to everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;