function capitalize(s: string) {
  return [
    s
      .split("")
      .map((letter, ind, arr) =>
        ind % 2 === 0 ? letter.toUpperCase() : letter
      )
      .join(""),
    s
      .split("")
      .map((letter, ind, arr) =>
        ind % 2 !== 0 ? letter.toUpperCase() : letter
      )
      .join(""),
  ];
}
