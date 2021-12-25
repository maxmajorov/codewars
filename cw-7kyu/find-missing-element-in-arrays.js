function findMissing(arr1, arr2) {
  
    if (arr1.length == 1 && arr2.length == 0) {
      return arr1[0]
    } else if (arr2.length == 0) {
      return []
    } else {
       let sum1 = arr1.reduce((a, b) => a + b)
       let sum2 = arr2.reduce((a, b) => a + b)
       return sum1 - sum2
    } 
}