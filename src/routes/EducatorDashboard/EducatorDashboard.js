import React, { Component } from 'react';
//import EducatorContext from '../../contexts/EducatorContext';
import AppContext from '../../contexts/AppContext';
import ApiService from '../../services/api-service';
import { Section } from '../../components/Utils/Utils';
import ItemList from '../../components/ItemList/ItemList';
import './EducatorDashboard.css';

export default class EducatorDashboard extends Component {
  static contextType = AppContext;

  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

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
    deckList: [],
    //   { id: 1, name: 'Deck1', sampleProp: 'D1_sample' },
    //   { id: 2, name: 'Deck2', sampleProp: 'D2_sample' },
    //   { id: 3, name: 'Deck3', sampleProp: 'D3_sample' },
    // ],
  };

  //todo implement this for basic edit/delete funtionality? or keep 'do nothing' impl?
  onItemClick = (itemId) => {
    return;
  };

  handleAddDeckClick = () => {
    //todo load cards and start quiz
    const { history } = this.props;
    history.push(`/add-deck`);
  };

  componentDidMount() {
    //this.context.clearError();
    let cards = [];
    ApiService.getCards()
      .then((dbCards) => {
        cards = dbCards;
        this.setState({ cardList: cards });
      })
      .catch(this.context.setError);

    // ApiService.getCards()
    //   .then(this.context.setCards)
    //   .catch(this.context.setError);

    let decks = [];
    ApiService.getDecks()
      .then((dbDecks) => {
        decks = dbDecks;
        this.setState({ deckList: decks });
      })
      .catch(this.context.setError);
  }

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
        <h2>Educator Dashboard</h2>

        <Section className="EducatorDashboard">
          {/*
        todo LEAVE THIS OUT UNTIL CARD ADD FUNCTIONALITY IS ADDED
          <Section className="EducatorDashboard__section">
            <ItemList
              name="Manage Flashcards"
              items={this.state.cardList}
              displayProp={'card_prompt'}
              id="flashcards"
              buttonText="Add (+)"
              buttonAction={this.handleAddCardClick}
              handleItemClick={this.onItemClick}
            />
            </Section>
        */}
          <Section className="EducatorDashboard__section">
            <ItemList
              name="Deck List"
              items={this.state.deckList}
              displayProp={'deck_name'}
              id="decks"
              buttonText="Create New Deck (+)"
              buttonAction={this.handleAddDeckClick}
              handleItemClick={this.onItemClick}
            />
          </Section>
        </Section>
      </Section>
    );
  }
}
