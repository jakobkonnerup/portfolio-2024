import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Kontaktmig from './components/kontaktmig';
import AnimatedShape from './components/AnimatedShape';
import Socials from './components/socials';
import Projects from './components/Projects';
import Imageslider from './components/imageslider';
import Ommig from './components/ommig';
import Programmer from './components/programmer';


function App() {
  const slides = [
    { imageSrc: '/Assets/advert-slider.png' },
    { imageSrc: '/Assets/plakat1-slider.png' },
    { imageSrc: '/Assets/ol-mockup-slider.png' },
    { imageSrc: '/Assets/tojkrogen-slider.png' },
    { imageSrc: '/Assets/nabolit-slider.png' },
    { imageSrc: '/Assets/advert-slider.png' },
    { imageSrc: '/Assets/plakat1-slider.png' },
    { imageSrc: '/Assets/ol-mockup-slider.png' },
    { imageSrc: '/Assets/tojkrogen-slider.png' },
    { imageSrc: '/Assets/nabolit-slider.png' },
  ];

  return (
    <div className='App'>
      <Navbar />
      <main>
        <AnimatedShape />
        <h1>FRONTEND <br /> & DESIGN</h1>
        <div className='under-hero'>
          <Kontaktmig />
          <div className='velkommen'>
            <p>
              Velkommen til. Jeg hedder Jakob - Jeg elsker at designe web og mobil apps, der er brugervenlige, tilpasset en målgruppe og effektive. Tilfredstillelsen i at konvertere dem til et reelt digitalt produkt vægter jeg også højt! Jeg bor i øjeblikket i Aarhus C.
            </p>
          </div>
          <Socials />
        </div>

        <span>
          <p className='text-project'>&lt;projekter&gt;</p>
        </span>

              <Projects 
                imageSrc="/Assets/nipponproject.png" 
                altText="Project 1 description" 
                specify="Grafisk Desing, UI/UX, Javascript"
                title="JAPANSKE MÅLTIDSKASSER" 
                description="Vores mål var at skabe en digital platform, der forener traditionel japansk æstetik med moderne designprincipper og teknologi for at levere en brugercentreret oplevelse, som appellerer bredt til vores mangfoldige målgruppe. Med omhyggelig planlægning, kreativitet og samarbejde søgte vi at forme en platform, der ikke blot inspirerer, men også fungerer som et praktisk redskab til at udforske og nyde den rige verden af japansk madkultur."
                LinkTo="/project1" 
              />
              <Projects 
                imageSrc="/Assets/tojkrognyhed.png" 
                altText="Project 2 description"
                specify="UI/UX, Javascript, Gruppearbejde" 
                title="DIGITAL SYNLIGHED TØJKROGEN" 
                description="Dette projekt undersøger secondhand tøj med fokus på Tøjkrogen i Århus C, en ny butik åbnet i maj 2023. Tøjkrogen håndplukker deres varer for at sikre høj kvalitet og et spændende udvalg. De brugte kun Instagram, hvilket medfører begrænsninger. Derfor har arbejde med denne virksomhed været at udvikle deres visuelle identitet og digitale platform. Projektet fokuserer på at skabe Tøjkrogens digitale univers."
                LinkTo="/project2"
              />
              <Projects 
                imageSrc="/Assets/nabolit-project.png" 
                altText="Project 3 description" 
                title="MEDSTIFTER AF NABOLITTERATUR" 
                specify="Grafisk Desing, UI/UX, Javascript"
                description="Jeg er medstifter af en frivillig organisation, der planlægger, afvikler og reklamerer for literære arrengementer. Jobbet handler i høj grad om at kunne tage nogle hurtige og velovervejede valg, der medfører at arrangementerne bliver til en realitet."
                LinkTo="/project3" 
              />
              <Projects 
                imageSrc="/Assets/trojborg-project.png" 
                altText="Project 4 description" 
                title="LANCERING AF TRØJBORG BRYGHUS" 
                specify="Product Design, Mobile First, UX/UI"
                description="Mit projekt om Trøjborg Bryghus er et nyt og fiktivt bryghus, der er lanceret online med fokus på miljøvenlig og bæredygtig produktion af øl. Jeg har anvendt en mobile-first tilgang i udviklingen, hvilket sikrer optimal tilgængelighed på alle enheder. Gennem omfattende produkt design, brugerundersøgelser og UI/UX design har jeg skabt en brugeroplevelse, der fremmer interaktion og tilfredsstillelse for alle ølentusiaster."
                LinkTo="/project4"
              />
              <Projects 
                imageSrc="/Assets/sks-project.png" 
                altText="PROJECT 5 DESPCRIPTION" 
                title="UDARBEJDET SEO FOR SKS" 
                specify="SEO, Kundehåndtering, selvstændig"
                description="Jeg arbejdede med SEO for Skrivekunstskolen, hvor jeg havde ansvaret for både planlægning, implementering og kundehåndtering. Mit arbejde omfattede udarbejdelse af en strategi for at forbedre synligheden på søgemaskiner, herunder søgeordsanalyse, optimering af webindhold og tekniske SEO-tiltag."
                LinkTo="/project5" 
              />


        <p className='text-project'>&lt;/projekter&gt;</p>
        <p className='text-caroussel'>&lt;caroussel&gt;</p>
        <Imageslider slides={slides} />
        <p className='text-caroussel'>&lt;/caroussel&gt;</p>
        <p id='ommig' className='text-ommig'>&lt;omMig&gt;</p>
        <Ommig />
        <p className='text-ommig'>&lt;/omMig&gt;</p>

        <p className='text-programmer'>&lt;programmer&gt;</p>
        <div className="rectangle-boxes1">
          <Programmer imageUrl="/Assets/Figma.png" text="Figma" />
          <Programmer imageUrl="/Assets/CSS.png" text="CSS3" />
          <Programmer imageUrl="/Assets/javascript.png" text="JavaScript" />
        </div>
        <div className='rectangle-boxes2'>
          <Programmer imageUrl="/Assets/react.png" text="React.js" />
          <Programmer imageUrl="/Assets/photshop.png" text="Photoshop" />
          <Programmer imageUrl="/Assets/html.png" text="HTML5" />
        </div>
        <p className='text-programmer'>&lt;/programmer&gt;</p>
      </main>
    </div>
  );
}

export default App;