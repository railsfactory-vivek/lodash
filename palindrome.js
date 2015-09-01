let lod=require('lodash')

let palindrome=[]
lod.each(lod.range(999, 99, -1),function(i) {
  lod.each(lod.range(999, 900, -1),function(j) {
				let val = i*j
				val = lod(val).toString()
				if(val.startsWith(val.split('').reverse().join(''))) {
						palindrome=lod(palindrome).push(val)
						return false;
				}
		});
});

console.log(lod.max(palindrome.value()));

