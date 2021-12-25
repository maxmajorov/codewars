function maxTriSum(numbers){
    let b = new Set(numbers.sort((a, b) => b - a))
    let c = Array.from(b)
  
    return c[0] + c[1] + c[2]
  }