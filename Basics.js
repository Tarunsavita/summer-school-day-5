//variable and data types
let name="tarun";
const rollno=1;
let bool = true;
var mood = null;
let project;

console.log(typeof name);
console.log(typeof rollno);
console.log(typeof bool);
console.log(typeof mood);
console.log(typeof project); 

//hoisting demo

// console.log(iamvar);
// console.log(iamlet);        //here var is hosted that's by the declaration moved to the top  
// var iamvar =1;              //this is the reason let showing error and var showing value undefine 
// let iamlet =1;  

//user greeting

let username = prompt("what is your name?");
let userage = prompt(`${username} tell me your age`);
if(userage<18){
    alert(`hey ${username}, you are a teen!`);
}
else if(userage >= 18 && userage < 60) {
    alert(`welcome ${username}, you are an adult`);
}
else{
    alert(`hello ${username}, you are a senior citizen`);    
}

//looping numbers

for(let i=1;i<11;i++){
    console.log(i);
}

var j=2;
while(j <= 20){
    console.log(j);
    j+=2;
}

var k=10
do{
    console.log(k);
    k-=1;
}
while(k >= 1);

//functions

function add(a,b){
    return a+b;
}
console.log(add(5,3));

function square(a){
    return a*a;
}
console.log(square(22));

const greet = (username) => console.log(`welcome ${username}`);
greet("tarun");

//callback practice

function processnumber(num,callback){
    console.log(`this is the given number ${num}`);
    callback(num);
}
function triplenumber(num){
    console.log(`triple of the number ${num * 3}`);
}
processnumber(5,triplenumber);

//mini project

var num1 = parseFloat(prompt("enter the number 1"));
var num2 = parseFloat(prompt("enter the number 2"));
var operator = prompt("enter the operator +,-,*,/");
switch (operator) {
    case "+":
        alert(num1 + num2)
        break;
    case "-":
        alert(num1 - num2)
        break;
    case "*":
        alert(num1 * num2)
        break;
    case "/":
        alert(num1 / num2)
        break;
    default:
        alert("enter valid operator")
        break;
}