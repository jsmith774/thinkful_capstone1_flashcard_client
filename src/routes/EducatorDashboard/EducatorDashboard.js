import React, { Component } from 'react';
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
    deckList: [],
  };

  onItemClick = (itemId) => {
    return;
  };

  handleAddDeckClick = () => {
    const { history } = this.props;
    history.push(`/add-deck`);
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
        <h2>Educator Dashboard</h2>

        <Section className="EducatorDashboard">
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
