import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Header.css';
import AppContext from '../../contexts/AppContext';

export default class Header extends Component {
  static contextType = AppContext;

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    window.localStorage.removeItem('userRole');
    window.localStorage.removeItem('userId');
    this.context.handleLogout();
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
