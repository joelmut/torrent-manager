export interface Episode {
  id: number;
  name: string;
  date: string;
  season: number;
  episode: number;
}

export interface Season {
  id: number;
  name: string;
  date: string;
  season: number;
  episode_count: number;
}

export interface ExternalIds {
  imdb: string;
  tvdb: number;
  tvrage: number;
}

export interface SerieMetadata {
  id: number;
  name: string;
  date: string;
  status: string;
  external_ids: ExternalIds;
  last_episode: Episode;
  next_episode: Episode;
  seasons: Season[];
  season_count: number;
  episode_count: number;
}
