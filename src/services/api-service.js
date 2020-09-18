import TokenService from '../services/token-service';
import config from '../config';

const ApiService = {
  getCards(db) {
    return fetch(`${config.API_ENDPOINT}/cards`, {
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

  getStudents(db) {
    return fetch(`${config.API_ENDPOINT}/users/students`, {
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

  postDeck(deckName, cards, students) {
    return fetch(`${config.API_ENDPOINT}/decks`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        deck_name: deckName,
        cards: cards,
        students: students,
      }),
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
        headers: {
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
