// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
const refs = {
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  input: document.querySelector('#datetime-picker'),
};
let dateTimeValue = refs.input.value;
console.log(dateTimeValue);
refs.startBtn.setAttribute('disabled', 'disabled');

const fp = flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    refs.startBtn.removeAttribute('disabled');
    // console.log(selectedDate);
    if (selectedDates[0] < Date.now()) {
      alert('Please choose a date in the future');
    }
  },
});

// console.log(dateSelected);
class CountdownTimer {
  constructor({ onTick, targetDate }) {
    this.targetDate = targetDate;
    this.intervalID = null;
    this.active = false;
    this.onTick = onTick;
    this.init();
  }
  // refs.startBtn.setAttribute('disabled', 'disabled');

  init() {
    const time = this.convertMs(0);
    this.onTick(time);
  }

  start() {
    refs.startBtn.setAttribute('disabled', 'disabled');

    this.intervalID = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;

      if (this.deltaTime < 0) {
        clearInterval(this.intervalID);
        const time = this.convertMs(0);
        this.onTick(time);
        return;
      }
      const time = this.convertMs(deltaTime);
      this.onTick(time);

      //   if (this.deltaTime < 0) {
      //     this.stop();
      //   }
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalID);
    const time = this.convertMs(0);
    this.onTick(time);
  }

  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = String(Math.floor(ms / day)).padStart(3, '0');
    // Remaining hours
    const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = this.addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = this.addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
  }

  addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
}
console.log(fp.selectedDates[0]);
const timer = new CountdownTimer({
  onTick: updateClockface,
  targetDate: new Date('Feb 06, 2022 01:03'),
  // targetDate: fp.onClose(),
});

refs.startBtn.addEventListener('click', timer.start.bind(timer));

function updateClockface({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}
