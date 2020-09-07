import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../../components/Utils/Utils';
import ApiService from '../../services/api-service';
import Flashcard from '../../components/Flashcard/Flashcard';

export default class Assessment extends Component {
  ASSESSMENT_STATE = {
    NEW: 'New',
    PROMPT_FACEDOWN: 'Prompt_Facedown',
    PROMPT_FACEUP: 'Prompt_Faceup',
    ANSWER: 'Answer',
    RESULTS: 'Results',
  };

  ANSWER_STATUS = {
    CORRECT: 'Correct',
    INCORRECT: 'Incorrect',
  };

  state = {
    //Assessment Level State
    cardList: [],
    deckId: 0,
    scoreCorrect: 0, //cardList.length = total # questions: score disply `{scoreCorrect} out of {cardList.length}`
    assessmentState: this.ASSESSMENT_STATE.NEW,

    //todo see quiz app - viewState, question#, etc
    //Current Card State
    currentCard: 0,
    answerStatus: this.ANSWER_STATUS.INCORRECT,
  };

  componentDidMount() {
    //this.context.clearError();

    let cards = [];
    //let deckName = ''; //todo get deckname from db or better from all_decks context lookup

    const deckId = this.props.match.params.deckId;
    ApiService.findCardsByDeckId(window.localStorage.getItem('userId'), deckId)
      .then((dbCards) => {
        cards = dbCards;
        //todo SHUFFLE (if deck type = random; otherwise order is fixed)
        this.setState({
          cardList: cards,
          deckId: deckId,
          assessmentState: this.ASSESSMENT_STATE.NEW,
        });
      })
      .catch(this.context.setError);
    // ApiService.getCards()
    //   .then(this.context.setCards)
    //   .catch(this.context.setError);
  }

  handleStartClick = () => {
    this.setState({
      assessmentState: this.ASSESSMENT_STATE.PROMPT_FACEDOWN,
      currentCard: 0,
      scoreCorrect: 0,
    });
  };

  flipFaceUp = () => {
    console.log('Card Clicked...' + this.state.cardView);
    if (this.state.assessmentState === this.ASSESSMENT_STATE.PROMPT_FACEDOWN) {
      console.log('Changing card view from FACEDOWN to FACEUP');
      this.setState({
        assessmentState: this.ASSESSMENT_STATE.PROMPT_FACEUP,
      });
    } else {
      console.log('Card is already faceup - do nothing');
    }
  };

  reviewAnswer = () => {
    console.log('REVIEW ANSER:' + this.state.cardView);
    console.log('changing state from prompt_face to answer');
    this.setState({
      assessmentState: this.ASSESSMENT_STATE.ANSWER,
    });
  };

  assessAnswer = (score) => {
    let { scoreCorrect, currentCard, cardList } = this.state;

    scoreCorrect += score;

    let assessmentState = this.ASSESSMENT_STATE.PROMPT_FACEDOWN;
    currentCard++;
    if (currentCard >= cardList.length) {
      assessmentState = this.ASSESSMENT_STATE.RESULTS;
    }

    this.setState({
      scoreCorrect: scoreCorrect,
      currentCard: currentCard,
      assessmentState: assessmentState,
    });
  };

  renderStateView() {
    let card = this.state.cardList[this.state.currentCard]; //currrentCard/index = 0 for card_1, n-1 for card_n
    switch (this.state.assessmentState) {
      case this.ASSESSMENT_STATE.NEW:
        return (
          <div>
            <h3>ASSESSMENT STATE = 'new'</h3>
            <button onClick={() => this.handleStartClick()}>Start</button>
          </div>
        );

      case this.ASSESSMENT_STATE.PROMPT_FACEDOWN:
      case this.ASSESSMENT_STATE.PROMPT_FACEUP:
        return (
          <Flashcard
            card={card}
            view={
              this.state.assessmentState === this.ASSESSMENT_STATE.PROMPT_FACEUP
                ? 'Faceup'
                : 'Facedown'
            }
            cardClickHandler={this.flipFaceUp}
            submitAnswerHandler={this.reviewAnswer}
          />
        );
      case this.ASSESSMENT_STATE.ANSWER:
        return (
          <>
            <Flashcard
              card={card}
              view="Review"
              submitAnswerHandler={this.assessAnswer}
              cardClickHandler={() => {}}
            />
            <p>
              *** Include "RIGHT" and "WRONG" self-assessment buttons and media
              check playback
            </p>
          </>
        );

      case this.ASSESSMENT_STATE.RESULTS:
        return (
          <>
            <h1>Results</h1>
            You got {this.state.scoreCorrect} out of{' '}
            {this.state.cardList.length}
            <div>
              <button>Try Again</button>
              <button>
                <Link className="button-link" to="/student-dashboard">
                  Dashboard
                </Link>
              </button>
            </div>
          </>
        );
      //score out of
      //try again?
      default:
        return <h1>INVALID STATE</h1>;
    }

    //answer view eventHandler - currentCard++
    //  if currentCard is lastCard
    //assessmentState = results view
    //else currentCard++ assessmentState =
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
        <Section className="Assessment">{this.renderStateView()}</Section>
      </Section>
    );
  }
}
