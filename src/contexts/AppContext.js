import React, { Component } from 'react';

export default React.createContext({
  cards: [],
  decks: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setCards: () => {},
  setDecks: () => {},
  handleLogin: () => {},
  handleLogout: () => {},
});
