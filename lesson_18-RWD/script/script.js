const p = 3.14;

let name = prompt('як тебе звати,Вова?', 'імя');
let age = prompt('скільки тобі років?', '18');
let line = 4 * parseInt(prompt('Введи сторону квадрату в см', '1см'));
let radius = p * (parseInt(prompt('Введи радіус кола в см', '2см')) ** 2);

alert(`Тебе звати ${name},тобі ${age} років!Сторона квадрату ${line}см, радіус кола:${radius} см`);

let time = prompt('ку,за скільки часу ти плануєш до Москви дойти?', '1 год');

