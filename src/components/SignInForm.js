import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ActionButton from '../components/ActionButton';
import '../Styles/SignInForm.css';

class SignInForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form>
        <h3>Sign in to Politico</h3>
        <input
          type="text"
          name="email"
          value={this.state.email}
          placeholder="Email"
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          placeholder="Password"
          onChange={this.handleChange}
        />
        <ActionButton nameOfClass="sign-in button" text="Sign in" />
        <Link to="/auth-reset-password">
          <p>Forgot Password?</p>
        </Link>
      </form>
    );
  }
}

export default SignInForm;
