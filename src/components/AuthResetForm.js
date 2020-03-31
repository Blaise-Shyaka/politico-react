import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActionButton from './ActionButton';

const AuthResetForm = () => {
  const [email, setEmail] = useState('');

  const fetchEmailValue = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  return (
    <form>
      <h3>Reset password</h3>
      <p>
        Enter email address associated with your account, and we’ll email you a
        link to reset your password.
      </p>
      <input
        type="text"
        name="email"
        value={email}
        placeholder="Email"
        onChange={fetchEmailValue}
      />
      <Link to="/reset-password">
        <ActionButton nameOfClass="submit button" text="Submit" />
      </Link>
      <Link to="/signin">
        <p>Back to sign in</p>
      </Link>
    </form>
  );
};

export default AuthResetForm;
