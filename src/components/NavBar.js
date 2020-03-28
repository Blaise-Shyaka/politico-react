import React from 'react';
import { Link } from 'react-router-dom';
import ActionButton from './ActionButton';
import '../Styles/NavBar.css';

function NavBar() {
  return (
    <div className="nav">
      <div className="nav-container">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h2 className="logo">Politico</h2>
        </Link>
        <Link to="/signup">
          <ActionButton nameOfClass="sign-up button" text="Sign Up" />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
