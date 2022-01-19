function reverseWords(str: string): string {
  let arrString: Array<string> = str.split(" ");

  let newArr: Array<string> = arrString.map((el) =>
    el.split("").reverse().join("")
  );
  return newArr.join(" ");
}

reverseWords("The quick brown fox jumps over the lazy dog.");
// 'ehT kciuq nworb xof spmuj revo eht yzal .god'
