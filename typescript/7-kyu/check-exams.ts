function checkExam(array1: string[], array2: string[]): number {
  let count: number = 0;

  for (let i = 0, k = 0; i < array1.length, k < array2.length; i++, k++) {
    if (array1[i] == array2[k]) {
      count += 4;
    }
    if (array1[i] == "" || array2[k] == "") {
      count += 1;
    }
    if (array1[i] !== array2[k]) {
      count -= 1;
    }
  }
  return count < 0 ? 0 : count;
}
