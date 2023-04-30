//https://www.codewars.com/kata/5dd462a573ee6d0014ce715b

function characterSymbol(symbol1, symbol2) {
  const letters1 = symbol1.search(/[a-zA-Z]/);
  const letters2 = symbol2.search(/[a-zA-Z]/);

  if (!letters1 && !letters2) {
    return characterCase(symbol1, symbol2);
  } else {

    return letters1 || letters2;
  }
}

function characterCase(letter1, letter2) {
  if (letter1 === letter1.toUpperCase() && letter2 === letter2.toUpperCase()) {

    return 1;
  }
  else if (letter1 === letter1.toLowerCase() && letter2 === letter2.toLowerCase()) {

    return 1;
  } else {

    return 0;
  }
}

// function characterCase(letter1, letter2) {
// const alphabet = ["A","B","C","D","E","F","G","H","I","J","K",
// "L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// if (alphabet.includes(letter1) === alphabet.includes(letter2)) {
//   return 1;
// } 

// return 0;
// }

console.log(characterSymbol('a', 'c'));