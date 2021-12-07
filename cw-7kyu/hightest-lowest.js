function highAndLow(numbers){
  
    let arr = numbers.split(' ')
    let arr2 = []
  
    for (item in arr) {
      arr2.push(+arr[item])
    }
    
    return `${Math.max(...arr2)} ${Math.min(...arr2)}`
  }