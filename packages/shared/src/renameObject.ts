export function renameObject(keys: { [key: string]: string }) {
  return <T extends object>(obj: T): T => {
    if (!obj) return null;
    return Object.entries(keys).reduce((acc, [key, rename]) => {
      acc[rename || key] = obj[key];
      return acc;
    }, {} as T);
  };
}
