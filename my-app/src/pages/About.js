import React from "react";
import burch from '../components/assets/burch.jpg';
import photo from '../components/assets/photo.JPG';

function About() {
  return (
    <div>
      <style>{`
        .about-container {
          text-align: center;
          padding: 20px;
        }

        .about-item {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 40px 0;
          background-color: #C4A484;
          border-radius: 10px;
          padding: 20px;
        }

        .about-item:nth-child(even) {
          flex-direction: row-reverse;
        }

        .about-image {
          width: 300px; 
          height: auto;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgb(196, 164, 132);
          margin: 0 20px;
        }

        .about-description {
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 10px;
          background-color: #fff;
          box-shadow: 0 4px 8px rgb(196, 164, 132);
          width: 250px;
        }

        .about-description p {
          margin: 0;
        }
      `}</style>
      <div className="about-container">
        <div className="about-item">
          <img src={photo} alt="See this photo" className="about-image" />
          <div className="about-description">
            <p>Timur Puzo, a 20-year-old IT student in Sarajevo, is currently studying at IBU.
               Passionate about technology, he dedicates himself to his studies, eager to expand his knowledge and skills in the field. 
              Living in the lively city of Sarajevo, Timur finds inspiration in its rich history and cultural diversity.</p>
          </div>
        </div>
        <div className="about-item">
          <img src={burch} alt="Burch" className="about-image" />
          <div className="about-description">
            <p>
            International Burch University (IBU) in Sarajevo offers diverse programs, fostering global perspectives. 
            With cutting-edge facilities and expert faculty, IBU empowers students to excel academically and engage in extracurricular activities. 
            It's a vibrant community shaping future leaders and innovators.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
