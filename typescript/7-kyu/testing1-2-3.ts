function number(array: string[]): string[] {
  return array.map((el, ind) => `${ind + 1}: ${el}`);
}
