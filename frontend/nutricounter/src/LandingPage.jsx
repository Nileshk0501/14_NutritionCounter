// LandingPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';  // Import the CSS file for styling

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Our Food Analyzer</h1>
      <p>Discover the nutritional value of packaged foods with a simple image upload.</p>
      <div className="cta-button">
        <Link to="/app">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
