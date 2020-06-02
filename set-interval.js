let iterations = 0;

const interval = setInterval(() => {
  iterations++;
  console.log('current iteration: ', iterations);

  if (iterations >= 10) {
    clearInterval(interval);
  }
}, 500);
