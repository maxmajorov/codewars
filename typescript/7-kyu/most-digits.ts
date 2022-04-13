const findLongest = (array: number[]): number => {
  const maxLength: number = Math.max(
    ...array.map((el) => el.toString().length)
  );
  return array.filter((el) => el.toString().length === maxLength)[0];
};

findLongest([123, 10, 150]); // 100
