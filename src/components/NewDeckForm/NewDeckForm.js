import React, { Component } from 'react';
import ApiService from '../../services/api-service';

import CheckboxGroup from '../../components/CheckboxGroup/CheckboxGroup';
import { Button, Input, Section } from '../Utils/Utils';

import AppContext from '../../contexts/AppContext';
import './NewDeckForm.css';

export default class NewDeckForm extends Component {
  static contextType = AppContext;

  state = {
    cardList: [],
    studentList: [],
    deckCardIdList: [],
    deckStudentIdList: [],
    error: null,
  };

  onCardChange = (isChecked, cardId) => {
    const deckCardIdList = this.state.deckCardIdList;

    if (isChecked) {
      deckCardIdList.push(cardId);
    } else {
      const idx = deckCardIdList.indexOf(cardId);
      if (idx !== -1) {
        /* card already exists; remove from list */
        deckCardIdList.splice(idx, 1);
      }
    }
    this.setState({ deckCardIdList: deckCardIdList });
  };

  onStudentChange = (isChecked, studentId) => {
    const deckStudentIdList = this.state.deckStudentIdList;

    if (isChecked) {
      deckStudentIdList.push(studentId);
    } else {
      const idx = deckStudentIdList.indexOf(studentId);
      if (idx !== -1) {
        /* student already exists; remove from list */
        deckStudentIdList.splice(idx, 1);
      }
    }

    this.setState({ deckStudentIdList: deckStudentIdList });
  };

  componentDidMount() {
    let cards = [];
    //load cards from database and place into state
    ApiService.getCards()
      .then((dbCards) => {
        cards = dbCards;
        this.setState({ cardList: cards });
      })
      .catch(this.context.setError);

    //load students from database and place into state
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

    ApiService.postDeck(
      deck_name_input.value,
      this.state.deckCardIdList,
      this.state.deckStudentIdList
    )
      .then((res) => {
        return res.json;
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });

    this.props.afterAddHandler();
  };

  render() {
    const { error } = this.state;
    return (
      <form className="NewDeckForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="deck_name">
          <label htmlFor="deck_name_input">Deck Name:</label>
          <Input
            className="deck_name"
            required
            name="deck_name_input"
            id="deck_name_input"
          ></Input>
        </div>
        <Section className="sectionContainer">
          <Section className="section__subsection">
            <CheckboxGroup
              groupTitle="Select Cards to Include in Deck:"
              inputName="cardsInDeck"
              items={this.state.cardList}
              displayProp={'card_prompt'}
              id="cards"
              handleItemChange={this.onCardChange}
            />
          </Section>
          <Section className="section_subsection">
            <CheckboxGroup
              groupTitle="Select Students who should have access to Deck:"
              inputName="studentsWithAccess"
              items={this.state.studentList}
              displayProp={'full_name'}
              id="students"
              handleItemChange={this.onStudentChange}
            />
          </Section>
        </Section>
        <Button type="submit">Add Deck</Button>
      </form>
    );
  }
}
