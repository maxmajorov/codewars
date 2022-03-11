const towerBuilder = (nFloors: number): string[] => {
  let arr: Array<string> = [];

  for (let i = 0; i < nFloors; i++) {
    arr.push(
      " ".repeat(nFloors - i - 1) +
        "*".repeat(i * 2 + 1) +
        " ".repeat(nFloors - i - 1)
    );
  }

  return arr;
};
