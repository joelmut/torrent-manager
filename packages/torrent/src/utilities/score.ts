import { TorrentMetadata } from '@shared/interfaces';
import {
  MoviesTorrentMetadata,
  SeriesTorrentMetadata,
} from '@torrent/interfaces';

// Score system

const calculators = (modifiers: ScoreModifiers) => ({
  group(torrents: any[], group: string) {
    const { length } = torrents.filter(e => e.group === group);
    return length * modifiers.group;
  },

  seeders(seeders: number) {
    return seeders * modifiers.seeders;
  },

  leechers(leechers: number) {
    return -(leechers * modifiers.leechers);
  },

  size(size: number) {
    const gbToByte = size / 1e9;
    return gbToByte * modifiers.size;
  },

  resolution(resolution: string) {
    const multiplier = modifiers.resolution[resolution];
    return multiplier || 0;
  },

  codec(codec: string) {
    const multiplier = modifiers.codecs[codec];
    return multiplier || 0;
  },

  seasonPack(isPack: boolean) {
    return isPack ? modifiers.seasonPack : 0;
  },
});

const calculate = (torrents: any, modifiers: ScoreModifiers) => {
  const calc = calculators(modifiers);

  return torrents
    .map(e => {
      const score = [
        calc.group(torrents, e.group),
        calc.seeders(e.seeders),
        calc.leechers(e.leechers),
        calc.size(e.size.raw),
        calc.resolution(e.resolution),
        calc.codec(e.codec),
        calc.seasonPack((e as any).season_pack),
      ].reduce((acc, val) => acc + val, 0);

      return { score: Math.round(score), ...e };
    })
    .sort((a, b) => b.score - a.score);
};

interface ScoreModifiersResolutions {
  '4k'?: number;
  '1080p'?: number;
  '720p'?: number;
}

interface ScoreModifiersCodecs {
  h264?: number;
  x264?: number;
  h265?: number;
  x265?: number;
}

interface ScoreModifiers {
  group?: number;
  seeders?: number;
  leechers?: number;
  size?: number;
  seasonPack?: number;
  codecs?: ScoreModifiersCodecs;
  resolution?: ScoreModifiersResolutions;
}

interface ScoreOptions {
  modifiers?: ScoreModifiers;
}

const modifiers: ScoreModifiers = {
  group: 10,
  seeders: 5 / 100,
  leechers: 7 / 100,
  size: 3,
  seasonPack: 10,
  resolution: {
    '4k': 10,
    '1080p': 10,
    '720p': 2.5,
  },
  codecs: {
    h264: 5,
    x264: 10,
    h265: 15,
    x265: 20,
  },
};

export function score(
  value?: ScoreOptions
): <T extends MoviesTorrentMetadata | SeriesTorrentMetadata>(
  torrents: T[]
) => (T extends SeriesTorrentMetadata
  ? SeriesTorrentMetadata
  : T extends MoviesTorrentMetadata
  ? MoviesTorrentMetadata
  : never)[];
export function score(value: SeriesTorrentMetadata[]): SeriesTorrentMetadata[];
export function score(value: MoviesTorrentMetadata[]): MoviesTorrentMetadata[];
export function score(value: ScoreOptions | SeriesTorrentMetadata[]) {
  if (Array.isArray(value)) {
    return calculate(value, modifiers);
  }

  return torrents => calculate(torrents, { ...modifiers, ...value?.modifiers });
}
