export function flatten(arr: any[]) {
  if (!arr?.some(e => !!e)) return [];
  return arr.reduce((acc, arr) => [...acc, ...arr], []);
}
