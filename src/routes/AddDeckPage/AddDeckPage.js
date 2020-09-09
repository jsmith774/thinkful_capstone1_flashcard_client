import React, { Component } from 'react';
//import EducatorContext from '../../contexts/EducatorContext';
import AppContext from '../../contexts/AppContext';
import NewDeckForm from '../../components/NewDeckForm/NewDeckForm';

import { Section } from '../../components/Utils/Utils';

export default class EducatorDashboard extends Component {
  // static contextType = AppContext;

  // state = {
  //   cardList: [],
  //   deckList: [],
  // };

  // //todo implement this for basic edit/delete funtionality? or keep 'do nothing' impl?
  // onItemClick = (itemId) => {
  //   return;
  // };

  // handleAddDeckClick = () => {
  //   //alert('Add Deck');
  //   //load add deck page (load cards and students)
  // };

  // componentDidMount() {
  //   // //this.context.clearError();
  //   // let cards = [];
  //   // ApiService.getCards()
  //   //   .then((dbCards) => {
  //   //     cards = dbCards;
  //   //     this.setState({ cardList: cards });
  //   //   })
  //   //   .catch(this.context.setError);
  //   // // ApiService.getCards()
  //   // //   .then(this.context.setCards)
  //   // //   .catch(this.context.setError);
  //   // let decks = [];
  //   // ApiService.getDecks()
  //   //   .then((dbDecks) => {
  //   //     decks = dbDecks;
  //   //     this.setState({ deckList: decks });
  //   //   })
  //   //   .catch(this.context.setError);
  // }

  render() {
    return (
      <Section>
        <h2>Add new deck:</h2>
        <NewDeckForm />
      </Section>
    );
  }
}
