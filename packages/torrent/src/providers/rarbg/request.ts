import axios, { AxiosRequestConfig } from 'axios';
import { token } from './token';
import merge from 'deepmerge';

export async function request(config?: AxiosRequestConfig) {
  const { value } = await token();

  const defaultConfig = {
    params: {
      token: value,
      app_id: 'torrenterr',
      mode: 'search',
      limit: '100',
      format: 'json_extended',
    },
  };

  const options = merge(defaultConfig, config);

  return axios('https://torrentapi.org/pubapi_v2.php', options);
}
