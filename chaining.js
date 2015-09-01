/* Sample program to find the sum of even numbers of a list using chaining feature */
let lod=require('lodash')
let numbers = [1, 2, 3, 4, 5];
let sumOfEvenSquares = lod(numbers)
		    .filter(n => n % 2 === 0)
		    .map(n => n * n)
		    .sum()
console.log(sumOfEvenSquares)
