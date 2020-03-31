import React from 'react';
import NavBar from '../../components/NavBar';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import signUpIllustration from '../../Assets/signUpIllustration.svg';
import './signUp.css';

const SignUp = () => {
  return (
    <div>
      <NavBar nameOfClass="hide" />
      <div className="signup-container">
        <div className="signup-description">
          <h3>Make your voice heard during elections</h3>
          <img src={signUpIllustration} alt="sign up illustration" />
        </div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
