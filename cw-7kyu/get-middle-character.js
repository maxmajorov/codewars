// Найти среднюю букву в слове. Если четное количество букв => две средние, 
                                         //   если нечетное => одну среднюю 

function getMiddle(s) {
  
    return s.length % 2 == 0 ? `${s[s.length * 0.5 - 1]}${s[s.length * 0.5]}` :
                                s[Math.round(s.length * 0.5 - 1)]
    
  }