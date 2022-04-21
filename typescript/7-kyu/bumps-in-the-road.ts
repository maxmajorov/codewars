function bump(x: string): string {
  return Array.from(x).filter((el) => el === "n").length > 15
    ? "Car Dead"
    : "Woohoo!";
}
