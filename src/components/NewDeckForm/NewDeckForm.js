import React, { Component } from 'react';
import ApiService from '../../services/api-service';

import ItemList from '../../components/ItemList/ItemList';
import { Button, Input, Section } from '../Utils/Utils';

export default class NewDeckForm extends Component {
  state = {
    cardList: [],
    error: null,
  };

  onItemClick = (itemId) => {
    return;
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

    //todo load students
    // let decks = [];
    // ApiService.getDecks()
    //   .then((dbDecks) => {
    //     decks = dbDecks;
    //     this.setState({ deckList: decks });
    //   })
    //   .catch(this.context.setError);
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    // this.setState({ error: null });
    // const { user_name, password } = ev.target;

    // AuthApiService.postLogin({
    //   user_name: user_name.value,
    //   password: password.value,
    // })
    //   .then((res) => {
    //     user_name.value = '';
    //     password.value = '';
    //     TokenService.saveAuthToken(res.authToken);
    //     window.localStorage.setItem('userId', res.userId);
    //     window.localStorage.setItem('userRole', res.userRole);
    //     this.props.onLoginSuccess();
    //   })
    //   .catch((res) => {
    //     this.setState({ error: res.error });
    //   });
    console.log('ev', ev);
    alert('new deck form submit button clicked');
  };

  handleSelectOnChange = (ev) => {
    console.log('ev', ev);
    console.log('ev.target', ev.target);
    console.log('ev.value', ev.value);
    console.log('ev.target.value', ev.target.value);
  };

  render() {
    const { error } = this.state;
    return (
      <form className="LoginForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="user_name">
          <label htmlFor="AddDeckForm__deck_name">Deck Name:</label>
          <Input required name="deck_name" id="AddDeckForm__deck_name"></Input>
        </div>
        <Section className="StudentDashboard__section">
          <ItemList
            name="Select Cards to Include in Deck:"
            items={this.state.cardList}
            displayProp={'card_prompt'}
            id="cards"
            handleItemClick={this.onItemClick}
            handleSelectOnChange={this.handleSelectOnChange}
          />
        </Section>
        <Button type="submit">Add Deck</Button>
      </form>
    );
  }
}
