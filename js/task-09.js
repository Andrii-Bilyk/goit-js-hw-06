function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');

const randomColor = (e) => {
  e.preventDefault();
  body.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = getRandomHexColor();
}

btn.addEventListener('click', randomColor);