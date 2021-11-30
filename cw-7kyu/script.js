function pyramid(balls) {
  
    let row = 0
    let temp = 0
  
    do {
      
      if (balls > 0) {
        temp = temp + 1
        balls = balls - temp
        row += 1
        console.log(balls)
  
        if (balls < 0) {
          row = row-1
        }
      } 
  
    } while (balls > 0)
  
    console.log(row)
  
  }
  
  pyramid(4)
  
  //Число длинны n которое при сумме цифр в n степени равно самому себе
  
  function isNarcissistic(n){
    
    let arrNum = n.toString().split('')
  
    let numPow = arrNum.map(el => el ** arrNum.length).reduce((a, b) => a + b)
  
    let a = numPow === n ? true : false
  
    console.log(a)
  }
  
  isNarcissistic(153)
  isNarcissistic(435)
  
  
  function reverseNumber(n) {
  
    let a = n.toString().split('')
  
    if (n > 0) {
      console.log(+a.reverse().join(''))
    } else if (n < 0) {
      a.shift(a[0])
      console.log(+`${'-' + a.reverse().join('')}`)
    } else return 0
  
  }
    
  reverseNumber(123)
  // reverseNumber(-256)
  // reverseNumber(1000)
  
  function reverseBits (n) {
    
    let a = n.toString(2).split('')
  
    let b = a.reverse().join('')
  
    
   console.log(a)
   console.log(parseInt(b, 2))
  
  }
  
  reverseBits(417) //267
  // reverseBits(267) //417
  
  function nbDig(n, d) {
  
    // let a = Array.from(n.toString())
    let arr = []
   
    for (let i = 0; i <= n; i++) {
      arr.push(i ** 2)
    }
  
    console.log((arr.join('').split('').filter(el => el == d)).length)
  
  }
  
  // nbDig(5750, 0) //4700
  nbDig(10, 1) //4
  
  function overTheRoad(home, n){
    
    let a = 2*n - (home - 1)
  
    console.log(a)
  }
  
  overTheRoad(2,3) // 8
  
  