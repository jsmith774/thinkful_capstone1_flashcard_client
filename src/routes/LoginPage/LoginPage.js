import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import { Section } from '../../components/Utils/Utils';

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    let destination = (location.state || {}).from || '/';
    const userRole = window.localStorage.getItem('userRole');
    if (userRole === 'Educator') {
      destination = '/educator-dashboard';
    }
    if (userRole === 'Student') {
      destination = '/student-dashboard';
    }

    history.push(destination);
  };

  render() {
    return (
      <Section className="LoginPage">
        <h2>Login</h2>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </Section>
    );
  }
}
