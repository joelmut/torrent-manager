import { MoviesTorrentMetadata } from '@torrent/interfaces';
import pb from 'pretty-bytes';
import { parse } from 'parse-torrent-title';
import magnetUri from 'magnet-uri';
import { Resolutions } from '@shared';

export function metadata(data: any[]): MoviesTorrentMetadata[] {
  return data.map(e => {
    const parsed = parse(e.title);
    const magnet = magnetUri.decode(e.download);
    const { imdb } = e.episode_info;

    return <MoviesTorrentMetadata>{
      hash: magnet.infoHash,
      title: e.title,
      imdb,
      movie_title: parsed.title,
      size: { raw: e.size, formated: pb(e.size) },
      seeders: e.seeders,
      leechers: e.leechers,
      magnet: e.download,
      resolution: parsed.resolution as Resolutions,
      source: parsed.source,
      codec: parsed.codec,
      group: parsed.group,
      audio: parsed.audio,
    };
  });
}
