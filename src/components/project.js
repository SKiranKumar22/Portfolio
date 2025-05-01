import React from 'react';
import '../stylesheet/project.css';
import projectsData from '../data/projectdata.js';  // Importing the data

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Professional Experience</h2>
      <div className="project-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <h4>Key Contributions:</h4>
            <ul>
              {project.keyContributions.map((contribution, idx) => (
                <li key={idx}>{contribution}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
