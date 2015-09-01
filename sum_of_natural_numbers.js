/* Program 1: Find the sum of natural numbers until 1000 which are multiples of 3 and 5 */
let total=0;
for(let x=0; x < 1000; x++ ) {
if ( x%3 == 0 || x%5 == 0 ) {
total+=x;
}
}
console.log(total);
