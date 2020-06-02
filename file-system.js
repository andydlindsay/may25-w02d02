const fs = require('fs');

// const fileContents = fs.readFileSync('./index.txt', { encoding: 'utf8' });
// console.log(fileContents);

fs.readFile('./blocking.js', { encoding: 'utf8' }, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log('the data is here!', data);
});

console.log('when do I run?');
