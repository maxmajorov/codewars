function adjacentElementsProduct(array: number[]): number {
  let temp: number = -Infinity;
  array.map((el, ind, arr) =>
    arr[ind] * arr[ind + 1] > temp ? (temp = arr[ind] * arr[ind + 1]) : temp
  );

  return temp;
}
