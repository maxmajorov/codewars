export function descendingOrder(n: number): number {
  let arr: Array<string> = n.toString().split("");

  let arrNum: Array<number> = arr.map((el) => +el).sort((a, b) => b - a);

  return +arrNum.join("");
}
