import {
  SeriesSearchOptions,
  SeriesTorrentMetadata
} from '@torrent/interfaces';

export function filter(options: SeriesSearchOptions) {
  return (
    torrents: SeriesTorrentMetadata[]
  ) => {
    if (torrents.length <= 1)
      return torrents;

    const { episode, season } = options;
    const first = torrents[0];
    return torrents.filter(
      e => first.imdb === e.imdb &&
        season == e.season &&
        (!!episode ? episode == e.episode : true)
    );
  };
}
