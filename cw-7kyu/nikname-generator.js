//Никнейм генератор

function nicknameGenerator(name){

    return (name.length > 3 && /[aoeiu]/gi.test(name[2])) ? name.slice(0, 4) : 
           (name.length > 3) ? name.slice(0, 3) : 
           'Error: Name too short'
  }
     
  //   if (name.length > 3 && /[aoeiu]/gi.test(name[2])) {
  //     return name.slice(0, 4)
  //   } else if (name.length > 3) {
  //     return name.slice(0, 3)
  //   } else return "Error: Name too short"