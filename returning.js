const funcRunner = (cb) => {
  const data = {
    username: 'alice'
  };

  console.log('before the timeout');

  setTimeout(() => {
    data.username = 'wonderland';
    cb(data);
  }, 2000);

  console.log('after the timeout');
};

console.log('before the function call');
const returnVal = funcRunner((result) => {
  console.log('the result is', result);
});
console.log('the return value is', returnVal);
console.log('after the function call');
