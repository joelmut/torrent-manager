import {
  MoviesSearchOptions,
  MoviesTorrentMetadata,
} from '@torrent/interfaces';
import { request } from '../request';
import { metadata } from './metadata';
import { buildParams } from './buildParams';
import { retry } from '@torrent/utilities/retry';
import { flow } from '@torrent/utilities';
import { filter } from './filter';

export async function search(
  options: MoviesSearchOptions
): Promise<MoviesTorrentMetadata[]> {
  return retry(async cancel => {
    const params = buildParams(options);

    const { data } = await request({ method: 'GET', params });

    if (!!data?.torrent_results) {
      cancel();
      return flow(metadata, filter(options))(data.torrent_results);
    }
  });
}
