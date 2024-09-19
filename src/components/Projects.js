import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css'; 


console.log('Projects component rendered');

const Projects = ({ imageSrc, altText, title, specify, description, LinkTo}) => {
  return (
    <Link to={LinkTo} className="projects"> 
      <div className="box image-box">
        <img src={imageSrc} alt={altText} />
      </div>
      <div className="box text-box">
        <div>
          <div className='specify'>
            <p className='specify-text'>{specify}</p>
          </div>
          <h3>{title}</h3>
        </div>
        <div>
          <p className='project-description'>{description}</p>
        </div>
      </div>
    </Link>


  );
}

export default Projects;