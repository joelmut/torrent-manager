import {
  movies,
  flow,
  score,
  MoviesSearchOptions,
  DownloadOptions,
} from '@torrent';
import { filter } from '@torrent/movies/filter';

(async () => {
  const { search, download } = movies;
  const query: MoviesSearchOptions = {
    title: 'Enola Holmes',
  };

  const options: DownloadOptions = {
    path: 'E:/movies/',
    name: '{movie_title}',
  };

  const torrents = await flow(search, score, filter)(query);

  await download(options)(torrents);
})();
