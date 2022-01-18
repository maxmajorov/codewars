function longest(s1: string, s2: string): string {
  let arr: Array<string> = [...new Set([...s1, ...s2])];

  return arr.sort().join("");
}
