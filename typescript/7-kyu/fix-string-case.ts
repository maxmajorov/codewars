function solve(s: string): string {
  let count: number = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === s[i].toUpperCase() ? ++count : null;
  }

  return s.length - count < s.length / 2 ? s.toUpperCase() : s.toLowerCase();
}
