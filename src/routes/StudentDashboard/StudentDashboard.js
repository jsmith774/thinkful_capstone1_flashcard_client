import React, { Component } from 'react';
import { Section } from '../../components/Utils/Utils';

import ApiService from '../../services/api-service';
//import Header from '../../components/Header/Header';
import ItemList from '../../components/ItemList/ItemList';

export default class StudentDashboard extends Component {
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
  };

  onItemClick = (itemId) => {
    alert('ITEM CLICKED ' + itemId);
    //todo load cards and start quiz
    const { history } = this.props;
    history.push('/assessment'); //todo replace '/' test route with 'assessment' route
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
        {/* begin temp block to remove
            <hr />
            <h1>
              TEMP: todo: Remove - get actual header to rerender with 'Logout' when
              logged in
            </h1>
            <header className="App-header">
              <Header />
            </header>
            <hr />
        end temp block*/}
        <h2>Student Dashboard</h2>
        <Section className="StudentDashboard">
          <Section className="StudentDashboard__section">
            <ItemList
              name="Select a Deck to Practice"
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
