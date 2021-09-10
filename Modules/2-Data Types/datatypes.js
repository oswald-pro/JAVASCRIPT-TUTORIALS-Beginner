// String with single quote
const Title = 'SMOFPRO APP';
const  Author = 'Oswald MBOUSSA';
// String with double quotes
const SubTitle = "language translator";

// String with backticks or complexe string also allows embedding other variable into  strig
const Description = `Created By ${Author}`;

console.log(Title);
console.log(SubTitle); 
console.log(Description);

// Number Data Type
const  wholeNumber  = 10;
const decimalNumber =5.8;

console.log(wholeNumber);
console.log(decimalNumber);

const result = wholeNumber + decimalNumber;

console.log(result);

// Booleans (true or  false)
const isCool = true;
if (isCool){
    console.log("Welcome to SMOFPRO APP");
} else {
    console.log('Page not Found');
}  
//or
const age = 20;
console.log(age < 18);

//Null
let email = null ;
email = 'oswald@gmail.com';
console.log(email);

//Undefined
let x;
console.log(x);

//Objects data type
const country = {
    countryname: 'Congo',
    city: 'Brazzaville',
};
console.log(country);
//Dot  notation to exact only name
console.log(country.countryname);

//Object data type(Array)
const mynumbbers = [1,2,3,4,5];
console.log(mynumbbers);

//Object data type date
const date = new Date();
console.log(date);

//Statically typed language example of c++

//Dynamically typed language( JavaScript is of this this because a variable can contain any datatype)
let message = 'Hello, world';
console.log(meessage);
message  = 5;
console.log(meessage);


