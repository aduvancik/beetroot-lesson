const wrapper = document.querySelector(".wrapper");
let text = "123456789A";
let div = document.createElement("div");
let textarea = document.createElement("textarea");

div.classList.add("wrapper__text");
wrapper.appendChild(div);
div.innerText = text;

const save = (element) => {
  div.classList.add("wrapper__text");
  element.replaceWith(div);
  div.innerText = textarea.value;
}

const edit = (element) => {
  textarea.classList.add("wrapper__text");
  element.replaceWith(textarea);
  textarea.innerText = text;
}

document.addEventListener("keydown", (event) => {

  if (event.ctrlKey && event.key === "s") {
    event.preventDefault();
    save(textarea);
  } else if (event.ctrlKey && event.key === "e") {
    event.preventDefault();
    edit(div);
  }
});

var isMouseDown = false;

wrapper.addEventListener('mousedown', function (event) {
  isMouseDown = true;
});

document.addEventListener('mousemove', function (event) {
  if (isMouseDown) {
    const wrapperLeft = wrapper.getBoundingClientRect().left;
    const wrapperTop = wrapper.getBoundingClientRect().top;
    const mouseX = event.clientX - wrapperLeft;
    const mouseY = event.clientY - wrapperTop;
    wrapper.style.height = `${mouseY}px`;
    wrapper.style.width = `${mouseX}px`;
  }
});

document.addEventListener('mouseup', function (event) {
  isMouseDown = false;
});


