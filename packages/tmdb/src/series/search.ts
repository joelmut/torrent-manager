import { metadata } from './metadata';
import { request } from '../request';
import { SerieMetadata } from './SerieMetadata';
import { SeriesSearchOptions } from './SeriesSearchOptions';

export async function search(
  options: SeriesSearchOptions
): Promise<SerieMetadata[]> {
  const { query } = options;
  const { data } = await request({
    method: 'get',
    url: 'search/tv',
    params: { query },
  });

  if (!!data?.results) {
    return metadata(data.results as []);
  }
}
