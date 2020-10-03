import { MoviesTorrentMetadata } from "../interfaces";

export function format(path: string, torrent: MoviesTorrentMetadata) {
  let result = path;
  Object.keys(torrent).forEach((e) => {
    result = result.replace(`{${e}}`, torrent[e]);
  });
  return result;
}
