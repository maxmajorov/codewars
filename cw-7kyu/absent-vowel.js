function absentVowel(x){

    const letters = {
        'a' : 0,
        'e' : 1,
        'i' : 2,
        'o' : 3,
        'u' : 4,
    }
  
    let arr = x.match(/[aeiou]/g)
  
    for (key in letters) {
      
        if (!arr.includes(key)) {
            return letters[key]
        }      
    }
}