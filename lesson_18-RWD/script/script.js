const burgerMenu = document.querySelector('.header__burger');
const listHeader = document.querySelector('.header__list');

  burgerMenu.addEventListener("click", function() {
    burgerMenu.classList.toggle('header__burger-click');
    listHeader.classList.toggle('header__list-click');
    
    
  });

  // дз по js 1

const p = 3.14;

const name = prompt('як тебе звати,Вова?', 'імя');
const age = prompt('скільки тобі років?', '18');
const line = 4 * parseInt(prompt('Введи сторону квадрату в см', '1см'));
const radius = p * (parseInt(prompt('Введи радіус кола в см', '2см')) ** 2);
alert(`Тебе звати ${name},тобі ${age} років!Сторона квадрату ${line}см, радіус кола:${radius} см`);

const time = parseInt(prompt('ку,за скільки часу ти плануєш до Москви дойти?', '1 год'));
const distance = parseInt(prompt('яка відстань', '1000км'));
alert((time / distance) + 'км / год' );

// дз по js 2

// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
 const numFloat = (0.1*10 + 0.2*10) / 10;
 console.log(numFloat);


//  Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
 const stringOne = '1';
 const numTwo = 2;
 const rewult = parseInt(stringOne) + numTwo;
 console.log(rewult);

//  Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
const gb = parseFloat(prompt('Введіть обсяг флешки в Гб?', '1.8Гб'));
const fileSize = 870;
const file = Math.floor((gb * 1000) / fileSize);
console.log(`на вашу флешку помістится ${file} файли`);

// Користувач вводить суму грошей в гаманці і ціну однієї 
// шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

const money = parseFloat(prompt('Введіть кількість гривень у вас в гаманці', '12.5Гр'));
const chocolatePrise = 12;
const handing  = money % chocolatePrise;
console.log(handing);
const chocolate = (money / chocolatePrise) - handing;
console.log(money / chocolatePrise);
console.log((money / chocolatePrise) - handing);
console.log("Кількість шоколадок: " + chocolate + ", Здача: " + handing);








