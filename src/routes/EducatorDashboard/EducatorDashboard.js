import React, { Component } from 'react';
import { Section } from '../../components/Utils/Utils';
import Header from '../../components/Header/Header';
import ItemList from '../../components/ItemList/ItemList';
import './EducatorDashboard.css';

export default class EducatorDashboard extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  state = {
    cardList: [
      { id: 1, name: 'Card1' },
      { id: 2, name: 'Card2' },
      { id: 3, name: 'Card3' },
      { id: 4, name: 'Card4' },
      { id: 5, name: 'Card5' },
      { id: 6, name: 'Card6' },
      { id: 7, name: 'Card7' },
      { id: 8, name: 'Card8' },
      { id: 9, name: 'Card9' },
    ],
    deckList: [
      { id: 1, name: 'Deck1' },
      { id: 2, name: 'Deck2' },
      { id: 3, name: 'Deck3' },
    ],
  };

  render() {
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
        <h2>EDUCATOR DASHBOARD CONTENT GOES HERE</h2>
        <Section className="EducatorDashboard">
          <Section className="EducatorDashboard__section">
            <ItemList
              name="Manage Flashcards"
              items={this.state.cardList}
              id="flashcards"
            />
          </Section>
          <Section className="EducatorDashboard__section">
            <ItemList
              name="Manage Card Decks"
              items={this.state.deckList}
              id="decks"
            />
          </Section>
        </Section>
      </Section>
    );
  }
}
