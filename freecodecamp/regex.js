// https://regex101.com/ - составление и проверка регулярных выражений

// OR | 

// test - ищет совпадения и возвращает true / false

// i - игнорирует регистр
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; 
let result = fccRegex.test(myString);

// match - извлечение подстроки
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex); 

// g - глобальный поиск (поиск по всей строке)
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; 
let result = twinkleStar.match(starRegex); 

// . (dot, period) - подстановочный знак, заменяет один символ
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; 
let result = unRegex.test(exampleStr);

// [abc] => /s[uo]n/ - символы на выбор
// /[aeoui]/g- найдет все глассные

// [a-e] - сопоставление диапазона символов от a до e
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // сопоставит все буквы
let result = quoteSample.match(alphabetRegex); 

// [0-9] - диапазон цифр, также можно комбинировать с букавами [a-f2-9]
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; 
let result = quoteSample.match(myRegex);

// ^ - набор символов с отридцанием [^aeoui] => все кроме указанных
let quoteSample = "3 blind mice.";
let myRegex = /[^aeoui0-9]/gi;
let result = quoteSample.match(myRegex); 

// + сщщтветствует символам, встречающися один или более раз (вернет как один элемент) 
let difficultSpelling = "Mississippi";
let myRegex = /[s+]/gi; 
let result = difficultSpelling.match(myRegex);
//вернется ['ss', 'ss']

// * - соответствует символам, встречающимся ноль или более раз.
let chewieRegex = 'Aaaaaaaaaaaaaaaarh'
let chewieRegex = /Aa*/;
let result = chewieQuote.match(chewieRegex);

// * - жадный поиск => вернет максимально возможную длину подстроки
// ? - ленивый поиск =>  вернет минимально возможную длину подстроки

// 'titanic' * => /t[a-z]*i/ return titani
//           ? => /t[a-z]*?i/ return ti
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.[0-9]*?>/; 
let result = text.match(myRegex)
//вернет <h1>

// ^ - совпадения в начале строки /^Hello/
// $ - совпадения в конце строки /world$/

// \w === [A-Za-z0-9_]
// \W === [^A-Za-z0-9_] - все кроме
// \d === [0-9]
// \D === [^0-9] - все кроме


// 1. Имена пользователей могут использовать только буквенно-цифровые символы.

// 2. Единственные цифры в имени пользователя должны быть в конце. В конце их может 
// быть ноль или больше. Имя пользователя не может начинаться с цифры.

// 3. Буквы имени пользователя могут быть строчными и прописными.

// 4. Имя пользователя должно быть не менее двух символов. Двухсимвольное имя пользователя 
// может использовать только буквы алфавита в качестве символов.

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/gi;
let result = userCheck.test(username);

// \s - ищет пробелы
// \S - все кроме пробелов
// [ \r\t\f\n\v]













