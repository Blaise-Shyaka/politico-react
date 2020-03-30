import React from 'react';
import { Link } from 'react-router-dom';
import ActionButton from './ActionButton';
import '../Styles/Hero.css';

const Hero = () => {
  return (
    <div className="description">
      <h1>Vote with elegance and transparency</h1>
      <p>
        Politico enables citizens to give their mandate to politicians running
        for different government offices while building trust in the process
        through transparency
      </p>
      <Link to="/signup">
        <ActionButton nameOfClass="get-started button" text="Get started!" />
      </Link>
      <div className="or">
        <hr />
        <span>Or</span>
        <hr />
      </div>
    </div>
  );
};

export default Hero;
