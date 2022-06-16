export function xo(str: string) {
  let tempX = 0;
  let tempO = 0;
  str.split("").forEach((letter) => {
    letter.toLowerCase() === "x"
      ? tempX++
      : letter.toLowerCase() === "o"
      ? tempO++
      : "";
  });

  return tempO === tempX;
}
