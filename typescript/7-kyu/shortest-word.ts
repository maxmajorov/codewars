export function findShort(s: string): number {

    let wLength: Array<number> = []
    const arr: Array<string> = s.split(' ')
    
    arr.forEach(el => wLength.push(el.length))
    
    return Math.min.apply(null, wLength)
}