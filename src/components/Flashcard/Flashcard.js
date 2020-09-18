import React, { Component } from 'react';
import { Section } from '../../components/Utils/Utils';
import './Flashcard.css';
import './cardBack.jpg';

export default class Flashcard extends Component {
  static defaultProps = {
    card: { card_prompt: 'test', card_answer: 'test' },
  };

  VIEW = {
    FACEDOWN: 'Facedown',
    FACEUP: 'Faceup',
    REVIEW: 'Review',
  };

  componentDidMount() {}

  renderCard(card, view) {
    if (view === this.VIEW.FACEDOWN) {
      return (
        <>
          <div className="flashcard__card flashcard__facedown">
            Click on Card to Flip{' '}
            <span role="img" aria-label="try again looping arrows icon">
              🔄
            </span>
          </div>
        </>
      );
    } else {
      const cardDiv = (
        <div className="flashcard__card">
          <span className="flashcard__content">{card.card_prompt}</span>
        </div>
      );
      if (view === this.VIEW.REVIEW) {
        return (
          <>
            {cardDiv}
            <audio controls>
              <source src={card.card_answer} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>

            <div className="flashcard__assess">
              Did you get it right?
              <div>
                <button
                  className="flashcard__correct"
                  onClick={() => this.props.submitAnswerHandler(1)}
                >
                  <span className="assessOpt">
                    YES{' '}
                    <span role="img" aria-label="happy face icon">
                      😀
                    </span>
                  </span>
                </button>
                <button
                  className="flashcard__incorrect"
                  onClick={() => this.props.submitAnswerHandler(0)}
                >
                  <span className="assessOpt">
                    NO{' '}
                    <span role="img" aria-label="sad face icon">
                      😢
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </>
        );
      }
      return (
        <>
          {cardDiv}
          <button onClick={() => this.props.submitAnswerHandler()}>
            <span className="assessOpt">
              Check Answer{' '}
              <span role="img" aria-label="check mark icon">
                ✔️
              </span>
            </span>
          </button>
        </>
      );
    }
  }

  render() {
    const { card, view, cardClickHandler } = this.props;

    return (
      <Section onClick={() => cardClickHandler()}>
        <h2>Assessment</h2>
        <Section className="flashcard__container">
          {this.renderCard(card, view)}
        </Section>
      </Section>
    );
  }
}
