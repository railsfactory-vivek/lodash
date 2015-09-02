/* Program 6: This is to find a smallest multiple which can be divisible by all the numbers in range 1 to 20 */

let lodash = require('lodash')
let dividers=lodash.range(1,21)

// setting multiple initial value as 2520 as it is a smallest multiple which can be divisible by 1 to 10
let multiple = 2520
while(!lodash.every(dividers, (divider) => multiple%divider == 0)) { 
								multiple+=1 
}
console.log('Smallest multiple of 1 to 20 numbers is:'+multiple)
