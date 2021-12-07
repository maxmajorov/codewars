//Убирает глассные буквы из предложения

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '')
}