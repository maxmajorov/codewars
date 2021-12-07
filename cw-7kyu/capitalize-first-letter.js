//Замена первой буквы каждого слова на заглавную

function toJadenCase(str) {

    return str.replace(/(^\w|\s\w)/g, m => m.toUpperCase())
    
}