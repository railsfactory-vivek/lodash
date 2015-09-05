/* Program 10: This is a program to find pythagorean triplet in natural numbers for which a + b + c = 1000 */

let lodash = require('lodash')
function findTriplet(numberOne = 1, numberTwo = 1, limit = 1000) {
		let numberThree = limit - (numberOne+numberTwo)
		if(numberTwo > limit) {
			 numberOne++;
				numberTwo = 1;
		}
		if(numberOne < limit ) {
				if (numberThree < limit/2 && Math.pow(numberOne,2) + Math.pow(numberTwo,2) === Math.pow(numberThree,2)) {
						return { a:numberOne, b:numberTwo, c:numberThree}
				} else {
						return findTriplet(numberOne, ++numberTwo, limit)
				}
		} else {
						return 'Triplet not found'
		}
}
console.log(findTriplet(1, 1, 1000))
