import React from 'react';
import './imageslider.css';

function Imageslider({ slides }) {
  return (
    <div className="carousel">
      <div className="carousel-content">
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <img src={slide.imageSrc} alt={slide.altText} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Imageslider;


/*

import React, { useState, useEffect, useRef } from 'react';
import './imageslider.css';

function Imageslider({ slides, intervalTime = 4000 }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const carouselRef = useRef(null);

  // Add a duplicate of the slides to create a seamless loop
  const totalSlides = slides.length * 5; // We double the slides for continuous looping

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev === slides.length) {
          // We've reached the duplicated slides, snap back to the original slides
          setIsTransitioning(false); // Disable smooth transition for the jump
          return 0;
        } else {
          setIsTransitioning(true); // Enable smooth transition
          return prev + 1;
        }
      });
    }, intervalTime);

    return () => clearInterval(slideInterval);
  }, [slides.length, intervalTime]);

  useEffect(() => {
    if (!isTransitioning && currentSlide === 0) {
      // After snapping back, re-enable transitions after the first render
      const timer = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [currentSlide, isTransitioning]);

  return (
    <div className="carousel" ref={carouselRef}>
      <div
        className="carousel-content"
        style={{
          transform: `translateX(-${(currentSlide % slides.length) * 20}%)`,
          transition: isTransitioning ? 'transform 4s ease' : 'none', // Disable transition when snapping
        }}
      >
        {[...slides, ...slides].map((slide, index) => ( // Duplicate slides
          <div
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            key={index}
          >
            <img src={slide.imageSrc} alt={slide.altText} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Imageslider; */



