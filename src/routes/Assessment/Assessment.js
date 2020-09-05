import React, { Component } from 'react';
import { Section } from '../../components/Utils/Utils';
import ApiService from '../../services/api-service';

export default class Assessment extends Component {
  state = {
    cardList: [],
    deckId: 0,
    //todo see quiz app - viewState, question#, etc
  };

  componentDidMount() {
    //this.context.clearError();

    let cards = [];
    //let deckName = ''; //todo get deckname from db or better from all_decks context lookup

    ApiService.findCardsByDeckId(
      window.localStorage.getItem('userId'),
      this.props.match.params.deckId
    )
      .then((dbCards) => {
        cards = dbCards;
        //todo SHUFFLE (if deck type = random; otherwise order is fixed)
        this.setState({ cardList: cards });
      })
      .catch(this.context.setError);
    // ApiService.getCards()
    //   .then(this.context.setCards)
    //   .catch(this.context.setError);
  }

  tempRenderCards() {
    return this.state.cardList.map((card) => (
      <li>
        {card.id} : {card.prompt}
      </li>
    ));
  }

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
            <p>TODO: Go through one card at a time</p>
            <ul>{this.tempRenderCards()}</ul>
          </div>
        </Section>
      </Section>
    );
  }
}
