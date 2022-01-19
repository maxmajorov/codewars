function SeriesSum(n: number): string {
  let acc: number = 1;
  let sum: number = 0;

  for (let i = 0; i < n; i++) {
    sum += 1 / acc;
    acc += 3;
  }

  return sum.toFixed(2);
}

SeriesSum(4); //"1.49"
//Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
