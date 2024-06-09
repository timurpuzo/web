import React from "react";
import projekat1 from '../components/assets/projekat1.png';
import projekat2 from '../components/assets/projekat2.png';

function Projects() {
  return (
    <div>
      <style>{`
        .projects-container {
          text-align: center;
          padding: 20px;
        }

        .project-item {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 40px 0;
          background-color: 	#C4A484;
          border-radius: 10px;
          padding: 20px;
        }

        .project-item:nth-child(even) {
          flex-direction: row-reverse;
        }

        .project-image {
          width: 500px;
          height: auto;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgb(196, 164, 132);
          margin: 0 20px;
        }

        .project-description {
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 10px;
          background-color: white;
          box-shadow: 0 4px 8px rgb(196, 164, 132);
          width: 250px;
        }

        .project-description p {
          margin: 0;
        }
      `}</style>
      <div className="projects-container">
        <div className="project-item">
          <img src={projekat1} alt="Project 1" className="project-image" />
          <div className="project-description">
            <p>This is a simple portfolio website that showcases various projects and skills. 
              It includes sections such as an about me page, a gallery of work, and contact information, 
              providing a clean and professional online presence.</p>
          </div>
        </div>
        <div className="project-item">
          <img src={projekat2} alt="Project 2" className="project-image" />
          <div className="project-description">
            <p>
              This is a website for Caffe La Baščaršija, designed to highlight the cafe's unique atmosphere, menu, and special events. 
              The site includes beautiful imagery, detailed descriptions of offerings, and customer testimonials, 
              creating an inviting digital experience for potential visitors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
