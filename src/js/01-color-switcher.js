const startBtnRef = document.querySelector('button[data-start]');
const stopBtnRef = document.querySelector('button[data-stop]');
let timerId = null;

startBtnRef.addEventListener('click', onStartColorSwitcher);
stopBtnRef.addEventListener('click', onStopColorSwitcher);

function onStartColorSwitcher() {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  stopBtnRef.removeAttribute('disabled');
  startBtnRef.setAttribute('disabled', 'disabled');
}

function onStopColorSwitcher() {
  clearInterval(timerId);
  stopBtnRef.setAttribute('disabled', 'disabled');
  startBtnRef.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
