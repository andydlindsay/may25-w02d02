const nums = [500, 450, 2000, 42, 9001, 1337, 2500, 1700];

const myFn = (delays) => {
  for (const delay of delays) {
    setTimeout(() => {
      console.log(delay);
    }, delay);
  }
};

myFn(nums);
