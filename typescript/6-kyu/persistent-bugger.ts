function persistence(num: number): number {
  let count: number = 0;
  let arrNum: number[] = num
    .toString()
    .split("")
    .map((el) => +el);

  while (arrNum.length !== 1) {
    arrNum = arrNum
      .reduce((a, b) => a * b)
      .toString()
      .split("")
      .map((el) => +el);
    count++;
  }

  return count;
}
