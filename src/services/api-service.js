import TokenService from '../services/token-service';
import config from '../config';

const ApiService = {
  getCards(db) {
    return fetch(`${config.API_ENDPOINT}/cards`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) => {
      //return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
      console.log('In api-service getCards(db).then...');
      if (!res.ok) {
        console.log('response not ok:', res);
        return res.json().then((e) => Promise.reject(e));
      }

      console.log('respone is ok:', res);
      return res.json();
    });
  },
};

export default ApiService;
