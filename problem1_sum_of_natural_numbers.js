/* Program 1: Find the sum of natural numbers until 1000 which are multiples of 3 and 5 */
let lodash = require('lodash')
console.log(lodash(lodash.times(1000)
  .filter(number => (number % 3 == 0 || number%5 == 0 )))
  .sum())
