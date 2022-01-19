function number(b: [number, number][]): number {
  let count: number = 0;

  for (let i = 0; i < b.length; i++) {
    count += b[i][0] - b[i][1];
  }
  return count;
}

number([
  [10, 0],
  [3, 5],
  [3, 6],
]);
//найти оставшееся количество людей после последней остановки
