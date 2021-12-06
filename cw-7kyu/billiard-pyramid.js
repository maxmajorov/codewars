function pyramid(balls) {
    let row = 0
    let temp = 0

    do {

        if (balls > 0) {
            temp = temp + 1
            balls = balls - temp
            row += 1
            
            if (balls < 0) {
                row = row-1
            }
    } 
  
    } while (balls > 0)

    return row
}
