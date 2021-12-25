function sortMyString(S) {
    let a = S.split('')
    
    let b = a.filter((el, ind) => ind % 2 == 0 ? el : 0)
    let c = a.filter((el, ind) => ind % 2 !== 0 ? el : 0)  
  
    return `${b.join('')} ${c.join('')}`
    
}