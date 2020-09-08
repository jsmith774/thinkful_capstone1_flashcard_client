import React, { Component } from 'react';
//import EducatorContext from '../../contexts/EducatorContext';
import AppContext from '../../contexts/AppContext';
import NewDeckForm from '../../components/NewDeckForm/NewDeckForm';

import { Section } from '../../components/Utils/Utils';

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
    //alert('Add Deck');
    //load add deck page (load cards and students)
  };

  componentDidMount() {
    // //this.context.clearError();
    // let cards = [];
    // ApiService.getCards()
    //   .then((dbCards) => {
    //     cards = dbCards;
    //     this.setState({ cardList: cards });
    //   })
    //   .catch(this.context.setError);
    // // ApiService.getCards()
    // //   .then(this.context.setCards)
    // //   .catch(this.context.setError);
    // let decks = [];
    // ApiService.getDecks()
    //   .then((dbDecks) => {
    //     decks = dbDecks;
    //     this.setState({ deckList: decks });
    //   })
    //   .catch(this.context.setError);
  }

  render() {
    return (
      <Section>
        <h2>Add new deck:</h2>
        <NewDeckForm />
      </Section>
    );
  }
}
