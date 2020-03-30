import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return <p className="footer">&copy; Politico {year}</p>;
};

export default Footer;
