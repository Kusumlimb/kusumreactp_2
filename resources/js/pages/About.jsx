import React from 'react';
import './Abouts.css';
import HomeLayout from '../layouts/HomeLayout';

const About = () => {
    return (
        <HomeLayout>
        
        <div className="about-container">
      <h1>About Me</h1>
      <p>Information about yourself.</p>
    </div>
        </HomeLayout>
    );
};

export default About;
