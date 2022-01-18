function nbYear(p0: number, percent: number, aug: number, p: number): number {
  let count: number = 0;

  while (p0 < p) {
    let inYear: number = p0 * (percent / 100) + aug;
    p0 += inYear;
    console.log(p0);
    count++;
  }
  return count;
}
