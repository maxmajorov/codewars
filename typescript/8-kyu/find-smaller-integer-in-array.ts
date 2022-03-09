function findSmallestInt(args: number[]): number {
  return args.sort((a, b) => a - b)[0];
}
