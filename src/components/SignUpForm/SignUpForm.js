import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ActionButton from '../ActionButton';
import './SignUpForm.css';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      telephone: '',
      address: '',
      password: '',
      confirmPassword: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form>
        <h3>Create an account </h3>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
          placeholder="First Name"
        />

        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
          placeholder="Last Name"
        />

        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Email"
        />

        <input
          type="telephone"
          name="telephone"
          value={this.state.telephone}
          onChange={this.handleChange}
          placeholder="Telephone"
        />

        <input
          type="text"
          name="address"
          value={this.state.address}
          onChange={this.handleChange}
          placeholder="Address"
        />

        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="Password"
        />

        <input
          type="password"
          name="confirmPassword"
          value={this.state.confirmPassword}
          onChange={this.handleChange}
          placeholder="Confirm Password"
        />
        <br />
        <Link to="/view-parties">
          <ActionButton nameOfClass="signup button" text="Create account" />
        </Link>

        <Link to="/signin">
          <p>Sign in instead</p>
        </Link>
      </form>
    );
  }
}

export default SignUp;
