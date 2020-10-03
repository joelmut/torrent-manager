import { rarbg } from "../providers";
import { parallel } from "../utilities";
import { SeriesSearchOptions } from "../interfaces";

export async function search(options: SeriesSearchOptions) {
  return parallel(rarbg.series.search)(options);
}
