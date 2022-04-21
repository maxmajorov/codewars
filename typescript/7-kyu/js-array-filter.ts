const getEvenNumbers = (numbersArray: number[]): number[] => {
  return numbersArray.filter((el, ind, arr) => !(el % 2));
};
