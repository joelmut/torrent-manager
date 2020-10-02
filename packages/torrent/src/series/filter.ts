import { SeriesTorrentMetadata } from "../interfaces";

export function filter(torrents: SeriesTorrentMetadata[]): SeriesTorrentMetadata[] {
  return torrents.reduce((acc, val) => {
    const inc = acc.some(
      (e) => e.episode === val.episode && e.season === val.season
    );
    if (!inc) {
      acc.push(val);
    }
    return acc;
  }, [] as SeriesTorrentMetadata[]);
}
