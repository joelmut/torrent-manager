import qs from 'qs';
import { open } from './open';
import { QBitTorrentAddOptions } from './interfaces';
import { request } from './request';
import { TorrentMetadata } from '@shared';

export function add(options: QBitTorrentAddOptions) {
  return async (torrents: TorrentMetadata[]) => {
    const magnets = torrents.map(e => e.magnet);
    await open();
    await request({
      method: 'post',
      url: 'torrents/add',
      data: qs.stringify({
        savepath: options.savepath,
        rename: options.rename,
        urls: magnets.join('\n'),
        sequentialDownload: true,
        skip_checking: false,
      }),
    });
  };
}
