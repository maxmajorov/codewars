function sumDigits(n: number): number {
  const arr: Array<string> = n.toString().split("");

  return arr[0] == "-"
    ? arr
        .slice(1)
        .map((el) => +el)
        .reduce((prev, next) => prev + next)
    : arr.map((el) => +el).reduce((prev, next) => prev + next);
}
