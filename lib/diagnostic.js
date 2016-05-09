// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//

'use strict';

const fs = require('fs');

const sumLines = (filename, callback) => {
  fs.readFile(filename, { encoding: 'utf8' }, (error, data) => {
    if (error) {
      console.error(error.stack);
      return;
    }

    let sum = data.trim()
                  .split('\n')
                  .filter((line) => !!line)
                  .map((line) => parseFloat(line))
                  .reduce((a, b) => a + b);
    console.log(sum);
    return isNaN(sum) ?
      callback(new Error('line Not a Number!')) :
      callback(null, sum);
  });
};

module.exports = {
  sumLines,
};
