function fruitName (n) {
    let arr = Array.from(n.toString())
    let summ = 0
  
    if (n > 10 && n < 10000) {
      for (let i = 0; i < arr.length; i++) {
        summ += +arr[i]
       }
    } else {
      console.log('break')
    }
  
    let a = n - summ
  
    console.log(a)
    
    console.log(summ)
  }
  
  fruitName(325)
  
  
  function code (letter) {
    const ascii = {
      "": "31",      " ": "32",     "!": "33",     "\"": "34",    "#": "35",    
      "$": "36",     "%": "37",     "&": "38",     "'": "39",     "(": "40",    
      ")": "41",     "*": "42",     "+": "43",     ",": "44",     "-": "45",    
      ".": "46",     "/": "47",     "0": "48",     "1": "49",     "2": "50",    
      "3": "51",     "4": "52",     "5": "53",     "6": "54",     "7": "55",    
      "8": "56",     "9": "57",     ":": "58",     ";": "59",     "<": "60",    
      "=": "61",     ">": "62",     "?": "63",     "@": "64",     "A": "65",    
      "B": "66",     "C": "67",     "D": "68",     "E": "69",     "F": "70",    
      "G": "71",     "H": "72",     "I": "73",     "J": "74",     "K": "75",    
      "L": "76",     "M": "77",     "N": "78",     "O": "79",     "P": "80",    
      "Q": "81",     "R": "82",     "S": "83",     "T": "84",     "U": "85",    
      "V": "86",     "W": "87",     "X": "88",     "Y": "89",     "Z": "90",    
      "[": "91",     "\\": "92",    "]": "93",     "^": "94",     "_": "95",    
      "`": "96",     "a": "97",     "b": "98",     "c": "99",     "d": "100",    
      "e": "101",    "f": "102",    "g": "103",    "h": "104",    "i": "105",    
      "j": "106",    "k": "107",    "l": "108",    "m": "109",    "n": "110",    
      "o": "111",    "p": "112",    "q": "113",    "r": "114",    "s": "115",    
      "t": "116",    "u": "117",    "v": "118",    "w": "119",    "x": "120",    
      "y": "121",    "z": "122",    "{": "123",    "|": "124",    "}": "125",    
      "~": "126",    "": "127"
      }
  
      let arr = Array.from(letter)
      let summ = 0
  
      if (arr.length == 0) {
        console.log(null)
      } else {
          for (let i = 0; i < arr.length; i++) {
                let temp = +ascii[arr[i]]
                summ += temp
          }
      }
      
      console.log(summ) 
  }
  
  function code1 (letter) {
    let arr = Array.from(letter)
    let summ = 0
  
    console.log(arr)
  
    if (arr.length == 0) {
      console.log('null')
    } else {
      for (let i = 0; i < arr.length; i++) {
        let temp = +arr[i].charCodeAt()
        summ += temp
        console.log(typeof temp)
      }
    }
  
    console.log(summ)
  }
  
  code('a')
  code1('12')
  
  function correct(string) {
    const correctInput = {
      "0" : "O",
      "5" : "S",
      "1" : "I"
    }
  
    let town = []
  
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== "0" && string[i] !== "5" && string[i] !== "1") {
        town.push(string[i])
      } else 
        town.push(correctInput[string[i]])
      
    }
    
      console.log(town.join(''))
  }
  
  correct('51NGAP0RE')
  
  function howMuchILoveYou(nbPetals) {
    const exp = {
      1 : "I love you",
      2 : "a little",
      3 : "a lot",
      4 : "passionately",
      5 :  "madly",
      6 : "not at all",
    }
  
    if (nbPetals <= 0) {
      console.log('null')
    } else if (nbPetals > 6 && nbPetals % 6 !== 0) {
      nbPetals = nbPetals - (Math.floor(nbPetals / 6) * 6) 
      console.log(nbPetals)
      console.log(exp[nbPetals])
    } else if (nbPetals % 6 == 0) {
      console.log(exp[6])
    }
    
    else {
      console.log(exp[nbPetals])
    } 
    
    
  }
  
  howMuchILoveYou(324) 
  
  
  function peopleWithAgeDrink(old) {
  
    if (old < 14) {
      console.log("toddy")
    } else if (old > 13 && old < 18) {
      console.log("coke")
    } else if (old > 17 && old < 21) {
      console.log("beer")
    } else console.log('whisky')
    
  
  }
  
  peopleWithAgeDrink(18)
  
  
  function switchItUp (number) {
    const num = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
  
    for (let i = 0; i < num.length; i++) {
      if (number == i) {
        console.log(num[i])
      } 
    }
  
  }
  
  switchItUp(1)
  
  
  function rentalCarCost (d) {
    
    const cost = 40 
    const discont1 = 50
    const discont2 = 20 
  
    let summ = d >= 7 ? d * cost - discont1 : d >= 3 ? d * cost - discont2 : d * cost
  
    console.log(summ)
  
  
  }
  
  rentalCarCost(2)
  rentalCarCost(4)
  
  
  function getAge(inputString){
  
    console.log(parseInt(inputString, 10))
    
  
  }
  
  getAge("4 years old") 
  getAge("years 4 old") // Если первый символ не число то вернется  NaN
  
  
  function isDivideBy(number, a, b) {
    
    let answ = number % a == 0 && number % b == 0 ? true : false
    console.log(answ)
  
  }
  
  isDivideBy(12, 2, 6)
  
  
  
  function bmi(weight, height) {
   
    let bmi = weight / height**2
    let answ = bmi <= 18.6 ? 'Underweight' :
               bmi <= 25.0 ? 'Normal' : 
               bmi <= 30.0 ? 'Overweight' : 'Obese'
               
  
    console.log(answ)
    
  
  }
  
  bmi(80, 1.80)
  
  
  function century(year) {
    
    let answ = year % 100 == 0 ? Math.floor(year / 100) : Math.floor((year / 100) + 1) 
  
    console.log(answ)
  }
  
  
  century(1705)
  century(576780)
  
  
  function stringToNumber(str){
  
    console.log(+str)
  
  }
  
  stringToNumber("1234")
  
  function makeNegative(num) {
  
    console.log(+(`-${Math.abs(num)}`))
  }
  
  makeNegative(-9)
  
  
  function expressionMatter(a, b, c) {
    const arr = [
      a * (b + c), 
      a * b * c,
      a + b * c, 
     (a + b) * c,
      a + b + c
    ]
              
    console.log(Math.max.apply(null, arr))
              
  
  }
  
  expressionMatter(6, 1, 8)
  
  function even_or_odd(number) {
    return number % 2 == 0 ? 'Even' : 'Odd'
  }
  
  even_or_odd(2)
  
  
  function opposite(number) {
    
    let answ = Math.sign(number) == 1 ? -number : Math.abs(number)
  
    console.log(answ)
  
  }
  
  opposite(-2)
  
  function summation(num) {
    let i = 1
    let summ = 0
  
    do {
      summ = summ + i;
      i = i + 1;
    } while (i <= num)
  
    console.log(summ)
  }
  
  summation(5)
  
  
  function repeatStr (n, s) {
  
    let ac = []
    
    for (let i = 1; i <= n; i++) {
      ac.push(s)
      
    }
  
    console.log(ac.join(''))
  }
  
  
  repeatStr(3, "*")
  
  function removeChar(str){
  
    let arr = str.split('')
    arr.shift()
    arr.pop()
  
    
    console.log(arr)
   
  };
  
  removeChar('eloquent')
