import React from 'react';
import '../stylesheet/profile.css';
import profileImage from '../assets/sl1.png'; // Add your image in assets folder

const Profile = () => {
  return (
    <section id="profile" className="profile-section">
      <div className="profile-container">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="profile-details">
          <h1>Kiran Kumar.S</h1>
          <h3>Software Engineer</h3>
          <i>
          "Explore, learn, and do. Make mistakes, correct them, learn again, explore more — and never stop."
          </i>
        </div>
      </div>
    </section>
  );
};

export default Profile;
