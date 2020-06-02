const stop = 20000;
const start = new Date().getTime();

for (let i = 0; i <= stop; i++) {
  const date = new Date();
  console.log(date);
}

const end = new Date().getTime();
const elapsedTime = end - start;
console.log(`that took ${elapsedTime}ms`);
