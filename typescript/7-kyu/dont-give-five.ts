function dontGiveMeFive(start: number, end: number): number {
  let count: number = 0;

  for (let i = start; i <= end; i++) {
    if (!i.toString().includes("5")) {
      count++;
    }
  }

  return count;
}

// Должно возвращать количество цифр от и до без цифр содержащих 5
