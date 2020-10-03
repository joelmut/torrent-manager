import {
  MoviesSearchOptions,
  MoviesTorrentMetadata,
} from '@torrent/interfaces';

export function filter(options: MoviesSearchOptions) {
  return (torrents: MoviesTorrentMetadata[]) => {
    if (torrents.length <= 1) return torrents;

    const first = torrents[0];
    return torrents.filter(e => first.imdb === e.imdb);
  };
}
