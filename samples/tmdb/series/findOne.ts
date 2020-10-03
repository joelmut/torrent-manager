import { series } from '@tmdb';

(async () => {
  const { search, findOne } = series;
  const options: series.SeriesSearchOptions = {
    query: 'The 100',
  };

  const [first] = await search(options);
  const serie = await findOne(first.id);

  console.log(serie);
})();
