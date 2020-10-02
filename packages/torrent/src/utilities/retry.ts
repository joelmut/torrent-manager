import { sleep } from './sleep';

export async function retry(
  cb: (cancel: () => void) => any,
  wait: number = 1000,
  intents: number = 3
) {
  for (let i = 0; i < intents; i++) {
    await sleep(wait);
    return cb(() => (i = intents));
  }
}
