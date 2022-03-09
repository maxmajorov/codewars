const digPow = (n: number, p: number) => {
  const arr: Array<string> = n.toString().split("");

  let k: number = 0;

  for (let i = 0; i < arr.length; i++) {
    k += Number(arr[i]) ** (p + i);
  }

  return k % n === 0 ? k / n : -1;
};

digPow(695, 2); //should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
