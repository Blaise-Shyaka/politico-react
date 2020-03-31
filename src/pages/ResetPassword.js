import React from 'react';
import ResetForm from '../components/ResetForm';
import NavBar from '../components/NavBar';
import AuthImg from '../Assets/authentication.svg';

const ResetPassword = () => {
  return (
    <div className="reset-container">
      <NavBar nameOfClass="hide" />
      <div className="img-form">
        <img src={AuthImg} alt="Password input" />
        <ResetForm />
      </div>
    </div>
  );
};

export default ResetPassword;
