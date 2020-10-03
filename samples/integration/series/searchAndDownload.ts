import {
  series,
  flow,
  score,
  SeriesSearchOptions,
  DownloadOptions,
} from '@torrent';
import * as tmdb from '@tmdb';

const searchSerie = async (query: string) => {
  const { search, findOne } = tmdb.series;

  const options: tmdb.series.SeriesSearchOptions = { query };

  const [first] = await search(options);
  return findOne(first.id);
};

(async () => {
  const serie = await searchSerie('The 100');

  const { search, sort, filter, download } = series;
  const query: SeriesSearchOptions = {
    tmdb: serie.id,
    season: 7,
    episode: 16,
  };

  const options: DownloadOptions = {
    path: 'E:/series/{serie_title}',
    name: '{serie_title} S{season}E{episode}',
  };

  const torrents = await flow(search, score, filter, sort)(query);

  await download(options)(torrents);
})();
