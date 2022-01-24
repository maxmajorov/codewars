export const digitalRoot = (n: number): number => {
  let acc: number = 0;

  let arrNum: Array<number> = n
    .toString()
    .split("")
    .map((el) => (acc += +el));
  let sum: number = arrNum.reduce((a, b) => a + b);

  return acc > 10 ? digitalRoot(acc) : acc;
};

digitalRoot(942); //9 + 4 + 2 = 15  -->  1 + 5 = 6
// Рекурсивное суммирование.
// Решил частично, подсмотрел условие return
