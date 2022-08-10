function automorphic(n: number): string {
  return n === +(n ** 2).toString().slice(-n.toString().length)
    ? "Automorphic"
    : "Not!!";
}
