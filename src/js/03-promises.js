const formRef = document.querySelector('.form');
const formData = {};
formRef.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const {
    elements: { delay, step, amount },
  } = e.currentTarget;

  let delayStep = Number(step.value);
  let firstDelay = Number(delay.value);
  let promisesAmount = Number(amount.value);

  getPosition(promisesAmount).map(el => {
    createPromise(el, firstDelay);
    return (firstDelay += delayStep);
  });
}

function getPosition(amount) {
  let arrayOfPositions = [];
  for (let i = 1; i <= amount; i++) {
    arrayOfPositions.push(i);
  }

  return arrayOfPositions;
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

  promise
    .then(result => {
      console.log(`✅ Fulfilled promise ${result.position} in ${result.delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  return promise;
}
