// console.log("Test statement 1");
// console.log("Test statement 2");

// window.alert("This is a test alert!")

// This is a comment in js

/*
    This
    is 
    a
    multiline
    comment
*/

// to make a variable there's declaration and assignment

let age;
age = 21;


// or one line let age = 21;

let firstName = "Andrew";

let student = false;
// this is a boolean type

console.log(age);
console.log("Hello this is", firstName, "and this is writtien in javascript")
console.log(student)

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;

// operands values vairables etc, operators + - * / %
let students = 20;
students = students + 2;
students = students - 2;
students = students * 2;
students = students / 2;
students = students % 2;
students += 1;
// also just use += -= *= etc
console.log(students)

// how to accept user input

// let username = window.prompt("What's your name?");
// console.log(username)

// also this: HTML textbox

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username)
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}

document.getElementById("myButton2").onclick = function(){
    age = document.getElementById("myText2").value;
    console.log(age)
    document.getElementById("myLabel2").innerHTML = "You are " + age;
    console.log(typeof age);
    age = Number(age);
    console.log(typeof age);

    // this converts type string to number
    age += 1;
    document.getElementById("myLabel3").innerHTML = "Next year you will be " + age;

}

let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean("testbool");

console.log( x, typeof x);
console.log( y, typeof y);
console.log( z, typeof z);

// const = a vriable that can't be changed, think lists to tuples
// common convention is to make const variables uppercase
const PI = 3.14159;
console.log(PI);

// Math
let a = 3.14;
let h = 8
let i = 9
b = Math.round(a);
console.log(b);
c = Math.floor(a);
console.log(c);
d = Math.ceil(a);
console.log(d);
e = Math.pow(x, 2 /*this is the exponent previous was base*/)
f = Math.sqrt(x);
g = Math.abs(x);
let maximum = Math.max(a, h, i);
let minimum = Math.min(a, h, i);
console.log("max = " + maximum);
console.log("min = " + minimum);
// also
console.log(Math.PI)











