import React from 'react';
import AuthResetForm from '../../components/AuthResetForm';
import NavBar from '../../components/NavBar';
import AuthImg from '../../Assets/authentication.svg';
import './AuthResetPassword.css';

const AuthResetPassword = () => {
  return (
    <div className="auth-reset-container">
      <NavBar nameOfClass="hide" />
      <div className="img-form">
        <img src={AuthImg} alt="authentication" />
        <AuthResetForm />
      </div>
    </div>
  );
};

export default AuthResetPassword;
