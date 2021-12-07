// 312 => 333122

function explode(s) {
    let arr = []
    let a = s.split('')

    for (let i = 0; i < a.length; i++) {
        for (let k = 0; k < a[i]; k ++) {
            arr.push(a[i])
        }
    }

    return arr.join('')

}