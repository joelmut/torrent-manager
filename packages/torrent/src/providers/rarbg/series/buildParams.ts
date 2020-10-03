import { SeriesSearchOptions } from '@torrent/interfaces';
import { categories } from '../categories';
import { Params } from '@torrent/interfaces/Params';

export function buildParams(options: SeriesSearchOptions): Params {
  const {
    query,
    season,
    resolution,
    episode,
    title,
    tmdb,
    imdb,
    tvdb,
    tvrage,
  } = options;

  let search_string = query || '';

  if (!search_string) {
    if (!!title) {
      const s = !!season ? 's' + `${season}`.padStart(2, '0') : '';
      const ep = !!episode ? 'e' + `${episode}`.padStart(2, '0') : '';
      search_string = `${title} ${s}${ep}`;
    }
  }

  search_string = search_string.trim();

  return {
    search_string,
    search_themoviedb: tmdb,
    search_imdb: imdb,
    search_tvdb: tvdb,
    search_tvrage: tvrage,
    category: categories.get('tv', resolution),
  };
}
