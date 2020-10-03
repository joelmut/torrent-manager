import { MoviesTorrentMetadata } from '../interfaces';

export function filter(
  torrents: MoviesTorrentMetadata[]
): MoviesTorrentMetadata[] {
  return [torrents.sort((a, b) => b.score - a.score)[0]];
}
