/* Program 4: Find the largest palindrome number when multiple two 3 digit numbers */
let lodash=require('lodash')

let palindromeArray =[]

function findPalindrome(numberOne, numberTwo, largestPalindrome) {
		if(numberOne < 99) {
				return largestPalindrome;
		} else if (numberTwo < 900) {
					--numberOne
					numberTwo = 1000
		}
		let productValue = numberOne * numberTwo
		productValue = lodash(productValue).toString()
		if(productValue.startsWith(productValue.split('').reverse().join(''))) {
				return productValue;
		} else {
				return findPalindrome(numberOne, --numberTwo, productValue)
		}
}

console.log(findPalindrome(999, 999, 0))
