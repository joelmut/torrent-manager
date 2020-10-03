import { SearchOptions } from './SearchOptions';

export interface SeriesSearchOptions extends SearchOptions {
  tmdb?: number;
  imdb?: string;
  tvdb?: number;
  tvrage?: number;
  season: number;
  episode?: number;
}
