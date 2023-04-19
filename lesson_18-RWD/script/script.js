const p = 3.14;

// const name = prompt('як тебе звати,Вова?', 'імя');
// const age = prompt('скільки тобі років?', '18');
// const line = 4 * parseInt(prompt('Введи сторону квадрату в см', '1см'));
// const radius = p * (parseInt(prompt('Введи радіус кола в см', '2см')) ** 2);
// alert(`Тебе звати ${name},тобі ${age} років!Сторона квадрату ${line}см, радіус кола:${radius} см`);

// const time = parseInt(prompt('ку,за скільки часу ти плануєш до Москви дойти?', '1 год'));
// const distance = parseInt(prompt('яка відстань', '1000км'));
// alert((time / distance) + 'км / год' );

const burgerMenu = document.querySelector('.header__burger');
const listHeader = document.querySelector('.header__list');

  burgerMenu.addEventListener("click", function() {
    burgerMenu.classList.toggle("header__burger-click");
    listHeader.classList.toggle('header__list-click');
    
    
  });





