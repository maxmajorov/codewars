function findMissingLetter(array: string[]): string {
  let lettersNum: number[] = array.map((el) => el.charCodeAt(0));

  let letter = lettersNum.find((el, ind, arr) => arr[ind + 1] - arr[ind] > 1);

  return String.fromCharCode(letter ? letter + 1 : 0);
}
