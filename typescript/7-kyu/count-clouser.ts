export function counter(): Function {
  let count: number = 1;
  return function () {
    return count++;
  };
}
