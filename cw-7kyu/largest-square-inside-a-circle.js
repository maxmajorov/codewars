function areaLargestSquare(r) {
   // a = c * sin(45), b = c * cos(45)
   // 45deg = PI / 4
   // S = (a * b) / 2
   
   let c = 2 * r
   
   return Math.ceil(c ** 2 * Math.sin(Math.PI / 4) * Math.cos(Math.PI / 4) ) 
}