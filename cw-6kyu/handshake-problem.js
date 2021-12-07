// Рукопожатия => количество человек. 
// Решал через квадратичное уравление. Дискриминант и т.п.

function getParticipants(handshakes){
  
    // n(n - 1) = handshakes * 2 => n ** 2 - n - 2 * handshakes
    // D = b ** 2 - 4 * a * c
  
    let d = (-1) ** 2 - 4 * 1 * (- 2 * handshakes)
  
    // d > 0 => x = (-b - sqrt(d)) / 2 * a
  
    let x = Math.ceil(Math.abs((-1 - Math.sqrt(d)) / 2 * 1))
  
    return x
}