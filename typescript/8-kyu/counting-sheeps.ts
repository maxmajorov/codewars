function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
  let temp = 0

  arrayOfSheep.map(el => el ? 1 : 0).forEach(el => el === 1 && temp++)
  
  return  temp
}