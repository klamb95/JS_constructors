const Pet = require('./pet.js');
const Person = require('./person.js');

const scoobyDoo = new Pet('Scooby Doo', 'Dog');
// scoobyDoo.eat('Scooby Snack');

const shaggy = new Person('Shaggy Rogers', scoobyDoo);
// shaggy.greet();
shaggy.feedPet('Scooby Snack')


const romeo = new Pet('Romeo', 'Cat');
const gwen = new Person('Gwen', romeo);
gwen.feedPet('Cat treat')
