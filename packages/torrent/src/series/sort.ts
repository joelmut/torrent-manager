import { SeriesTorrentMetadata } from "../interfaces";

export function sort(torrents: SeriesTorrentMetadata[]) {
  if (torrents.length <= 1) return torrents;
  return torrents.sort((a, b) => a.episode - b.episode);
}