export function rowWeights(arr: number[]) {
  let team1 = 0;
  let team2 = 0;

  arr.forEach((el, ind) =>
    ind % 2 === 0 ? (team1 = team1 + el) : (team2 = team2 + el)
  );

  return [team1, team2];
}
