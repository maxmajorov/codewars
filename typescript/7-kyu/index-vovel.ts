function vowelIndices(word: string): number[] {
  let indArr: number[] = [];
  const regex = /[aeiouy]/gi;
  word
    .toLowerCase()
    .split("")
    .forEach((el, ind) => (el.match(regex) ? indArr.push(ind + 1) : null));

  //   for (let i = 0; i < word.length; i++) {
  //     if (word[i].match(regex)) {
  //       arr.push(i + 1)
  //     }
  //   }
  return indArr;
}
