let bth = document.querySelector('.bth');
let block = document.querySelector('.using');
let close = document.querySelector('.close');
let skrol;

console.log(block);
bth.onclick = function () {
  block.style = 'transform: scale(1);';
  skrol = document.body.style.overflow = 'hidden';
}
close.onclick = function () {
  block.style = 'transform: scale(0);'
  skrol = document.body.style.overflow = 'scroll';
}