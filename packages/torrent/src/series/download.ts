import { add } from '@qbittorrent';
import { SeriesTorrentMetadata, DownloadOptions } from '../interfaces';
import { format } from './format';

export function download(options: DownloadOptions) {
  return async (torrents: SeriesTorrentMetadata[]) => {
    const result = torrents.map(e => {
      const rename = format(options.name, e);
      const savepath = format(options.path, e);
      return add({ rename, savepath })([e]);
    });
    return Promise.all(result);
  };
}
