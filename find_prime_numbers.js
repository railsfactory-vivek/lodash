/* Program 5: Find a prime number in the list */
let lodash=require('lodash');
let numbers = [1,2,3,4,5,16,18,19]
/* let prime_numbers = lodash(numbers).filter( n => n <= 3 ).value()
// following is a code to find prime numbers using map
prime_numbers.push(
						lodash(numbers).filter(n => n > 3).map(function(n) {
								let j=2;
								for(; j<=n;  j++) {
								if(n%j==0) {
          break;
								}
								}
								if(j==n){return n;}})
      .compact().value())

// following is a code to find prime numbers using reduce
lodash.reduce(numbers, function(memo, n) {
								if(n<=3) {
											memo.push(n);
								} else {
								  let j=2;
								  for(; j<=n;  j++) {
								    if(n%j==0) {
              break;
								    }
								  }
								  if(j==n){memo.push(n);}
								}
								return memo;
     }, prime_numbers);
console.log(prime_numbers); */

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

console.log(lodash(numbers).filter(isPrime).value())
