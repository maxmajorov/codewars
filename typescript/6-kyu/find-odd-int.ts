const findOdd = (xs: number[]): number => {
  let arr: number[] = xs.sort((a, b) => a - b);
  let acc: number = 0;
  let res: number = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        acc++;
      }
    }
    if (acc % 2 !== 0) {
      res = arr[i];
      break;
    }
  }
  return res;
};
