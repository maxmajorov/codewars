export function getGrade(a: number, b: number, c: number): string {

    let num: number = (a + b + c) / 3
    
    return num >= 90 ? 'A' :
           num < 90 && num >= 80 ? 'B' :
           num < 80 && num >= 70 ? 'C' :
           num < 70 && num >= 60 ? 'D' : 'F' 
  
}