const digitize = (n: number): number[] => {
  return n
    .toString()
    .split("")
    .reverse()
    .map((el) => +el);
};
