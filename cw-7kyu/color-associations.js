function colourAssociation(array){
    let arr = []

    for (let i = 0; i < array.length; i++) {
        let obj = {}
        for (let k = 0; k < 1; k++) {
            obj[array[i][0]] = array[i][1]
        }
        arr.push(obj)
        
    }
    
    return arr 
}