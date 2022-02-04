function twoOldestAges(ages: number[]): number[] {
  const sortArr: Array<number> = ages.sort((a, b) => a - b);

  return [sortArr[sortArr.length - 2], sortArr[sortArr.length - 1]];
}
