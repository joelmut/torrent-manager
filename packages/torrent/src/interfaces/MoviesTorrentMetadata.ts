import { TorrentMetadata } from "@shared";

export interface MoviesTorrentMetadata extends TorrentMetadata {
  imdb?: string;
  movie_title?: string;
}
