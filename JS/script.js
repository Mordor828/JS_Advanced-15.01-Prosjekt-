const myBox = document.getElementById("myBox");
const moveAmount = 15;
let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
    }
    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;
  }
});

const movable = document.getElementById("myBox");

document.addEventListener("click", (event) => {
  const x = event.clientX - movable.offsetWidth / 2;
  const y = event.clientY - movable.offsetHeight / 2;
  movable.style.left = `${x}px`;
  movable.style.top = `${y}px`;
});

