// Operators (>,<, ==, !=, >=, <=)
//comparison Operators return a boolean value(true/false)
const a = 5;
const b = 10;

console.log(a > b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a != b);
// Strict Equality
console.log(5 === '5');
// Strict Inequality
console.log(a !== b);

/*
Compares VALUES and DATA TYPES,
return true only if both are the same.
*/

//Loose  Equality Doesn't campare DATA TYPES 
console.log('20' == 20);

//The Good Ones: === and !==
console.log(true === 1); //false

//The Evil Ones: == and !=
console.log('' == '0'); //false
console.log(0 == ''); //true
console.log(0 == '0'); //true
console.log(false == 'false'); //false
console.log(false == 0); //true
console.log(false == '0'); //true
console.log(true == 1); //true

// Logical Operators (OR, AND(&&), NOT)
console.log(true && false); //AND
console.log(true || false); //OR 
console.log(!false); //NOT


