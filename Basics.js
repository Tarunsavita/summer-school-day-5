//variable and data types

let name="tarun";
const rollno=1;
let boolean = true;
var projects = null;
let skills;

console.log(typeof name);
console.log(typeof rollno);
console.log(typeof boolean);
console.log(typeof projects);
console.log(typeof skills); 

//hoisting demo

// console.log(iamvar);                    // The variable declared with 'var' is hoisted to the top of its scope,
// console.log(iamlet);                    // which is why it appears as 'undefined' when accessed before assignment.
// var iamvar =1;                          // In contrast, using 'let' results in a ReferenceError because it is not
// let iamlet =1;                          // initialized until its declaration is evaluated (temporal dead zone).
                     
//user greeting

let user = prompt("what is your name?");
let age = prompt(`${user} tell me your age`);
if(age<18){
    alert(`hey ${user}, you are a teen!`);
}
else if(age >= 18 && age < 60) {
    alert(`welcome ${user}, you are an adult`);
}
else{
    alert(`hello ${user}, you are a senior citizen`);    
}

//loop

for(let a=1;a<11;a++){
    console.log(a);
}

var b=2;
while(b <= 20){
    console.log(b);
    b+=2;
}

var c=10
do{
    console.log(c);
    c-=1;
}
while(c >= 1);

//functions

function add(a,b){
    sum = a+b;
    return sum;
}
console.log(add(1,2));

function square(a){
    return a*a;
}
console.log(square(11));

const greet = (username) => console.log(`welcome ${username}`);
greet("tarun");

//callback

function processnumber(num,callback){
    console.log(`this is the given number ${num}`);
    callback(num);
}
function doublenumber(num){
    console.log(`triple of the number ${num * 2}`);
}
processnumber(11,doublenumber);

//project

var number1 = parseFloat(prompt("enter the number 1"));
var number2 = parseFloat(prompt("enter the number 2"));
var operator = prompt("enter the operator +,-,*,/");

switch (operator){
    case "+":
        alert("the sum is " + (number1 + number2));
        break;
    case "-":
        alert("subtration is " + (number1 - number2));
        break;
    case "*":
        alert("muptiply " + (number1 * number2));
        break;
    case "/":
        alert("divide " + (number1 / number2));
        break;
    default:
        alert("enter the valid operator");
        break;
}
