const menuBody = document.querySelector('.menu');

document.addEventListener('mousemove', menu);

function menu(event) {
  menuBody.innerHTML = `${menuBody.innerHTML}x - ${event.clientX} <br />y - ${event.clientY}`;
  if(event.target.closest('.menu__button')) {
    menuBody.classList.toggle('_active');
  }
  if (!event.target.closest('.menu')){
    menuBody.classList.remove('_active');
  }
};
const link = document.querySelectorAll('.menu__link');
for (let i = 0; i < link.length; i++) {
  
link[i].addEventListener('click',function (event)
{
  link[i].style = "color : red;background : white;";
  // event.preventDefault();
}, {"passive": true });
};





// mausedown / museup
// mauseover
// mousemove
// contextmenu

// click
// dblclock








// function consolee(event) {
//   console.log(event.type);
//   console.log(event.target);
//   console.log(event.currentTarget);
//   console.log(event.clientX);
//   console.log(event.clientY);
// };

// block.addEventListener('click', consolee);
// block.addEventListener('mouseenter', consolee);














// const options = {
//   "capture": false,
//   "once": true,
//   "passive": false
// }
// function log(){
//   console.log('alla');
//   // block.removeEventListener('click', log);
// }
// block.addEventListener('click', log, options);





// function log(){
//   console.log('alla');
// }
// block.addEventListener('click', log);



// block.addEventListener("click", function(e) {
//   console.log('Клик');
// });
// block.addEventListener("click", function() {
//   console.log('Клfк');
// })




// const list = document.querySelector('ul');
// list.insertAdjacentHTML(
// 	'beforeend',
// 	'<li>Текст</li>'
// );
// const body = document.querySelector('.a');
// // 
// const style = (getComputedStyle(body, "::before"));
// const nubme = parseInt(style.fontSize);
// console.dir(body);
// console.log(body.tagName);
// body.setAttribute('href', 'https://www.youtube.com/watch?v=DuWyc76lYC4&list=PLM6XATa8CAG4F9nAIYNS5oAiPotxwLFIr&index=51')

// body.style.cssText = `color:red;
// // 							margin:100px;`;
// for (let i = 0; i < body.length; i++) {
// 	body[i].addEventListener('mousedown', () => {
// 		body[i].style.color='red';
// 		});
// }
// for (let i = 0; i < body.length; i++) {
// 	body[i].addEventListener('mouseup', () => {
// 		body[i].style.color='green';
// 		});
// }
// for (let i = 0; i < body.length; i++) {
// 	body[i].addEventListener('mouseleave', () => {
// 		body[i].style.color='black';
// 		});
// }
// for (let i = 0; i < body.length; i++) {
// 	body[i].addEventListener('mouseenter', () => {
// 		body[i].style.color='white';
// 		});
// }
// const style = getComputedStyle(body[0]);
// console.log(style.fontFamily);
// const textHeader = body.innerHTML = 
// `<header><ul>
// <li>Hello</li>
// <li>my word</li>
// </ul></header>`;
// const ul = body.firstChild.firstChild;
// console.log(ul.textContent);
// ul.textContent = ` ${ul.textContent} text`;
// body.insertAdjacentElement('afterbegin',ul)

// ul.insertAdjacentHTML(
// `afterend`,
// ` <p class="clas">laal<span>elem</span></p>`
// );
// console.log(text);
// text.innerHTML = 
// `<p>${textContent}</p><p>я жиивий <span class="yellow">lala</span></p>`;
// const body = document.head.firstElementChild;
// const body = document.head.parentElement;
// const body = document.body.previousElementSibling;
// const body = document.head.nextElementSibling;
// const text = document.querySelector('.text');
// const textContent = text.innerHTML ;
// console.log(text.textContent);
// text.innerHTML = 
// `<p>${textContent}</p><p>я жиивий <span class="yellow">lala</span></p>`;

