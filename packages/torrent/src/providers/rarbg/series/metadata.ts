import { SeriesTorrentMetadata } from '@torrent/interfaces';
import pb from 'pretty-bytes';
import { parse } from 'parse-torrent-title';
import magnetUri from 'magnet-uri';
import { Resolutions } from '@shared';

export function metadata(data: any[]): SeriesTorrentMetadata[] {
  return data.map(e => {
    const parsed = parse(e.title);
    const magnet = magnetUri.decode(e.download);
    const { imdb, epnum, seasonnum } = e.episode_info;

    return <SeriesTorrentMetadata>{
      hash: magnet.infoHash,
      title: e.title,
      imdb,
      serie_title: parsed.title,
      season_pack: (parsed as any).isSeasonPack,
      size: { raw: e.size, formated: pb(e.size) },
      seeders: e.seeders,
      leechers: e.leechers,
      magnet: e.download,
      episode: epnum,
      season: seasonnum,
      resolution: parsed.resolution as Resolutions,
      source: parsed.source,
      codec: parsed.codec,
      group: parsed.group,
      audio: parsed.audio,
    };
  });
}
