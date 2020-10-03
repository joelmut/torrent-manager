import {
  SeriesSearchOptions,
  SeriesTorrentMetadata,
} from '@torrent/interfaces';
import { request } from '../request';
import { metadata } from './metadata';
import { buildParams } from './buildParams';
import { retry } from '../../../utilities/retry';
import { flow } from '@torrent/utilities';
import { filter } from './filter';

export async function search(
  options: SeriesSearchOptions
): Promise<SeriesTorrentMetadata[]> {
  return retry(async cancel => {
    const params = buildParams(options);

    const { data } = await request({ method: 'get', params });

    if (!!data?.torrent_results) {
      cancel();
      return flow(metadata, filter(options))(data.torrent_results);
    }
  });
}
