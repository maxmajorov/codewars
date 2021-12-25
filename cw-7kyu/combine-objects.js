function combine(objA, objB, objC, objD) {
    let arg = [...arguments]
    let combo = {}
 
    for (let i = 0; i < arg.length; i++) {
        for (key in arg[i]) {
            if (!combo[key]) {
                combo[key] = arg[i][key]
            } 
            else combo[key] +=  arg[i][key]
       }
    }
    return combo
}