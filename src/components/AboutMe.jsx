import React from 'react';
import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-container">
      <h2 className="about-header">About Me</h2>
      <div className="about-content">
        <div className="avatar-container">
          <img src="avatar.jpg" alt="Developer Avatar" className="avatar-image" />
        </div>
        <div className="bio-container">
          <p className="about-text">
            Here goes your brief bio or description about yourself. You can talk about your passions, skills, experiences, or any other relevant information.
          </p>
          <ul className="about-list">
            <li>Your skill 1</li>
            <li>Your skill 2</li>
            <li>Your skill 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
