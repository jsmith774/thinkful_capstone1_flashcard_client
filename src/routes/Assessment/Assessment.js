import React, { Component } from 'react';
import { Section } from '../../components/Utils/Utils';

export default class Assessment extends Component {
  render() {
    const deckId = this.props.match.params.deckId;
    //todo verify logged in user has access to this deck
    //todo load cards for deck
    return (
      <Section>
        {/* begin temp block to remove ***************
        <hr />
        <h1>
          TEMP: todo: Remove - get actual header to rerender with 'Logout' when
          logged in
        </h1>
        <header className="App-header">
          <Header />
        </header>
        <hr />
        **************** end temp block*/}
        <h2>Assessment</h2> {/* todo add Deck name to title? */}
        <Section className="Assessment">
          <div>
            <p>This is the way we assess</p>
            <p>we assess</p>
            <p>This is the way we assess</p>
            <hr />
            <p>This is the way we assess</p>
            <p>we assess</p>
            <p>This is the way we assess</p>
            <h2>DECK ID: {deckId}</h2>
          </div>
        </Section>
      </Section>
    );
  }
}
