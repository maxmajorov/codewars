function order(words: string): string {
  return words.length === 0
    ? ""
    : words
        .split(" ")
        .sort((a: any, b: any) => a.match(/[1-9]/) - b.match(/\d/))
        .join(" ");
}
