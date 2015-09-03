/* Program 8: Find a specific indexed prime number */
let lodash=require('lodash');
// following is a code to find prime numbers in list using filter, any
function isPrime(number) {
		if(number<=3) {
				return true;
		} else {
				return !isDivisble(number);
		}
}

function isDivisble(number) {
		let divisors = lodash.range(2, number);
		return lodash.any(divisors, (divisor) => number % divisor === 0)
}

/* let number = 2 , i = 1, max = 11
while(i < max) { 
			isPrime(++number) ? i++ : number
} */

function find_prime(number, i, max) {
		if(i<max) {
										isPrime(++number) ? i++ : number
										return find_prime(number, i, max)
		}
		return number
}
let number = find_prime(2, 1, 1001)
console.log('10001st prime number is:'+number);
//console.log(lodash.range(1, 7).filter(n => isPrime(n)))
