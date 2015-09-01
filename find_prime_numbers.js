/* Program 3: Find the largest prime factor for 600851475143 */
let lodash=require('lodash');
let prime = [1], max =600851475143, k=1;
function find_prime(max) {
		for(let i=2; i < max; i++) {
		let j=2;
		for(j=2; j<i; j++) {
				if(i % j == 0) {
						break
			 }	
		}
		if(max%i == 0 && i==j) {
				prime[k++]=i;
		}
  }
}
find_prime(max);
console.log(lodash.each(prime))
console.log("Largest prime factor for: "+max+ " is:"+lodash.max(prime))
