function duplicateCount(text: string): number {
  let map = new Map();

  for (let i = 0; i < text.length; i++) {
    map.set(
      text[i].toLowerCase(),
      map.has(text[i].toLowerCase()) ? true : false
    );
  }

  let count: number = 0;
  map.forEach((val) => (val == true ? count++ : 0));

  return count;
}

// Ищет количество дублирующихся символов в строке
