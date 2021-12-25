function getDecimal(n){
    //   return`0.${Math.abs((n * 10) % 10)}` : n
    //   return +Math.abs(n % 1).toFixed(1)
    //   return +(Math.abs(n) - Math.floor(Math.abs(n))).toFixed(1)
    return Math.abs(n % 1)
}