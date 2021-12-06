function squareDigits(num){
    return +num.toString().split('').map(el => el ** 2).join('')
}