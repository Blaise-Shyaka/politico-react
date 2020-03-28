import React from 'react';
import NavBar from '../components/NavBar';
import SignInForm from '../components/SignInForm';
import heroImg from '../Assets/heroImg.svg';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import '../Styles/Home.css';

const Home = () => {
  return (
    <div className="gen-container">
      <NavBar />
      <div className="container">
        <div className="img-container">
          <img src={heroImg} alt="Hero" />
        </div>
        <div className="hero-form">
          <Hero />
          <SignInForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
