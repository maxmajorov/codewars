function accum(s: string): string {
    let arr: Array<string> = s.split('')

    return arr.map((el, ind) => (el.toUpperCase() + el.toLowerCase().repeat(ind))).join("-")
}