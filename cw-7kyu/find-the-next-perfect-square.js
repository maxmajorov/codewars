function findNextSquare(sq) {
    let a = Math.sqrt(sq)

    return a % 1 == 0 ? (a + 1) ** 2 : -1
}