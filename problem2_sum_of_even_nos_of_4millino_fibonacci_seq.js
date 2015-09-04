/* Program 2: Find the sum of all fibonacci numbers until 4 million only if they're even numbers */
let lodash = require('lodash')

function sumOfFibSequence(limit) {
		if(limit<=1) {
				return 1;
		}
		return sumOfFibSequence(limit-1) + sumOfFibSequence(limit-2);
}

function findMaxValue(total, limit) {
		let fib_value = sumOfFibSequence(limit)
		if(fib_value > 4000000 || limit > 4000000) {
				return total;
		} else {
				if(fib_value % 2 === 0) {
				total += fib_value
				}
				return findMaxValue(total, ++limit)
		}
}

console.log(findMaxValue(0, 1))
