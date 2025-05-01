import React from 'react';
import '../stylesheet/courses_and_certifications.css';
import coursesData from '../data/coursedata.js';

const CoursesAndCertifications = () => {
  return (
    <section id="courses" className="courses">
      <h2>Courses & Certifications</h2>
      <div className="certifications-list">
        {coursesData.map((item, index) => (
          <div key={index} className="certification-item">
            <h3>{item.platform}</h3>
            <p>{item.course}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              View Certification
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesAndCertifications;
