import { ProviderToken } from '@torrent';
import axios from 'axios';

let _token: ProviderToken = { interval: 15 };

export async function token(): Promise<ProviderToken> {
  const { value, expireAt, interval } = _token;
  const now = new Date();

  if (!value || expireAt > now) {
    const response = await axios('https://torrentapi.org/pubapi_v2.php', {
      params: {
        app_id: 'torrenter',
        get_token: 'get_token',
      },
      headers: {
        'user-agent': 'node.js',
      },
      timeout: 10000,
    });

    const { token } = response.data;

    const expireAt = new Date();
    expireAt.setMinutes(interval);

    _token = { value: token, expireAt, interval };
  }

  return _token;
}
