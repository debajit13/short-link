import axios from 'axios';

const getShortURL = (longURL) => {
  return axios.get(`https://api.shrtco.de/v2/shorten?url=${longURL}`);
};

export { getShortURL };
