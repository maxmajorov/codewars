function myLanguages(results) {
    let res = []
    let sort = Object.entries(results).sort((a, b) => b[1] - a[1])
  
    sort.forEach(el => {
      if (el[1] >= 60) {
        res.push(el[0])
      }
    })
    
    return res
}