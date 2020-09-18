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
    deckName: '',
    scoreCorrect: 0,
    assessmentState: this.ASSESSMENT_STATE.NEW,
    //Current Card Only Level State
    currentCard: 0,
    answerStatus: this.ANSWER_STATUS.INCORRECT,
  };

  componentDidMount() {
    let cards = [];

    const { deckId, deckName } = this.props.match.params;
    ApiService.findCardsByDeckId(window.localStorage.getItem('userId'), deckId)
      .then((dbCards) => {
        cards = dbCards;
        this.setState({
          cardList: cards,
          deckId: deckId,
          deckName: deckName,
          assessmentState: this.ASSESSMENT_STATE.NEW,
        });
      })
      .catch(this.context.setError);
  }

  handleStartClick = () => {
    this.setState({
      assessmentState: this.ASSESSMENT_STATE.PROMPT_FACEDOWN,
      currentCard: 0,
      scoreCorrect: 0,
    });
  };

  tryAgain = () => {
    this.setState({
      assessmentState: this.ASSESSMENT_STATE.NEW,
      currentCard: 0,
      scoreCorrect: 0,
    });
  };

  flipFaceUp = () => {
    if (this.state.assessmentState === this.ASSESSMENT_STATE.PROMPT_FACEDOWN) {
      this.setState({
        assessmentState: this.ASSESSMENT_STATE.PROMPT_FACEUP,
      });
    }
  };

  reviewAnswer = () => {
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
            <h3>Click button below when ready to begin...</h3>
            <button onClick={() => this.handleStartClick()}>
              <span className="assessOpt">
                Start{' '}
                <span role="img" aria-label="green circle start icon">
                  🟢
                </span>
              </span>
            </button>
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
          </>
        );

      case this.ASSESSMENT_STATE.RESULTS:
        return (
          <>
            <h1>Results</h1>
            You got {this.state.scoreCorrect} out of{' '}
            {this.state.cardList.length}
            <div>
              <button onClick={() => this.tryAgain()}>
                <span className="assessOpt">
                  Try Again{' '}
                  <span role="img" aria-label="try again looping arrows icon">
                    🔄
                  </span>
                </span>
              </button>
              <button>
                <Link className="button-link" to="/student-dashboard">
                  <span className="assessOpt">
                    Dashboard{' '}
                    <span role="img" aria-label="back to dashboard arrow icon">
                      🔙
                    </span>
                  </span>
                </Link>
              </button>
            </div>
          </>
        );
      default:
        return <h1>INVALID STATE</h1>;
    }
  }

  render() {
    return (
      <Section>
        <h2>Self-Assessment for Deck: {this.state.deckName}</h2>{' '}
        <Section className="Assessment">{this.renderStateView()}</Section>
      </Section>
    );
  }
}
