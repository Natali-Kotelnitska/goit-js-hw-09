const startBtnRef = document.querySelector('button[data-start]');
const stopBtnRef = document.querySelector('button[data-stop]');
let timerId = null;

startBtnRef.addEventListener('click', onStarColorSwitcher);
stopBtnRef.addEventListener('click', onStopColorSwitcher);

function onStarColorSwitcher() {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  startBtnRef.setAttribute('disabled', 'disabled');
}

function onStopColorSwitcher() {
  clearInterval(timerId);
  document.body.style.backgroundColor = '';
  startBtnRef.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
