function add(num1, num2) {
    let arrSum = []

    let arr1 = num1.toString().split('').reverse()
    let arr2 = num2.toString().split('').reverse()    
    let max = Math.max(arr1.length, arr2.length)
    
    if (arr1.length < arr2.length) {
        [arr1, arr2] = [arr2, arr1]
    }

    for (let i = 0; i < max; i++) {
        arrSum.push(+arr1[i] + (parseInt(arr2[i]) || 0))
    }

    return +arrSum.reverse().join('')
}