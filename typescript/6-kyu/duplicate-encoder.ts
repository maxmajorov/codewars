function duplicateEncode(word: string) {
  return [...word]
    .map((el) =>
      word.replace(new RegExp(`[^${el}]`, "g"), "").length === 1 ? "(" : ")"
    )
    .join("");
}

//Не корректно работает
