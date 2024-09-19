import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import './ProjectPage.css'
import { Link } from 'react-router-dom';

function Project3() {
  return (
    <div>
      <Navbar />
      <section className="project-section">
        <h4>Medstifter af NABOLITTERATUR</h4>
        <h2>Logo design, Planlængning, PR, Afvikling</h2>
        
        <div className="project-image">
          <img src="./Assets/project3-pic1.png" alt="Mockups" />
        </div>

        <div className="describe-container">
          {['Events', 'Frivillig', 'Grafisk Design', 'Projektledelse', 'Reklamering', 'Afvikling'].map((item, index) => (
            <div className="describe" key={index}>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className='roles-container'>
          <div className='roles'>
                <h6>MIN ROLLE</h6>
                <ul>
                  <li>Event</li>
                  <li>Frivillig</li>
                  <li>Planlægning</li>
                  <li>Grafisk design</li>
                  <li>Afvikling</li>
                </ul>
            </div>
            <div className='roles'>
                <h6>PROJEKT</h6>
                <ul>
                  <li>Frivillig organisation</li>
                  <li>Litteraturfestival</li>
                  <li>PR</li>
                  <li>EVENT</li>
                </ul>
          </div>
            <div className='roles'>
            <h6>TEAM</h6>
                <ul>
                  <li>Organisation på 6</li>
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
        <h3>FRIVILLIG</h3>
          <p>Jeg er medstifter af en frivillig organisation, der planlægger, afvikler og reklamerer for literære arrengementer. Jobbet handler i høj grad om at kunne tage nogle hurtige og velovervejede valg, der medfører at arrangementerne bliver til en realitet.</p>
        </div>
        <div className='projekt-uddybelse'>
          <p>Viste stærke færdigheder i selvdisciplin og selvledelse. <br></br>
Samarbejdede godt med forskellige medlemmer i organisationen.<br></br>
Planlægge og prioritere arbejdsopgaver.</p>
        </div>
        <div className="project-image2">
          <img src="./Assets/project3-pic2.png" alt="Mockups" />
        </div>
        <div className='design-container'>
          <div className='design-headline'>
          <h5>KONTAKT</h5>
          <h5>EVENTS</h5>
          <h5>VISUEL IDENTITET</h5>
          </div>
        <div className='design-images'>
            <img src="./Assets/project3-pic3.png" alt="Mockups" />
            </div>
          <div className='design-images2'>
            <img src="./Assets/project3-pic4.png" alt="Mockups" />
            <img src="./Assets/project3-pic5.png" alt="Mockups" />
          </div>
          </div>
          <div className="project-image3">
          <img src="./Assets/project3-pic6.png" alt="Mockups" />
        </div>
          
          
          <div className='closer-container'>
            <div className='closer1'>
              <h5>REFLEKSION OVER PROJEKTET</h5>
              <Link to="/project4"> <button className='next-project'>NÆSTE PROJEKT</button>
              </Link>
            </div>
            
            <div className='closer2'>
              <p>
At være en del af vores frivillige organisation har været en lærerig rejse. Gennem planlægningen og afviklingen af litteraturfestivalen har jeg haft mulighed for at udvikle mine færdigheder indenfor selvledelse. Det krævede hurtige og velovervejede beslutninger for at sikre, at arrangementerne forløb glat. Samarbejdet med forskellige medlemmer i organisationen har styrket min evne til at kommunikere effektivt og arbejde som et team. Jeg har også lært meget om at planlægge og prioritere opgaver, hvilket har været afgørende for festivalens succes.
              </p>
            </div>
            </div>

        
        
      </section>
    </div>
  );
}

export default Project3;