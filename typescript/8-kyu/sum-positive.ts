function positiveSum(arr: number[]): number {
  return arr.length > 0
    ? arr.filter((el) => el > 0).length > 0
      ? arr
          .filter((el) => el > 0)
          .reduce((prev, cur) => (cur > 0 ? prev + cur : prev))
      : 0
    : 0;
}
