import { SeriesTorrentMetadata } from "../interfaces";

export function format(path: string, torrent: SeriesTorrentMetadata) {
  let result = path;
  Object.keys(torrent).forEach((e) => {
    let value = torrent[e];
    if (["season", "episode"].includes(e)) {
      value = value.padStart(2, "0");
    }
    result = result.replace(`{${e}}`, value);
  });
  return result;
}
