import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');
formRef.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const {
    elements: { delay, step, amount },
  } = e.currentTarget;

  const { promisesAmount, firstDelay, delayStep } = getOutput(delay, step, amount);

  getPromises(promisesAmount, firstDelay, delayStep);
}

function getOutput(delay, step, amount) {
  let delayStep = Number(step.value);
  let firstDelay = Number(delay.value);
  let promisesAmount = Number(amount.value);

  return { delayStep, firstDelay, promisesAmount };
}

function getPromises(amount, firstDelay, delayStep) {
  for (let i = 1; i <= amount; i++) {
    createPromise(i, firstDelay)
      .then(result => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${result.position} in ${result.delay}ms`, {
          timeout: 10000,
          clickToClose: true,
          useIcon: false,
        });
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
          timeout: 10000,
          clickToClose: true,
          useIcon: false,
        });
      });
    firstDelay += delayStep;
  }
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
  return promise;
}
