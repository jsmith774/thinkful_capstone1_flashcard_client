import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Hyph } from '../Utils/Utils';
import TokenService from '../../services/token-service';
import './Header.css';

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    window.localStorage.removeItem('userRole');
  };

  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <Link to="/login">Log in</Link>
      </div>
    );
  }

  render() {
    return (
      <nav className="Header">
        <h1>CyberCard</h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    );
  }
}
