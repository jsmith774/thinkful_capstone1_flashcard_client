import TokenService from '../services/token-service';
import config from '../config';

/**
 * todo Refactor out header/authoriation token to avoid duplication
 */
const ApiService = {
  getCards(db) {
    return fetch(`${config.API_ENDPOINT}/cards`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) => {
      //return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
      if (!res.ok) {
        return res.json().then((e) => Promise.reject(e));
      }
      return res.json();
    });
  },

  getDecks(db) {
    return fetch(`${config.API_ENDPOINT}/decks`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) => {
      if (!res.ok) {
        return res.json().then((e) => Promise.reject(e));
      }
      return res.json();
    });
  },

  findDecksByUserId(userId) {
    return fetch(`${config.API_ENDPOINT}/decks?userid=${userId}`, {
      header: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) => {
      if (!res.ok) {
        return res.json().then((e) => Promise.reject(e));
      }
      return res.json();
    });
  },

  findCardsByDeckId(userId, deckId) {
    return fetch(
      `${config.API_ENDPOINT}/cards?userid=${userId}&deckid=${deckId}`,
      {
        header: {
          authorization: `bearer ${TokenService.getAuthToken()}`,
        },
      }
    ).then((res) => {
      if (!res.ok) {
        return res.json().then((e) => Promise.reject(e));
      }
      return res.json();
    });
  },
};

export default ApiService;
