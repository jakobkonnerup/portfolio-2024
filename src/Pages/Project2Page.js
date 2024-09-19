import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import './ProjectPage.css'
import { Link } from 'react-router-dom';

function Project2() {
  return (
    <div>
      <Navbar />
      <section className="project-section">
      <h4>Digital Synlighed Tøjkrogen</h4>
        <h2>UI/UX Design, Story Telling, Javascript, User Research</h2>
        
        <div className="project-image">
          <img src="./Assets/project2-pic1.png" alt="Mockups" />
        </div>

        <div className="describe-container">
          {['Web Design', 'Informations Arkitektur', 'Story Telling', 'User Research', 'Immersive', 'Mock Ups'].map((item, index) => (
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
                  <li>Frontend Developer</li>
                  <li>Rapportskrivning</li>
                </ul>
            </div>
            <div className='roles'>
                <h6>PROJEKT</h6>
                <ul>
                  <li>Digitil positionering</li>
                  <li>Gruppe Eksamen</li>
                  <li>Reel virksomhed</li>
                  <li>Website</li>
                </ul>
          </div>
            <div className='roles'>
            <h6>TEAM</h6>
                <ul>
                  <li>Team of 4</li>
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
        <h3>AFGRÆNSING</h3>
          <p>Dette projekt undersøger secondhand tøj med fokus på Tøjkrogen i Århus C, en ny butik åbnet i maj 2023. Tøjkrogen håndplukker deres varer for at sikre høj kvalitet og et spændende udvalg. Butikken tilbyder også et fællesskab med bar og lounge-område. I øjeblikket bruger de kun Instagram, hvilket medfører begrænsninger. Derfor er det yderst relevant at udvikle deres visuelle identitet og digitale platform. Projektet fokuserer på at skabe Tøjkrogens digitale univers.</p>
        </div>
        <div className='projekt-uddybelse'>
          <p>Hvordan kan Tøjkrogen styrke sit brand og øge sin digitale tilstedeværelse gennem en sammenhængende visuel identitet og historie? <br></br>
          <br></br>

Hvordan kan vi skabe en digital platform, der engagerer og tiltrækker Tøjkrogens specifikke målgruppe?
<br></br>
Hvordan kan Tøjkrogen skabe en gennemgående visuel identitet, som kommer til udtryk på deres nye digitale platform og samtidig  skaber en intuitiv brugeroplevelse?
<br></br>
Hvilke features kan understøtte et troværdigt digitalt univers som samtidig er loyalt overfor Tøjkrogens brand?
</p>
        </div>
        <div className="project-image2">
          <img src="./Assets/project2-pic2.png" alt="Mockups" />
        </div>
        <div className='design-container'>
          <div className='design-headline'>
          <h5>EVENTS</h5>
          <h5>NYHEDSBREV</h5>
          <h5>VITALITET</h5>
          </div>
        <div className='design-images'>
            <img src="./Assets/project2-pic3.png" alt="Mockups" />
            </div>
          <div className='design-images2'>
            <img src="./Assets/project2-pic4.png" alt="Mockups" />
            <img src="./Assets/project2-pic5.png" alt="Mockups" />
          </div>
          </div>
          <div className="project-image3">
          <img src="./Assets/project2-pic6.png" alt="Mockups" />
        </div>
          
          
          <div className='closer-container'>
            <div className='closer1'>
              <h5>REFLEKSION OVER PROJEKTET</h5>
              <Link to="/project3"> <button className='next-project'>NÆSTE PROJEKT</button>
              </Link>
            </div>
            
            <div className='closer2'>
              <p>
              Vores indsats har været centreret omkring udviklingen af en gennemgående visuel identitet, der skaber en atmosfære af fællesskab, varme og nostalgi, der afspejler Tøjkrogen, men også sikrer en intuitiv brugeroplevelse. Dette er blevet opnået gennem en række designelementer, bl.a. logo, farvevalg, typografi og layout. Samtidig har vi implementeret indhold og  funktioner på vores website, der styrker Tøjkrogens troværdighed online, mens dette er loyalt overfor virksomhedens brand.
                <br></br>
                Samlet set mener vi, at vores arbejde effektivt adresserer de identificerede problemstillinger og skaber et website, der ikke kun er troværdigt og engagerende, men også dybt forbundet med Tøjkrogens brand og værdier. Dette vil styrke Tøjkrogens brand og markant øge virksomhedens digitale tilstedeværelse, hvilket vil bidrage til en positiv udvikling af virksomheden.
              </p>
            </div>
            </div>

        
        
      </section>
    </div>
  );
}

export default Project2;