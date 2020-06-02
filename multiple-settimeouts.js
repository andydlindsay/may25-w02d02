const nums = [500, 450, 2000, 42, 9001, 1337, 2500, 1700];

const myFn = (delays, cb) => {
  const sorted = [];

  for (const delay of delays) {
    setTimeout(() => {
      console.log(delay);
      sorted.push(delay);
    }, delay);
  }

  setTimeout(() => { 
    cb(sorted);
  }, 9002);
};

const returnVal = myFn(nums, (sortedArr) => {
  console.log(sortedArr);
});
