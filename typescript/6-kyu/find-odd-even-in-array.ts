function findOutlier(integers: number[]): number {
  let arrOdd: number = integers.filter((el) => el % 2 !== 0).length;

  return arrOdd == 1
    ? integers.filter((el) => el % 2 !== 0)[0]
    : integers.filter((el) => el % 2 == 0)[0];
}
