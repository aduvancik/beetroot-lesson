// https://www.codewars.com/kata/6066ae080168ff0032c4107a/train/javascript

// function maxSumBetweenTwoNegatives(a) {
//   let arr = [];
//   let sum = [];

//   a.forEach((element,i) => {
//     if(element < 0) {
//       arr.push(i);//отриуєм масив індексів всіх відємних чисел
//     }
//   });
//     if(arr.length <= 1) {return -1;}
//   for (let i = 0; i < arr.length; i++) {//проходимся по масиву з індексами всіх відємних чисел

//     if((arr[i + 1] == undefined)){
//       // if(Math.max.apply(null, sum) == 0) {return 0;}
//       return Math.max.apply(null, sum);//якщо наступного індекса в масиві немає повернути найбільшу суму і якщо сума не пуста
//     } 
//     sum.push(a.slice(arr[i] + 1, arr[i + 1]).reduce((acc, curr) => acc + curr, 0));//масив з сумами
//   }
// }

// console.log(maxSumBetweenTwoNegatives([10,0,0,-8,-9,11,-9, -11, -8, -10,-9,4]));


//https://www.codewars.com/kata/643af0fa9fa6c406b47c5399/discuss
//дано дві координати, визнати в якому квадраті на координатній площині я знаходжусь

// function quadrant(x, y) {
//   if (x > 0 && y > 0) return 1;
//   if (x < 0 && y < 0) return 3;
//   if (x < 0 && y > 0) return 2;
//   return 4 ;
// }

// function quadrant(x, y) {
//   return x > 0 ? y > 0 ? 1 : 4 : y > 0 ? 2 : 3;//коротший фаріант
// }

// console.log(quadrant(19,-56));
//return (ZN1) ? (ZN2) ? ZN1ZN2 : zn1 : (zn2) ? zn2 : false;


//https://www.codewars.com/kata/5d59576768ba810001f1f8d6

// function quadratic(x1, x2){
//   const b = x1 + x2,c = x1 * x2;
//   return [1, -b, c];
// }


//https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
//true якщо за 10 кроків повернуся на своє місце, йдучи в напрямках n s w e

// function isValidWalk(walk) {
//   let ns=0,we=0;
//   walk.forEach(function(item){
//     switch(item){
//     case 'n': ns++;
//     break;
//     case 's': ns--;
//     break;
//     case 'w': we++;
//     break;
//     case 'e': we--;
//     break;
//     }});
//   return ns === 0 && we === 0 && walk.length === 10;
// }
// console.log(isValidWalk(['e','w','s','n','s','n','s','n','s','n']));


//https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript
//сума останніх трьох елементів в масиві signature в кінець масиву записати,за n іттерацій,якщо n = 0 пустий масив,якщо n = 1, [1]

// function tribonacci(signature,n){
//   for(let index = 3;index <= n -1;index++){
//     const length = signature.length;
//     signature.push(signature[length -1] + signature[length - 2] + signature[length - 3])
//   }
//   if(n === 1) return [1];
//   else if(n === 0) return [];
//   return signature;
// }

// console.log(tribonacci([ 3, 2, 1 ], 0));


// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript
//сума двох найменших чисел в масиві

// function sumTwoSmallestNumbers(arr) {
//   const min = Math.min(...arr);
//   arr.splice(arr.lastIndexOf(Math.min(...arr)),1)
//   return min + min;

// }
// console.log(sumTwoSmallestNumbers([ 5, 8, 12, 19, 22 ]));


//https://www.codewars.com/kata/562e6df5cf2d3908ad00019e/train/javascript
// function separateLiquids(glass) {
  //заміняєм літери цифрами
  // let sortedGlass = glass.join(' ').replace(/[O]/g,4).replace(/[A]/g,3).replace(/[W]/g,2).replace(/[H]/g,1).split('');

  //повертаєм масив з відсортованими цифрами
  // sortedGlass = sortedGlass.sort().reverse();
  // indexComma = sortedGlass.indexOf(',');
  // sortedGlass.splice(indexComma,sortedGlass.length - 1);//видалив всі коми

  //заміняєм цифри літерами
//   sortedGlass = sortedGlass.join('').replace(/[4]/g,'O').replace(/[3]/g,'A').replace(/[2]/g,'W').replace(/[1]/g,'H').split('');  
  
//   //розбиваєм один масив на чотири
//   let iterator = 0;
//   for (let index = 0; index < glass.length; index++) {
//     for (let indexIn = 0; indexIn < glass[index].length; indexIn++) {
//       glass[index][indexIn] = sortedGlass[iterator];
//       iterator++;
//     }
//   }

//   return glass;
//   }

// console.table(separateLiquids([ [ 'A', 'A', 'O', 'H' ],
//                                 [ 'A', 'H', 'W', 'O' ],
//                                 [ 'W', 'W', 'A', 'W' ],
//                                 [ 'H', 'H', 'O', 'O' ] ]));

//lesson  32 function
//Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. 
//Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

// function perfectNumber(number) {
//   let sum = 0;
//   for (let index = 1; index < number; index++) {
//     if(number % index === 0) {
//       sum +=index;
//     }
    
//   }
//   return sum === number;
// }

// console.log(perfectNumber(28));