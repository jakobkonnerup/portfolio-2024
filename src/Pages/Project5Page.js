import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import './ProjectPage.css'
import { Link } from 'react-router-dom';

function Project5() {
  return (
    <div>
      <Navbar />
      <section className="project-section">
        <h4>SEO Skrivekunstskolen</h4>
        <h2>SEO, Kundehåndtering, Selvstændig</h2>
        
        <div className="project-image">
          <img src="./Assets/project5-pic1.png" alt="Mockups" />
        </div>

        <div className="describe-container">
          {['Content', 'Redsign', 'SEO', 'Keywords', 'Kundehåndtring', 'Selvstændig'].map((item, index) => (
            <div className="describe" key={index}>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className='roles-container'>
          <div className='roles'>
                <h6>MIN ROLLE</h6>
                <ul>
                  <li>Content</li>
                  <li>SEO</li>
                  <li>Kundehåndtering</li>
                </ul>
            </div>
            <div className='roles'>
                <h6>PROJEKT</h6>
                <ul>
                  <li>Arbejde med SKS</li>
                  <li>Organisk Placering</li>
                  <li>SEO</li>
                  <li>Google</li>
                </ul>
          </div>
            <div className='roles'>
            <h6>TEAM</h6>
                <ul>
                  <li>Individuelt</li>
                </ul>
            </div>
            <div className='roles'>
                <h6>ÅRSTAL</h6>
                <ul>
                  <li>2024</li>
                </ul>
            </div>
        </div>
        <div className='projekt-beskrivelse'>
        <h3>SELVSTÆNDIG</h3>
          <p>Jeg arbejdede med SEO for Skrivekunstskolen, hvor jeg havde ansvaret for både planlægning, implementering og kundehåndtering. Mit arbejde omfattede udarbejdelse af en strategi for at forbedre synligheden på søgemaskiner, herunder søgeordsanalyse, optimering af webindhold og tekniske SEO-tiltag. Jeg sikrede løbende implementering af anbefalinger og arbejdede tæt sammen med kunden for at forstå deres mål og behov. </p>
        </div>
        <div className="project-image2">
          <img src="./Assets/project5-pic2.png" alt="Mockups" />
        </div>
        <div className='closer1'>
              <Link to="/project1"> <button className='next-project'>NÆSTE PROJEKT</button>
              </Link>
              
            </div>
      </section>
    </div>
  );
}

export default Project5;