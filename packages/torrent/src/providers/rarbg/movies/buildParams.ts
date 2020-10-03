import { MoviesSearchOptions } from '@torrent/interfaces';
import { categories } from '../categories';
import { Params } from '@torrent/interfaces/Params';

export function buildParams(options: MoviesSearchOptions): Params {
  const { query, resolution, title, tmdb, imdb, tvdb, tvrage } = options;

  let search_string = query || '';

  if (!search_string) {
    search_string = title;
  }

  search_string = search_string.trim();

  return {
    search_string,
    search_themoviedb: tmdb,
    search_imdb: imdb,
    search_tvdb: tvdb,
    search_tvrage: tvrage,
    category: categories.get('movies', resolution),
  };
}
