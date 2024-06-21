export function uniqueFlatMap<T>(
  data: T[],
  key: keyof T,
  sort = false
): T[keyof T][] {
  const uniqueValues = Array.from(new Set(data.flatMap((item) => item[key])));
  return sort ? uniqueValues.sort() : uniqueValues;
}
