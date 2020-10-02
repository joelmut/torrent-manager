import { SeriesSearchOptions } from '@torrent/interfaces';
import { categories } from '../categories';

export interface Params {
  search_string: string;
  category: string;
}

export function buildParams(options: SeriesSearchOptions): Params {
  const { query, season, resolution, episode, title } = options;

  let search_string = query;

  if (!search_string && !!title) {
    const s = !!season ? 's' + `${season}`.padStart(2, '0') : '';
    const ep = !!episode ? 'e' + `${episode}`.padStart(2, '0') : '';
    search_string = `${title} ${s}${ep}`;
  }

  const cat = categories.tv[resolution] || categories.tv['1080p'];
  const category = cat.join(';');

  return { search_string, category };
}
