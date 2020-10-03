import { SearchOptions } from './SearchOptions';

export interface MoviesSearchOptions extends SearchOptions {
  tmdb?: number;
  imdb?: string;
  tvdb?: number;
  tvrage?: number;
}
