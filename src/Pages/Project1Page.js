import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import './ProjectPage.css'
import { Link } from 'react-router-dom';

function Project1() {
  return (
    <div>
      <Navbar />
      <section className="project-section">
        <h4>Japansk Måltidskasse-site for NIPPON</h4>
        <h2>UI/UX Design, Web Shop, Frontend, User Research</h2>
        
        <div className="project-image">
          <img src="./Assets/project1-pic1.png" alt="Mockups" />
        </div>

        <div className="describe-container">
          {['Web Design', 'Icon Design', 'Web Shop', 'User Research', 'User Flow', 'Mock Ups'].map((item, index) => (
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
                  <li>Informations Arkitektur</li>
                  <li>Frontend Developer</li>
                </ul>
            </div>
            <div className='roles'>
                <h6>PROJEKT</h6>
                <ul>
                  <li>Fiktiv Virksomhed</li>
                  <li>Gruppe Rapport</li>
                  <li>User Flow</li>
                  <li>Website</li>
                </ul>
          </div>
            <div className='roles'>
            <h6>TEAM</h6>
                <ul>
                  <li>Group of 4</li>
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
          <p>Vores mål er at skabe en digital platform, der forener traditionel japansk æstetik med moderne designprincipper og teknologi for at levere en brugercentreret oplevelse, som appellerer bredt til vores mangfoldige målgruppe. Med omhyggelig planlægning, kreativitet og samarbejde søger vi at forme en platform, der ikke blot inspirerer, men også fungerer som et praktisk redskab til at udforske og nyde den rige verden af japansk madkultur.</p>
        </div>
        <div className='projekt-uddybelse'>
          <p>Vi har valgt, at Nippon skal besidde værdier som fokus på sunde, velsmagende og bekvemme måltider direkte til kundernes døre, fordi det direkte adresserer vores problemstilling om at tilpasse måltidskasser til den rette målgruppe. Denne målgruppe ønsker ikke blot bekvemmelighed, men også sundhed, god smag og kulturelle kulinariske oplevelser i deres måltider.</p>
        </div>
        <div className="project-image2">
          <img src="./Assets/project1-pic2.png" alt="Mockups" />
        </div>
        <div className='design-container'>
          <div className='design-headline'>
          <h5>PERSONA</h5>
          <h5>STYLE TILE</h5>
          </div>
        <div className='design-images'>
            <img src="./Assets/project1-pic3.png" alt="Mockups" />
            </div>
          <div className='design-images2'>
            <img src="./Assets/project1-pic4.png" alt="Mockups" />
            <img src="./Assets/project1-pic5.png" alt="Mockups" />
          </div>
          </div>
          <div className="project-image3">
          <img src="./Assets/project1-pic6.png" alt="Mockups" />
        </div>
          
          
          <div className='closer-container'>
            <div className='closer1'>
              <h5>REFLEKSION OVER PROJEKTET</h5>
              <Link to="/project2"> <button className='next-project'>NÆSTE PROJEKT</button>
              </Link>
              
            </div>
            
            <div className='closer2'>
              <p>Nippon har betydelige muligheder for at forbedre deres user interface og tilpasse måltidskasser til målgruppen af travle unge voksne. Gennem en kombination af desk research, field research og markedsanalyse har vi kortlagt nøgleområder for forbedring. <br></br> <br></br>
Vi har identificeret, at den primære målgruppe er unge voksne, der prioriterer kvalitet, bæredygtighed og variation. Ved at tilpasse måltidskasserne i overensstemmelse hermed kan Nippon imødekomme målgruppens behov og præferencer.<br></br> <br></br>
Ved anvendelse af Design Thinking og segmenteringsmodeller som VPC og Conzoom har vi udviklet personas og userflows. Dette muliggør differentierede brugeroplevelser, herunder tilpasning af måltidskasser, abonnementsbestilling og adgang til opskrifter for øget fleksibilitet og personlig tilpasning.

              </p>
            </div>
            </div>

        
        
      </section>
    </div>
  );
}

export default Project1;
