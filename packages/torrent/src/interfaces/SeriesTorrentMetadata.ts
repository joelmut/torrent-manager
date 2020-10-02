import { TorrentMetadata } from "@shared";

export interface SeriesTorrentMetadata extends TorrentMetadata {
  imdb: string;
  serie_title: string;
  season_pack: boolean;
  episode: number;
  season: number;
}
