// components/Common/Hero.js
import React from 'react';
import './Heros.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>This is my portfolio</h1>
        <p>Welcome to my portfolio</p>
        <a href="#about" className="hero-button">Learn More</a>
      </div>
    </div>
  );
}

export default Hero;
