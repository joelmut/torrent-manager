import { Resolutions } from "@shared";

export const categories = {
  tv: {
    '720p': [18],
    '1080p': [41],
    '4K': [49],
  },
  movies: {
    '720p': [45, 48],
    '1080p': [42, 44, 46, 54],
    '4K': [50, 51, 52],
  },

  get(name: 'tv' | 'movies', resolution: Resolutions) {
    return (categories[name][resolution] || categories[name]['1080p']).join(
      ';'
    );
  },
};
