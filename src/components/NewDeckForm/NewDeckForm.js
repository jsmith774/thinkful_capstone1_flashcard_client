import React, { Component } from 'react';
import ApiService from '../../services/api-service';

import ItemList from '../../components/ItemList/ItemList';
import { Button, Input, Section } from '../Utils/Utils';

import AppContext from '../../contexts/AppContext';

export default class NewDeckForm extends Component {
  static contextType = AppContext;

  state = {
    cardList: [],
    studentList: [],
    deckCardIdList: [],
    deckStudentIdList: [],
    error: null,
  };

  onCardClick = (cardId) => {
    const deckCardIdList = this.state.deckCardIdList;

    const idx = deckCardIdList.indexOf(cardId);
    if (idx === -1) {
      //does not exist; add
      deckCardIdList.push(cardId);
    } else {
      //exists; remove
      deckCardIdList.splice(idx, 1);
    }
    this.setState({ deckCardIdList: deckCardIdList }); //maybe wait until "submit" to update state?
  };

  onStudentClick = (studentId) => {
    const deckStudentIdList = this.state.deckStudentIdList;

    const idx = deckStudentIdList.indexOf(studentId);
    if (idx === -1) {
      //does not exist; add
      deckStudentIdList.push(studentId);
    } else {
      //exists; remove
      deckStudentIdList.splice(idx, 1);
    }

    this.setState({ deckStudentIdList: deckStudentIdList });
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
    let students = [];
    ApiService.getStudents()
      .then((dbStudents) => {
        students = dbStudents;
        this.setState({ studentList: students });
      })
      .catch(this.context.setError);
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { deck_name_input } = ev.target;

    // todo post addDeck - get deckId
    // todo use deckId to add cards
    // todo use deckId to give students access

    ApiService.postDeck(
      deck_name_input.value,
      this.state.deckCardIdList,
      this.state.deckStudentIdList
    )
      .then((res) => {
        //const { deck_id, deck_name } = res.json;
        const deckId = res.json;
        console.log(
          'IN postDeck().then: deckName',
          //deck_name,
          'deckId',
          deckId
        );
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });

    this.props.afterAddHandler();
    // this.context.handleLogin();

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
  };

  render() {
    const { error } = this.state;
    return (
      <form className="NewDeckForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="deck_name">
          <label htmlFor="deck_name_input">Deck Name:</label>
          <Input required name="deck_name_input" id="deck_name_input"></Input>
        </div>
        <Section className="sectionContainer">
          <Section className="section__subsection">
            <ItemList
              name="Select Cards to Include in Deck:"
              items={this.state.cardList}
              displayProp={'card_prompt'}
              id="cards"
              handleItemClick={this.onCardClick}
              multiple="multiple"
            />
          </Section>
          <Section className="section_subsection">
            <ItemList
              name="Select Students who should have access to Deck:"
              items={this.state.studentList}
              displayProp={'full_name'}
              id="students"
              handleItemClick={this.onStudentClick}
              multiple="multiple"
            />
          </Section>
        </Section>
        <Button type="submit">Add Deck</Button>
      </form>
    );
  }
}
