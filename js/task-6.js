const numInput = document.querySelector(".input-num");
const btnCreate = document.querySelector(".btn-create")
const btnDestroy = document.querySelector(".btn-destroy")
const boxes = document.querySelector(".div-boxes")



btnCreate.addEventListener("click", handleClick)

function handleClick(event) {
  if (+numInput.value > 100 || +numInput.value < 0) {
    return;
  };
  createBoxes(numInput.value);
}


// function createBoxes(amount) {
//   boxes.innerHTML = "";
//   let myBox = [];
//   let size = 30;
//   for (let i = 0; i < amount; i++) {
//     const elem = document.createElement("div");
//     elem.style.width = `${size}px`;
//     elem.style.height = `${size}px`;
//     elem.style.backgroundColor = getRandomHexColor();
//     size += 10;
//     myBox.push(elem);
//     boxes.append(...myBox);
//     numInput.value = "";
//   }
// }

function createBoxes(amount) {
  boxes.innerHTML = "";
  let myNewBoxes = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const elem = document.createElement("div");
    elem.style.width = `${size}px`;
    elem.style.height = `${size}px`;
    elem.style.backgroundColor = getRandomHexColor();
    size += 10;
    myNewBoxes.push(elem);
  }
    boxes.append(...myNewBoxes);
    numInput.value = "";
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnDestroy.addEventListener("click", destroyBoxes)
function destroyBoxes() {
  numInput.value = "";
  boxes.innerHTML = "";
}