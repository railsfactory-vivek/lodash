/* Program 6: Find the difference between square of sum and sum of square of first 100 natural numbers */
let lodash=require('lodash')

let numbers = lodash.range(1,101)
let sqr_of_sum_of_nos = Math.pow(lodash(numbers).sum(), 2)
console.log('Square of the sum of 1 to 100:'+sqr_of_sum_of_nos)

let sum_of_sqr_of_nos = lodash(numbers).map(number => Math.pow(number, 2)).sum()
console.log('Sum of the square of 1 to 100:'+sum_of_sqr_of_nos)

console.log('Difference of Square of the sum and sum of the square of 1 to 100:' + (sqr_of_sum_of_nos - sum_of_sqr_of_nos))
