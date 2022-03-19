function smallEnough(a: number[], limit: number): boolean {
  let filteredNumber: Array<number> = a.filter((el) => el <= limit);

  return a.length === filteredNumber.length;
}
