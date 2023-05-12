const playList = [
  {author: "LED ZEPPELIN", song: "STAIRWAY TO HEAVEN"},
  {author: "QUEEN", song: "BOHEMIAN RHAPSODY"},
  {author: "LYNYRD SKYNYRD", song: "FREE BIRD"},
  {author: "DEEP PURPLE", song: "SMOKE ON THE WATER"},
  {author: "JIMI HENDRIX", song: "ALL ALONG THE WATCHTOWER"},
  {author: "AC/DC", song: "BACK IN BLACK"},
  {author: "QUEEN", song: "WE WILL ROCK YOU"},
  {author: "METALLICA", song: "ENTER SANDMAN"},
];

const list = document.querySelector(".dom-list");
const modalWindow = document.querySelector(".modal-window");
const buttonOpen = document.querySelector(".open");
const buttonClose = document.querySelector(".close");

const showList = () => {
  playList.forEach(element => {
    const itemList = document.createElement("li");
    itemList.innerHTML = `author: "${element.author}", song: "${element.song}"` ;
    list.appendChild(itemList);
  });
};

showList();

const showModalWindow = () => modalWindow.classList.toggle("modal-window-open"); 

buttonOpen.addEventListener('click', showModalWindow);
buttonClose.addEventListener('click', showModalWindow);

const buttonShowColor = document.querySelector(".show-color");
const trafficLights = document.querySelectorAll(".traffic-lights__container li");
let indexColor = 0;

buttonShowColor.addEventListener('click',() => {
  indexColor !== 0 ? trafficLights[indexColor - 1].classList.toggle("showColor") : trafficLights[2].classList.remove("showColor");
  trafficLights[indexColor].classList.toggle("showColor");
  indexColor == 2 ? indexColor = 0 : indexColor++;
} );



