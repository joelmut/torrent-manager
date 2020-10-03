import {
  movies,
  flow,
  score,
  MoviesSearchOptions,
  DownloadOptions,
} from '@torrent';

(async () => {
  const { search, download } = movies;
  const query: MoviesSearchOptions = {
    title: 'Enola Holmes',
  };

  const options: DownloadOptions = {
    path: 'E:/movies/',
    name: '{movie_title}',
  };

  const torrents = await flow(search, score)(query);

  console.log(torrents);

  // await download(options)(torrents);
})();
