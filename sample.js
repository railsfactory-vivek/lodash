var lodash = require('lodash');

var animals = [{
name: 'Cat',
species: 'Mammals',
pet_name: 'Chicky',
color: 'black',
speak: 'Meow'
}, {
name: 'Dog',
species: 'Mammals',
color: 'brownish',
speak: 'barks'
}
]

console.log(animals);

console.log(lodash.keys(animals[1]));

console.log(lodash.values(animals[1]));
console.log(lodash.pairs(animals[1]));
console.log(lodash.pluck(animals, 'color'));
console.log(lodash.extend(animals, [1,2,3,4]));
