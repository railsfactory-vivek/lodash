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

function findNthPrimeNumber(index, numberAfter=2) {
	if(isPrime(numberAfter)) {
		index--
	}
	return index>0 ? findNthPrimeNumber(index, ++numberAfter) : numberAfter
}
let NthPrimeNumber = findNthPrimeNumber(1001)
console.log('1001st prime number is:'+ NthPrimeNumber);
