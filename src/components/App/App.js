import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';

import LandingPage from '../../routes/LandingPage/LandingPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import EducatorDashboard from '../../routes/EducatorDashboard/EducatorDashboard';
import StudentDashboard from '../../routes/StudentDashboard/StudentDashboard';
import Assessment from '../../routes/Assessment/Assessment';
import AddDeckPage from '../../routes/AddDeckPage/AddDeckPage';

import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';

import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';

import './App.css';
import AppContext from '../../contexts/AppContext';

class App extends Component {
  state = { hasError: false };

  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  /**
   * CONTEXT CALLBACKS
   */
  setCards = (cards) => {
    console.log('setting state- cards:', cards);
    return this.setState({ cards });
  };

  setDecks = (decks) => {
    this.setDecks({ decks });
  };

  setError = (error) => {
    console.error(error);
    return this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  handleLogin = () => {
    this.setState({ loginStatus: { status: 'LoggedIn' } });
  };

  handleLogout = () => {
    this.setState({ loginStatus: { status: 'Logged Oout' } });
  };

  handleDeckAdded = () => {
    const { history } = this.props;
    history.push('/educator-dashboard');
  };

  render() {
    const value = {
      cards: this.state.cards,
      decks: this.state.decks,
      setCards: this.setCards,
      setDecks: this.setDecks,
      setError: this.setError,
      clearError: this.clearError,
      handleLogin: this.handleLogin,
      handleLogout: this.handleLogout,
    };
    return (
      <AppContext.Provider value={value}>
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          <main className="App-main">
            {this.state.hasError && (
              <p className="red">There was an error! Oh no!</p>
            )}
            <Switch>
              <Route exact path={'/'} component={LandingPage} />
              <PublicOnlyRoute path={'/login'} component={LoginPage} />
              <PrivateRoute
                path={'/educator-dashboard'}
                component={EducatorDashboard}
              />
              <PrivateRoute
                path={'/student-dashboard'}
                component={StudentDashboard}
              />
              <PrivateRoute
                path={'/assessment/:deckId/:deckName'}
                component={Assessment}
              />
              <PrivateRoute path={'/add-deck'} component={AddDeckPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </main>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
