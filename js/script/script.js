//№1 Сделайте калькулятор, который будет находить площадь и периметр квадрата.

function perimeterArea(side) {
  const area = Math.pow(side, 2);
  const perimeter = 4 * side;
  const str = `№1 Perimeter of the square = ${perimeter} см\nSquare area = ${area} см`;
  return str;
}

console.log(perimeterArea(3));

//№2 Cделайте калькулятор, который будет находить площадь круга.

function circleArea(radius) {
  const area = Math.trunc(Math.PI * Math.pow(radius, 2));
  const str = `№2 circle area = ${area} см`;
  return str;
}

console.log(circleArea(2));

//№3 Сделайте калькулятор, который будет находить площадь треугольника по трем сторонам.

function triangleArea(sideA, sideB, sideC) {
  const halfPerimeter = (sideA + sideB + sideC) / 2;
  const area = Math.sqrt(halfPerimeter * (halfPerimeter - sideA) * (halfPerimeter - sideB) * (halfPerimeter - sideC));
  const str = `№3 triangle area = ${area} см`;
  return str;
}

console.log(triangleArea(10, 17, 21));

//№4  0.1 + 0.2.

const sumNum = +(0.1 + 0.2).toFixed(4);
console.log(`№4 0.1 + 0.2 = ${sumNum}`);

//№5 Користувач вводить суму вкладу в банк на 2 місяці,
// з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
// 0.05 це х в 12 степені,треба х підвести до 12 корення і помножити на два

function deposit(investment) {
  const interestRate = 0.05;
  const depositAmount = investment * Math.pow(1 + interestRate / 12, 2);
  return `№5 deposit amount = ${depositAmount.toFixed(2)} грн`;
}

console.log(deposit(1000));

//№6 Запитай у користувача тризначне число і виведи його задом наперед.

const numReverse = (number) => +(String(number).split("").reverse().join(''));
console.log(`№6 ${numReverse(123)}`);

//lesson 31 ЦИКЛИ ТА УМОВИ
//№7  Даны переменные test1 и test2. Проверьте, равны ли их значения и выведите соответствующее сообщение.

const test1 = Math.trunc(100 * Math.random());
const test2 = Math.trunc(100 * Math.random()) + 1;
let operator = '';
if (test1 === test2) {
  operator = '=';
} else if (test1 > test2) {
  operator = '>';
} else if (test1 < test2) {
  operator = '<';
}
console.log(`№7 ${test1} ${operator} ${test2}`);

//№8  Дано число, например, 12345. Проверьте, что первым символом этого числа является цифра 1, 2 или 3. 
//  Если это так - выведите 'да', в противном случае выведите 'нет'.
const number = 12345;

if (number[0] === 1 || number[0] === 2 || number[0] === 3) {
  console.log('yes');
} else console.log('№8 yes');

//№9 Дано трехзначное число. Найдите сумму цифр этого числа.

function sumNumber(threeDigitNum) {
  threeDigitNum = String(123);
  let element = 0;

  for (let i = 0; i < threeDigitNum.length; i++) {
    element += +threeDigitNum[i];
  }
  return element;
}

console.log(`№9 ${sumNumber(312)}`);

//№10 Дано число из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. 
//Если это так - выведите 'да', в противном случае выведите 'нет'.

function sixNum(number) {
  const num1 = String(number).slice(3);
  const num2 = String(number).slice(0, 3);
  let SumNum1 = 0;
  let SumNum2 = 0;

  for (let i = 0; i < 3; i++) {
    SumNum1 += +num1[i];
    SumNum2 += +num2[i];
  }

  return +SumNum1 === +SumNum2;
}

console.log(`№10 ${sixNum(123321)}`);

//№11 Перепишите следующий код через switch-case:
// let lang = 'ru';

// if (lang == 'ru') {
// 	console.log('рус');
// } else if (lang == 'en') {
// 	console.log('анг');
// } else if (lang == 'de') {
// 	console.log('нем');
// } else {
// 	console.log('язык не поддерживается');
// }

const lang = 'de';

switch (lang) {
  case 'ru':
    console.log('№11 рус');
    break;

  case 'en':
    console.log('№11 анг');
    break;

  case 'de':
    console.log('№11 нем');
    break;

  default:
    console.log('язык не поддерживается');
    break;
}

//№12  Перепишите следующий код через тернарный оператор:

// let num = 1;
// let res;

// if (num >= 0) {
// 	res = '1';
// } else {
// 	res = '2';
// }

// console.log(res);

const num = -1;
let res;

const ternaryOperator = num >= 0 ? res = '1' : res = '2';
console.log(`№12 ${ternaryOperator}`);

//№13 Дано число. Проверьте, что оно делится на 3.

function remainder(num) {
  if (!(num % 3)) {
    console.log(`№13 ${num} ділится на 3`);
  } else console.log(`№13 ${num} не ділится на 3`);
}

remainder(99);

//№14 Как известно, четные числа делятся на 2 без остатка, а нечетные - с остатком. Пусть у вас дано число.
// С помощью оператора % и конструкции if проверьте четное это число или нет.

function couplesNum(num) {
  if (!(num % 2)) {
    console.log(`№14 ${num} парне`);
  } else console.log(`№14 ${num} непарне`);
}

couplesNum(98);

//№15 Выведите в консоль все элементы следующего массива: let arr = ['a', 'b', 'c', 'd', 'e'];

const arr = ['a', 'b', 'c', 'd', 'e'];

for (let elem of arr) {
  console.log(`№15 ${elem}`);
}

//№16 цикл for-in
const obj = { name: 'oleg', age: 18, growth: 175 };
let keysStr = '';
let valueStr = '';

for (key in obj) {
  keysStr += key + ' ';
  valueStr += obj[key] + ' ';
}
console.log(`№16 Object keys : ${keysStr.trim()};\nObject values: ${valueStr.trim()};`);

//№17 Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000. 
//Какое число получится? Посчитайте количество итераций, необходимых для этого.

function multiplication(num) {
  let i = -1;
  while (num < 1000) {
    num *= 3;
    i++;
  }
  num /= 3;
  return { iteration: i, number: num };
}

console.log(`№17 ${JSON.stringify(multiplication(100))}`);

//№18 Дан массив с числами. Переберите его циклом и в каждой итерации цикла 
//выведите сумму предыдущего, текущего и следующего элементов массива.

let arrSum = [];

for (let i = 0; i < 9; i++) {
  arrSum.push(Math.trunc(100 * Math.random()) + 1);
}

for (let i = 1; i < arrSum.length - 1; i++) {
  const elem = arrSum[i--] + arrSum[i] + arrSum[i++];
  console.log(`№18 ${elem}`);
  console.log(arrSum[i--], arrSum[i], arrSum[i++]);
}

//lesson 34 МАСИВИ
//№19 Выведите с помощью этого массива let arr = ['a', 'b', 'c', 'd']; следующую строку: 'a+b+c+d'

function splitString(stringToSplit, separator) {
  console.log('№№19 Arr has: ' + stringToSplit.length + ' elements: ' + stringToSplit.join('+'));
}

const arrInStr = ['a', 'b', 'c', 'd'];

splitString(arrInStr);

//№20 Пусть дан такой массив: let arr = [1, 2, 3]; Добавьте ему в конец элементы 4 и 5.

const arrAddEnd = [1, 2, 3];
arrAddEnd.push(4);
arrAddEnd.push(5);
console.log(`№20 ${arrAddEnd}`);

//№21 Дан массив: let arr = ['a', 'b', 'c', 'd', 'e']; 
//Удалите из него два элемента. Проверьте, какое станет значение свойства length после этого.
const arrDel = ['a', 'b', 'c', 'd', 'e'];
delete arrDel[1];
delete arrDel[2];
console.log(`№21 ${arrDel}`);

//lesson 33 OBJ
//№22 Создайте объект date с ключами 'year', 'month' и 'day' и значениями, соответствующими текущему дню. 
//Выведите созданную дату на экран в формате год-месяц-день.

const objDate = { '1year': 2023, month: 4, day: 24 };
objDate.week = 4;
console.log(`№22 ${objDate['1year']}-0${objDate.month}-${objDate.day} week:${objDate.week};`);

//№23 Найдите количество элементов в следующем объекте: let obj = {x: 1, y: 2, z: 3} + масив це обєкт через typeof;
const objLenght = { x: 1, y: 2, z: 3 };
console.log(`№23 ${Object.keys(objLenght).length}`);
console.log(`№23 ${Object.keys(objLenght)}`);

const arrObj = [];
console.log(`№23 ${typeof arrObj}`);
console.log(`№23 ${Array.isArray(arrObj), Array.isArray({})}`);

//№24 Перевірити обєкт на ключ
console.log(`№24 ${'x' in objLenght}`);
console.log(`№24 ${'a' in objLenght}`);

//Многомерность
//№25 let arr = [[1, 2], [3, 4], [5, 6]]; Обращаясь к каждому элементу массива найдите сумму всех его элементов.

const arrLot = [[1, 2], [3, 4], [5, 6]];
let sumArrLot = 0;

for (let elem of arrLot) {
  for (let element of elem) {
    sumArrLot += element;
  }
}

console.log(`№25 ${sumArrLot}`);

//№26 let arr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]]; Вручную, без цикла, найдите сумму элементов этого массива.

const arraySum = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];
const handArraySum = arraySum[0][0] + arraySum[0][1] + arraySum[0][2] + arraySum[0][3][0] +
  arraySum[0][3][1] + arraySum[0][3][2][0] + arraySum[0][3][2][1] + arraySum[1][0] + arraySum[1][1][0] + arraySum[1][1][1];
console.log(`№26 ${handArraySum}`);

//№27 Дан следующий массив работников: выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет.

const employees = [
  {
    name: 'name1',
    salary: 300,
    age: 28,
  },
  {
    name: 'name2',
    salary: 400,
    age: 29,
  },
  {
    name: 'name3',
    salary: 500,
    age: 30,
  },
  {
    name: 'name4',
    salary: 600,
    age: 31,
  },
  {
    name: 'name5',
    salary: 700,
    age: 32,
  },
];

function salaryEmployees(arr) {
  for (let elem of arr) {
    if (elem.age >= 30) console.log(`№27 ${elem.salary}`);
  }
}

salaryEmployees(employees)
