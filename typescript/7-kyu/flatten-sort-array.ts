function flattenAndSort(inputArray: number[][]): number[] {
  const sortArr: Array<number> = [];

  inputArray.forEach((el) => el.forEach((elInside) => sortArr.push(elInside)));

  return sortArr.sort((a, b) => a - b);
}
