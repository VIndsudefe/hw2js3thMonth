

const block = document.querySelector(".block");

let position = 0;
let topPosition = 0;
const move = () => {
  if (position <= 360 && topPosition == 0) {
    position += 10;
    block.style.left = `${position}px`;
    setTimeout(move, 200);
  } else if (position >= 360 && topPosition <= 360) {
    topPosition += 10;
    block.style.top = `${topPosition}px`;
    setTimeout(move, 200);
  } else if (topPosition >= 360 && position != 0) {
    position -= 10;
    block.style.left = `${position}px`;
    setTimeout(move, 200);
  } else if (position == 0 && topPosition != 0) {
    topPosition -= 10;
    block.style.top = `${topPosition}px`;
    setTimeout(move, 200);
  }
};

move();

let i = 1;

setInterval(function() {
	console.log(`прошла ${i++} секунда`);
}, 1000);