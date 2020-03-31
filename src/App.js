import React from 'react';
import './App.css';
import Home from './pages/Home';
import SignUp from './pages/signUp/SignUp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthResetPassword from './pages/AuthReset/AuthResetPassword';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth-reset-password" component={AuthResetPassword} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
