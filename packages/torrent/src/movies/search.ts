import { rarbg } from "../providers";
import { parallel } from "../utilities";
import { MoviesSearchOptions } from "../interfaces";

export async function search(options: MoviesSearchOptions) {
  return parallel(rarbg.movies.search)(options);
}
