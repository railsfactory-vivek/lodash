/* Program 1: Find the sum of natural numbers until 1000 which are multiples of 3 and 5 */
let lodash = require('lodash')
/* for(let x=0; x < 1000; x++ ) {
  if ( x%3 == 0 || x%5 == 0 ) {
    total+=x;
  }
}*/

console.log(lodash(1000)
  .filter(number => (number % 3 || number%5))
  .values())
