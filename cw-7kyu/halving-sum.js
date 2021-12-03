
function halvingSum(n) {
    let summ = 0
    
    while (n !== 0) {
        summ += n;
        n = Math.floor(n / 2);
    }

    return summ
}

halvingSum(25)