import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActionButton from './ActionButton';

const ResetForm = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const fetchPassword = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const fetchConfirmPassword = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);
  };

  return (
    <form>
      <h3>Create password</h3>
      <input
        type="text"
        name="password"
        value={password}
        placeholder="Password"
        onChange={fetchPassword}
      />

      <input
        type="text"
        name="confirmPassword"
        value={confirmPassword}
        placeholder="Confirm Password"
        onChange={fetchConfirmPassword}
      />

      <Link to="">
        <ActionButton nameOfClass="submit button" text="Submit" />
      </Link>
    </form>
  );
};

export default ResetForm;
