function solution(str, ending){

    return ending.length == 0 ? true :
            str.slice(-ending.length) == ending ? true : false
    
}