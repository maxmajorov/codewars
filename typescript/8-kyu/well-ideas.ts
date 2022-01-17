export function well(x: string[]): string{

    let count: number = 0
    
    x.forEach(el => {
        if (el === 'good') {
            count++
        }
    })
    
    return count > 0 && count <= 2 ? 'Publish!' : 
            count > 2 ? 'I smell a series!' : 'Fail!'
}