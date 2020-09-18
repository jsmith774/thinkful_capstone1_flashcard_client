import React, { Component } from 'react';
import NewDeckForm from '../../components/NewDeckForm/NewDeckForm';
import { Link } from 'react-router-dom';

import { Section } from '../../components/Utils/Utils';

export default class EducatorDashboard extends Component {
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
