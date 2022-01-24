function spinWords(words: string): string {
  let arrString: Array<string> = words.split(" ");

  return arrString
    .map((el) => (el.length < 5 ? el : Array.from(el).reverse().join("")))
    .join(" ");
}

//Переворот слов с колическвом букв более 5
