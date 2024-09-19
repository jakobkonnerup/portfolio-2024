import React from 'react';
import './programmer.css'; 

const Programmer = ({ imageUrl, text }) => {
    return (
      <div className="rectangle-box">
        <div className="image-container">
          <img src={imageUrl} alt="Image" />
        </div>
        <div className="text-container">
        <h4>{text}</h4>
      </div>
        
        <div className="arrow-container">
          <span className="arrow"></span>
        </div>
      </div>
    );
  }
  
  export default Programmer;