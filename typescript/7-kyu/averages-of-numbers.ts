function averages(numbers: number[] | null): number[] {
  let arr: number[] = [];

  !numbers || numbers.length === 1 || null
    ? []
    : (arr = numbers.map((el, ind, arr) => (arr[ind] + arr[ind + 1]) / 2));

  arr.pop();

  return arr;
}
