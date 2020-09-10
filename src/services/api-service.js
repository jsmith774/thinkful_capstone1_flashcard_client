import TokenService from '../services/token-service';
import config from '../config';
import StudentDashboard from '../routes/StudentDashboard/StudentDashboard';

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

  postDeck(deckName) {
    console.log('in postDecK(): deckName', deckName);

    //todo make this a transaction
    return fetch(`${config.API_ENDPOINT}/decks`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        deck_name: deckName,
      }),
    }).then((res) => {
      if (!res.ok) {
        console.log(res);
        console.log(`${config.API_ENDPOINT}/decks`);
        console.log(JSON.stringify({ deck_name: deckName }));
        return res.json().then((e) => Promise.reject(e));
      }
      return res.json();
    });
    //postDeck returns deckId; use deckId to add cards and to add Students
    // return Promise.resolve('hello');
  },

  addCardsToDeck(deckId, cardIds) {
    return;
  },

  addStudentsToDeck(deckId, studentIds) {
    return;
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
