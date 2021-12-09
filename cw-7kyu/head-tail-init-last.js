// | HEAD | <----------- TAIL ------------> |
// [  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
// | <----------- INIT ------------> | LAST |

function head(array) {
    return array[0]
}

function tail(array) {

    if (array.length == 1) {
        return []
    } else {
        return array.filter((el, ind) => ind > 0)
    }
    
}

function init(array) {
    if (array.length == 1) {
        return []
    } else {
        return array.filter((el, ind, array) => ind < array.length - 1)
    }
}

function last(array) {
    return array[array.length - 1]
}