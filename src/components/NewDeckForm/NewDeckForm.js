import React, { Component } from 'react';
import ApiService from '../../services/api-service';

import ItemList from '../../components/ItemList/ItemList';
import { Button, Input, Section } from '../Utils/Utils';

export default class NewDeckForm extends Component {
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

  onStudentClick = (studentId) => {};

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
    // let students = [];
    // ApiService.getStudents()
    //   .then((dbStudents) => {
    //     students = dbStudents;
    //     this.setState({ studentList: students });
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

  render() {
    const { error } = this.state;
    return (
      <form className="NewDeckForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="deck_name">
          <label htmlFor="AddDeckForm__deck_name">Deck Name:</label>
          <Input required name="deck_name" id="AddDeckForm__deck_name"></Input>
        </div>
        <Section className="sectionContainer">
          <Section className="section__subsection">
            <ItemList
              name="Select Cards to Include in Deck:"
              items={this.state.cardList}
              displayProp={'card_prompt'}
              id="cards"
              handleItemClick={this.onCardClick}
            />
          </Section>
          <Section className="section_subsection">
            <ItemList
              name="Select Students to Include in Deck:"
              items={this.state.studentList}
              displayProp={'student_prompt'}
              id="students"
              handleItemClick={this.onStudentClick}
            />
          </Section>
        </Section>
        <Button type="submit">Add Deck</Button>
      </form>
    );
  }
}
