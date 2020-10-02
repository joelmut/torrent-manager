
export function flatten(arr) {
  if(!arr) return [];
  return arr.reduce((acc, arr) => [...acc, ...arr], []);
}