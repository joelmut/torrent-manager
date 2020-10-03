import axios from 'axios';
import { TMDB_URL, TMDB_API_KEY } from '@root/env';

export const request = axios.create({
  baseURL: TMDB_URL,
  params: {
    api_key: TMDB_API_KEY,
  },
});
