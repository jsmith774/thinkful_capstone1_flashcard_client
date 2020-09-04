import React, { Component } from 'react';

const AppContext = React.createContext({
  cards: [],
  decks: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setCards: () => {},
  setDecks: () => {},
});

export default AppContext;

export class AppProvider extends Component {
  state = {
    cards: [],
    decks: [],
    error: null,
  };

  setCards = (cards) => {
    console.log('setting state- cards:', cards);
    return this.setState({ cards });
  };

  setDecks = (decks) => {
    this.setDecks({ decks });
  };

  setError = (error) => {
    console.error(error);
    return this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      cards: this.state.cards,
      decks: this.state.decks,
      setCards: this.state.setCards,
      setDecks: this.state.setDecks,
      setError: this.state.setError,
      clearError: this.state.clearError,
    };

    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
