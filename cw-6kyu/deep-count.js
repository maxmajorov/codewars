function deepCount(a){
    let count = 0

    const recursion = arr => {
        count += arr.length 
        for (let i of arr) { 
            if (Array.isArray(i)) { 
                recursion(i) 
            } 
        } 
    } 
    recursion(a) 
    
    return count 
}