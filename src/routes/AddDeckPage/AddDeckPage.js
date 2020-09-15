import React, { Component } from 'react';
//import EducatorContext from '../../contexts/EducatorContext';
import AppContext from '../../contexts/AppContext';
import NewDeckForm from '../../components/NewDeckForm/NewDeckForm';
import { Link } from 'react-router-dom';

import { Section } from '../../components/Utils/Utils';

export default class EducatorDashboard extends Component {
  // static contextType = AppContext;

  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  state = {
    cardList: [],
    deckList: [],
    message: null,
  };

  handleAddDeck = () => {
    this.setState({ message: 'Deck Successfully Added' });
    const history = this.props.history;
    history.push('/educator-dashboard');
  };

  addAnotherDeck = () => {
    this.setState({ message: null });
  };
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

  renderNewDeckPage() {
    if (this.state.message) {
      return (
        <>
          <h3>Deck Added</h3>

          <div>
            <button onClick={() => this.addAnotherDeck()}>
              <span className="assessOpt">Add Another Deck' '</span>
            </button>
            <button>
              <Link className="button-link" to="/educator-dashboard">
                <span className="assessOpt">Dashboard </span>
              </Link>
            </button>
          </div>
        </>
      );
    }
    return (
      <>
        <h2>Add new deck:</h2>
        <NewDeckForm afterAddHandler={this.handleAddDeck} />
      </>
    );
  }

  render() {
    return <Section>{this.renderNewDeckPage()}</Section>;
  }
}
