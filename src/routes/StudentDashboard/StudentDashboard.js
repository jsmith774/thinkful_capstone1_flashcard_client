import React, { Component } from 'react';
import { Section } from '../../components/Utils/Utils';
import Header from '../../components/Header/Header';

export default class StudentDashboard extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  render() {
    return (
      <Section className="StudentDashboard">
        {/* begin temp block to remove */}
        <hr />
        <h1>
          TEMP: todo: Remove - get actual header to rerender with 'Logout' when
          logged in
        </h1>
        <header className="App-header">
          <Header />
        </header>
        <hr />
        {/*end temp block*/}
        <h2>STUDENT DASHBOARD CONTENT GOES HERE</h2>
      </Section>
    );
  }
}
