/* Program 3: Find a largest prime factor in the list */
let lodash = require('lodash');
let endValue = 600851475143

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

function findLargestPrimeFactor(primeFactors = [], number) {
		if(number > endValue ) {
				return lodash(primeFactors).endValue()
		} else if(isPrime(number) && endValue % number == 0) {
			   primeFactors.push(number)
		}
		return findLargestPrimeFactor(primeFactors, ++number)
}

console.log(findLargestPrimeFactor([], 1))
