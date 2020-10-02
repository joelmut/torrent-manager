import axios from 'axios';
import {
  QBITTORRENT_PASSWORD,
  QBITTORRENT_URL,
  QBITTORRENT_USERNAME,
} from '@torrent/utilities/env';

export const request = axios.create({
  baseURL: QBITTORRENT_URL,
  auth: { username: QBITTORRENT_USERNAME, password: QBITTORRENT_PASSWORD },
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
