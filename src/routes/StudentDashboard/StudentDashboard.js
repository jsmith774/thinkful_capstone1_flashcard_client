import React, { Component } from 'react';
import { Section } from '../../components/Utils/Utils';

import ApiService from '../../services/api-service';
import ButtonList from '../../components/ButtonList/ButtonList';

export default class StudentDashboard extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  state = {
    cardList: [],
    deckList: [],
  };

  onItemClick = (deck) => {
    console.log('itemId', deck.id);
    console.log('itemName', deck.deck_name);
    const { history } = this.props;
    history.push(`/assessment/${deck.id}/${deck.deck_name}`);
  };

  componentDidMount() {
    let cards = [];
    ApiService.getCards()
      .then((dbCards) => {
        cards = dbCards;
        this.setState({ cardList: cards });
      })
      .catch(this.context.setError);

    let decks = [];
    ApiService.findDecksByUserId(window.localStorage.getItem('userId'))
      .then((dbDecks) => {
        decks = dbDecks;
        this.setState({ deckList: decks });
      })
      .catch(this.context.setError);
  }

  render() {
    return (
      <Section className="StudentDashboard">
        <h2>Student Dashboard</h2>
        <Section className="StudentDashboard">
          <Section className="StudentDashboard__section">
            <ButtonList
              listTitle="Click a Deck to Begin"
              items={this.state.deckList}
              displayProp={'deck_name'}
              id="decks"
              handleItemClick={this.onItemClick}
            />
          </Section>
        </Section>
      </Section>
    );
  }
}
