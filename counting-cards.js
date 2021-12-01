// Counting
// +1	    2, 3, 4, 5, 6
//  0   	7, 8, 9
// -1	    10, 'J', 'Q', 'K', 'A'

let count = 0;

function cc(card) {

    switch(card) {
        case 2 :
        case 3 :
        case 4 :
        case 5 :
        case 6 : count += 1
        break
        case 7 :
        case 8 : 
        case 9 : count = count
        break 
        case 10 : 
        case 'J' :
        case 'Q' : 
        case 'K' : 
        case 'A' : count -= 1
  }

    return count > 0 ? count + ' Bet' : count + ' Hold'  
}

cc(2); 
cc(3); 
cc(7); 
cc('K'); 
cc('A');