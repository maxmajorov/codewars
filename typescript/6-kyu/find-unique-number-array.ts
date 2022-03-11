function findUniq(arr: number[]): number {
  return arr.filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el))[0];
}
