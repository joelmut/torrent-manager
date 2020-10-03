import { request } from '../request';
import { metadata } from './metadata';

export async function findOne(id: number) {
  const { data } = await request({
    method: 'get',
    url: `tv/${id}`,
    params: { append_to_response: 'external_ids' },
  });

  if (!!data) {
    return metadata(data as {});
  }
}
