import {
  series,
  flow,
  score,
  SeriesSearchOptions,
  DownloadOptions,
} from '@torrent';

(async () => {
  const { search, sort, filter, download } = series;
  const query: SeriesSearchOptions = {
    title: 'The 100',
    season: 7,
    episode: 16,
  };

  const options: DownloadOptions = {
    path: 'E:/series/{serie_title}',
    name: '{serie_title} S{season}E{episode}',
  };

  const torrents = await flow(search,score, filter, sort)(query);

  await download(options)(torrents);
})();
