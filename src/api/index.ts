import axios from 'axios';

const getShortURL = (longURL: string) =>
  axios.get(`https://api.shrtco.de/v2/shorten?url=${longURL}`);

export { getShortURL };
