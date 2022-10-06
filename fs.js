const fs = require('fs');

const aa = require('./module.js');

console.log(aa);

fs.readFile(__dirname + '/1.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    // console.log(data);
  }
});
