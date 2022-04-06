const minValue = (values: number[]): number => {
  return +[...new Set(values)].sort((a, b) => a - b).join("");
};
