import { renameObject } from '@shared';
import { SerieMetadata } from './SerieMetadata';

const external_ids = renameObject({
  imdb_id: 'imdb',
  tvdb_id: 'tvdb',
  tvrage_id: 'tvrage',
});

const episode = renameObject({
  id: '',
  name: '',
  air_date: 'date',
  season_number: 'season',
  episode_number: 'episode',
});

const season = renameObject({
  id: '',
  name: '',
  air_date: 'date',
  season_number: 'season',
  episode_count: '',
});

export function metadata<T extends object | any[]>(
  data: T
): T extends any[] ? SerieMetadata[] : SerieMetadata {
  const serieMetadata = e => {
    return <SerieMetadata>{
      id: e.id,
      name: e.name,
      date: e.first_air_date,
      status: e.status,
      external_ids: external_ids(e.external_ids),
      last_episode: episode(e.last_episode_to_air),
      next_episode: episode(e.next_episode_to_air),
      season_count: e.number_of_seasons,
      episode_count: e.number_of_episodes,
      seasons: e?.seasons?.map(season),
    };
  };

  if (Array.isArray(data)) {
    return data.map(serieMetadata) as any;
  }

  return serieMetadata(data) as any;
}
