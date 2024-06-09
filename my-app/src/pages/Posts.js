import React, { useState } from "react";
import milano from '../components/assets/Milano Italy.jpg';
import turkey from '../components/assets/Turkey.jpg';
import pinkSunset from '../components/assets/Pink sunset.jpg';

function Posts() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openModal = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage('');
  };

  return (
    <div>
      <style>{`
        .posts-container {
          text-align: center;
          padding: 20px;
        }

        .images-row {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin: 20px 0;
        }

        .post-image {
          width: 250px;
          height: auto;
          cursor: pointer;
          border-radius: 10px;
          transition: transform 0.2s;
        }

        .post-image:hover {
          transform: scale(1.05);
        }

        .modal {
          display: ${isOpen ? 'block' : 'none'};
          position: fixed;
          z-index: 1000;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgba(0, 0, 0, 0.8);
          align-items: center;
          justify-content: center;
        }

        .modal-content {
          position: relative;
          margin: auto;
          padding: 20px;
          width: 60%;
          max-width: 500px;
        }

        .modal-image {
          width: 100%;
          height: auto;
          border-radius: 10px;
        }

        .close {
          position: absolute;
          top: 10px;
          right: 25px;
          color: #fff;
          font-size: 35px;
          font-weight: bold;
          cursor: pointer;
        }

        .close:hover,
        .close:focus {
          color: #bbb;
          text-decoration: none;
          cursor: pointer;
        }
      `}</style>

      <div className="posts-container">
        <h2>My Posts</h2>
        <div className="images-row">
          <img src={milano} alt="Milano Italy" className="post-image" onClick={() => openModal(milano)} />
          <img src={turkey} alt="Turkey" className="post-image" onClick={() => openModal(turkey)} />
          <img src={pinkSunset} alt="Pink sunset" className="post-image" onClick={() => openModal(pinkSunset)} />
        </div>
      </div>

      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>&times;</span>
          <div className="modal-content">
            <img src={currentImage} alt="Enlarged view" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Posts;
