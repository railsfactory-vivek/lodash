/* Program 10: This is a program to find pythagorean triplet in natural numbers for which a + b + c = 1000 */

let lodash = require('lodash')
let results = []
function findTriplet(limit=1000) {
for(let i=1; i<limit; i++) {
		for(let j=1; j<limit;j++) {
			 let k = limit - (i+j)
				if (k<limit/2 && Math.pow(i,2) + Math.pow(j,2) === Math.pow(k,2)) {
						return { a:i, b:j, c:k}
				}
		}
}
}
console.log(findTriplet(1000))
