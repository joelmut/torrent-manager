import { SearchOptions } from "./SearchOptions";

export interface SeriesSearchOptions extends SearchOptions {
  season: number;
  episode?: number;
}
