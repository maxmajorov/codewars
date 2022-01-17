export function DNAtoRNA(dna: string): string {
  
    let rna: Array<string> = []
    
    for (let i = 0; i < dna.length; i++) {
      if (dna[i] !== 'T') {
        rna.push(dna[i])
      } else if (dna[i] == 'T') {
        rna.push('U')
      }
    }
    
    return rna.join('')
}