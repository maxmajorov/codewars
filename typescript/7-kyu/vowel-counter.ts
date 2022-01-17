function getCount(str: string): number {
    
    const regex = new RegExp(/[aeoui]/gi)
    let arr: any = str.match(regex)  // без указания any не работает???
    
    return arr === null ? 0 : arr.length
}
