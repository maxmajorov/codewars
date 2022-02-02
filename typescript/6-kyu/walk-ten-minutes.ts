function isValidWalk(walk: string[]) {
  let ns: number = 0;
  let we: number = 0;

  if (walk.length == 10) {
    walk.forEach((el) => {
      if (el == "n") {
        ns++;
      } else if (el == "s") {
        ns--;
      } else if (el == "w") {
        we++;
      } else if (el == "e") {
        we--;
      }
    });
  } else return false;

  return ns == 0 && we == 0 ? true : false;
}
