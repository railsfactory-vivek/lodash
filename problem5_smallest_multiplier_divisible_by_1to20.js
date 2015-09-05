/* Program 6: This is to find a smallest multiple which can be divisible by all the numbers in range 1 to 20 */

let lodash = require('lodash')

function findSmallestMultiple(multiplier=2520, dividers = lodash.range(11,21)) {
  if(!lodash.every(dividers, (divider) => multiplier % divider == 0)) { 
				return findSmallestMultiple(++multiplier, dividers)
  }
		return multiplier;
}
// setting multiple initial value as 2520 as it is a smallest multiple which can be divisible by 1 to 10
console.log('Smallest multiple of 1 to 20 numbers is:'+findSmallestMultiple(2520, lodash.range(11, 21)))
