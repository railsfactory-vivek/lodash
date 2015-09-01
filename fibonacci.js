/* Program 2: Find the sum of all fibonacci numbers until 4 million only if they're even numbers */
function fib(limit) {
				if(limit<=1) {
								return 1;
				}
				return fib(limit-1) + fib(limit-2);
}

let total=0, max=4000000;
for(let x=0; x<max; x++) {
				let res=fib(x);
				if(res > max) {
								break;
				}
				if(res%2==0) {
								total+=res;
				}
} 
console.log(total);

/*
let recursive = function(n) {
				if(n <= 1) {
								return 1;
				} else {
								return recursive(n - 1) + recursive(n - 2);
				}
};

console.log(recursive(8));

let looping = function(n) {
				var a = 0, b = 1, f = 1;
				for(var i = 2; i <= n; i++) {
								f = a + b;
								a = b;
								b = f;
				}
				return f;
};

console.log(looping(8)); */
