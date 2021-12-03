function decode(message){

    const letters = {
    'a' : 'z',  'z' : 'a',
    'b' : 'y',  'y' : 'b',
    'c' : 'x',  'x' : 'c',
    'd' : 'w',  'w' : 'd',
    'e' : 'v',  'v' : 'e',
    'f' : 'u',  'u' : 'f',
    'g' : 't',  't' : 'g',
    'h' : 's',  's' : 'h',
    'i' : 'r',  'r' : 'i',
    'j' : 'q',  'q' : 'j',
    'k' : 'p',  'p' : 'k',
    'l' : 'o',  'o' : 'l',
    'm' : 'n',  'n' : 'm',
    ' ' : ' ',
    }
  
    let arrLetters = message.split('')
    
    return arrLetters.map(el => el = letters[el]).join('')
        
}