import React, { Component } from 'react';
//import EducatorContext from '../../contexts/EducatorContext';
import AppContext from '../../contexts/AppContext';
import ApiService from '../../services/api-service';
import { Section } from '../../components/Utils/Utils';
import ItemList from '../../components/ItemList/ItemList';
import './EducatorDashboard.css';

export default class EducatorDashboard extends Component {
  static contextType = AppContext;

  state = {
    cardList: [],
    //   cardList: [
    //     // { id: 1, name: 'Card1' },
    //     // { id: 2, name: 'Card2' },
    //     // { id: 3, name: 'Card3' },
    //     // { id: 4, name: 'Card4' },
    //     // { id: 5, name: 'Card5' },
    //     // { id: 6, name: 'Card6' },
    //     // { id: 7, name: 'Card7' },
    //     // { id: 8, name: 'Card8' },
    //     // { id: 9, name: 'Card9' },
    //   ],
    deckList: [
      { id: 1, name: 'Deck1', sampleProp: 'D1_sample' },
      { id: 2, name: 'Deck2', sampleProp: 'D2_sample' },
      { id: 3, name: 'Deck3', sampleProp: 'D3_sample' },
    ],
  };

  componentDidMount() {
    //this.context.clearError();

    console.log('in EdDash.componentDidMount()');
    let cards = [];
    ApiService.getCards()
      .then((dbCards) => {
        cards = dbCards;
        console.log('cards after API service getCards call:', cards);
        this.setState({ cardList: cards });
      })
      .catch(this.context.setError);

    // ApiService.getCards()
    //   .then(this.context.setCards)
    //   .catch(this.context.setError);
  }

  render() {
    //const { cards, decks } = this.context;
    const cards = this.state.cardList;
    const decks = this.state.deckList;
    console.log('Context CARDS:', cards);
    console.log('Context DECKS:', decks);

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
              displayProp={'card_prompt'}
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
