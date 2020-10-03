import { series } from '@tmdb';

(async () => {
  const { search } = series;
  const options: series.SeriesSearchOptions = {
    query: 'The 100',
  };

  const serie = await search(options);

  console.log(serie);
})();
