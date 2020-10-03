import { MoviesSearchOptions } from '@torrent/interfaces';
import { categories } from '../categories';
import { Params } from '@torrent/interfaces/Params';

export function buildParams(options: MoviesSearchOptions): Params {
  const { query, resolution, title } = options;

  let search_string = query;

  if (!search_string && !!title) {
    search_string = title;
  }

  const cat = categories.movies[resolution] || categories.movies['1080p'];
  const category = cat.join(';');

  return { search_string, category };
}
