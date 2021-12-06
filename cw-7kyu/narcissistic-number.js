//Число длинны n которое при сумме цифр в n степени равно самому себе

function isNarcissistic(n){
    let arrNum = n.toString().split('')
    let numPow = arrNum.map(el => el ** arrNum.length).reduce((a, b) => a + b)

    return numPow === n ? true : false

}