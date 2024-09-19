import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import './ProjectPage.css'
import { Link } from 'react-router-dom';

function Project4() {
  return (
    <div>
      <Navbar />
      <section className="project-section">
        <h4>Trøjborg Bryghus</h4>
        <h2>UI/UX Design, Product Design, Programmering, Mobile First</h2>
        
        <div className="project-image">
          <img src="./Assets/project4-pic1.png" alt="Mockups" />
        </div>

        <div className="describe-container">
          {['Web Design', 'Mobile First', 'Product Design', 'User Research', 'Kampagner', 'Mock Ups'].map((item, index) => (
            <div className="describe" key={index}>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className='roles-container'>
          <div className='roles'>
                <h6>MIN ROLLE</h6>
                <ul>
                  <li>UX Designer</li>
                  <li>User Reasearch</li>
                  <li>Project Manager</li>
                  <li>Prduct Design</li>
                  <li>Programmør</li>
                </ul>
            </div>
            <div className='roles'>
                <h6>PROJEKT</h6>
                <ul>
                  <li>Fiktivt Bryggeri</li>
                  <li>Individuel Eksamen</li>
                  <li>Kampagne</li>
                  <li>Website</li>
                </ul>
          </div>
            <div className='roles'>
            <h6>TEAM</h6>
                <ul>
                  <li>Individuelt Projekt</li>
                </ul>
            </div>
            <div className='roles'>
                <h6>ÅRSTAL</h6>
                <ul>
                  <li>2023</li>
                </ul>
            </div>
        </div>
        <div className='projekt-beskrivelse'>
        <h3>AFGRÆNSING</h3>
          <p>I mødet med Trøjborg Bryghus springer et levende og unikt bryggerikoncept i øjnene. Med en passion for at skabe alkoholfrie og bæredygtige øl har Trøjborg Bryghus formet en atmosfære, der går ud over den traditionelle øloplevelse. Dette bryggeri har skabt et nyt kapitel inden for bryggeriverdenen, hvor hver bryg ikke blot er en drik, men en fortælling om innovation, sundhed og fællesskab. Trøjborg Bryghus - for en grønnere og mere ansvarlig ølkultur.</p>
        </div>
        <div className='projekt-uddybelse'>
          <p>Mission: <br></br>
Trøjborg Bryghus: At producere og markedsføre sundere, velsmagende lokal
kvalitetsøl, som er bæredygtige uden kompromis. <br></br> <br></br>
Vision: <br></br>
Trøjborg Bryghus stræber efter at være det førende bryghus inden for alkoholfrie og bæredygtige øl. Vi vil ikke kun være defineret af vores unikke smagsoplevelser, men også som bannerfører for en grønnere og mere ansvarlig ølkultur.</p>
        </div>
        <div className="project-image2">
          <img src="./Assets/project4-pic2.png" alt="Mockups" />
        </div>
        <div className='design-container'>
          <div className='design-headline'>
          <h5>MOODBOARD</h5>
          <h5>PERSONA</h5>
          <h5>STYLE TILE</h5>
          </div>
        <div className='design-images'>
            <img src="./Assets/project4-pic3.png" alt="Mockups" />
            </div>
          <div className='design-images2'>
            <img src="./Assets/project4-pic4.png" alt="Mockups" />
            <img src="./Assets/project4-pic5.png" alt="Mockups" />
          </div>
          </div>
          <div className="project-image3">
          <img src="./Assets/project4-pic6.png" alt="Mockups" />
        </div>
          
          
          <div className='closer-container'>
            <div className='closer1'>
              <h5>REFLEKSION OVER PROJEKTET</h5>
              <Link to="/project5"> <button className='next-project'>NÆSTE PROJEKT</button>
              </Link>
              
            </div>
            
            <div className='closer2'>
              <p>I min arbejdsproces er det gået op for mig, hvor vigtigt det er at planlægge sin tid. Jeg har en tendens til at gå ud ad en tangent, især når jeg begynder at designe, så en tidsplan har hjulpet mig rigtig meget. Jeg kunne godt have været bedre til at strukturere min tid. 
Jeg er endt ud med en hjemmeside, som er informativ, overbevisende og tiltalende. Navigationen kunne godt være bedre. Det føles ikke helt naturligt, hvor man skal gå hen og i hvilken rækkefølge. 

Hjemmesiden passer godt til min persona Martin, der vil have informationer om bryggeriet, sundhed, bæredygtighed og interessante øloplevelser.
Jeg har lavet to kampagner, som jeg mener passer godt til Martins behov for at leve bæredygtigt og sundt. Jeg fik placeret min persona centralt i de valg jeg lavede undervejs, men jeg havde problemer med at få valgt de vigtigste hovedpunkter, som mit projekt skulle dreje sig om.
              </p>
            </div>
            </div>

        
        
      </section>
    </div>
  );
}

export default Project4;