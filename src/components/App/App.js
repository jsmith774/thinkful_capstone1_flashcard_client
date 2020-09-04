import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';

import LandingPage from '../../routes/LandingPage/LandingPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import EducatorDashboard from '../../routes/EducatorDashboard/EducatorDashboard';
import StudentDashboard from '../../routes/StudentDashboard/StudentDashboard';
import Assessment from '../../routes/Assessment/Assessment';

import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';

import PrivateRoute from '../Utils/PrivateRoute';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';

import './App.css';

class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    return (
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
            <PrivateRoute path={'/assessment/:deckId'} component={Assessment} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
