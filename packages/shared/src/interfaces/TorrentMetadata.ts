import { Resolutions } from './Resolutions';
import { DigitalSize } from './DigitalSize';

export interface TorrentMetadata {
  hash?: string;
  title?: string;
  score?: number;
  resolution?: Resolutions;
  size?: DigitalSize;
  magnet?: string;
  group?: string;
  source?: string;
  seeders?: number;
  leechers?: number;
  codec?: string;
  audio?: string;
}
