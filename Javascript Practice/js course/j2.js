// function = A section of reusable code.
//                    Declare code once, use it whenever you want.
//                    Call the function to execute that code.

function happyBirthday(username, age){
    console.log(`Happy birthday to you!`);
    console.log(`Happy birthday to you!`);
    console.log(`Happy birthday dear, ${username}`);
    console.log(`Happy birthday to you!`);
    console.log(`You are ${age} years old!`);
}

function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function isEven(number){

    return number % 2 === 0 ? true : false;
}

function isValidEmail(email){

    return email.includes("@") ? true : false;
}

console.log(happyBirthday("Andrew", 21));
console.log(isValidEmail("email@fake.com"));

// variable scope = where a variable is recognized
//                               and accessible (local vs global)            

let x = 3; // global scope

function1();
function2();

function function1(){
    let x = 1; // local scope
    console.log(x);
}

function function2(){
    let x = 2; // local scope
    console.log(x);
}

// array = a variable like structure that can 
//             hold more than 1 value

let fruits = ["apple", "orange", "banana", "coconut"];

//fruits.push("coconut");  //add an element
//fruits.pop();                     //removes last element
//fruits.unshift("mango"); //add element to beginning
//fruits.shift();                    //removes element from beginning

let numOfFruits = fruits.length;
let index = fruits.indexOf("coconut");

//console.log(fruits);
//console.log(fruits[0]);
//console.log(fruits[1]);
//console.log(fruits[2]);
//console.log(fruits[3]);

//console.log(numOfFruits);
//console.log(index);

/*
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
*/
/*
for(let i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i]);
}
*/

//fruits.sort();
//fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit);
}

// 2D array = multi-dimensional array that stores a matrix
//                    of data in rows and columns.
//                    Useful for games, spreadsheets, or representing images 

const matrix = [ [1, 2, 3], 
                [4, 5, 6], 
                [7, 8, 9]];

//matrix[0][0] = 'X';
//matrix[0][1] = 'O';
//matrix[0][2] = 'X';

//matrix[1][0] = 'O';
//matrix[1][1] = 'X';
//matrix[1][2] = 'O';

//matrix[2][0] = 'X';
//matrix[2][1] = 'O';
//matrix[2][2] = 'X';

for(let row of matrix){
    const rowString = row.join(' ');
    console.log(rowString);
}

// spread operator =  ... allows an iterable such as an
//                                  array or string to be expanded
//                                   in to separate elements
//                                  (unpacks the elements)

// ------------ EXAMPLE 1 ------------
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum);

// ------------ EXAMPLE 2 ------------
let username = "amwolz";
let letters = [...username]; 

console.log(letters);

// ------------ EXAMPLE 3 ------------
let fruits1 = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];
let foods = [...fruits1, ...vegetables, "eggs", "milk"];

console.log(foods);

// rest parameters = (...rest) allow a function work with a variable
//                                  number of arguments by bundling them into an array

//                                  spread = expands an array into separate elements
//                                  rest = bundles separate elements into an array


// ------- EXAMPLE 1 -------
function openFridge(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1, food2, food3, food4, food5);

const foods1 = getFood(food1, food2, food3, food4, food5);

// ------- EXAMPLE 2 -------
function sum(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

function getAverage(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const average = getAverage(75, 100, 85, 90, 50);

console.log(average);

// ------- EXAMPLE 3 -------
function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineStrings("These", "strings", "are now", "combined");

console.log(fullName);

// callback = a function that is passed as an argument
//                    to another function.

//                    used to handle asynchronous operations:
//                    1. Reading a file
//                    2. Network requests
//                    3. Interacting with databases

//                    "Hey, when you're done, call this next."

hello(goodbye);

function hello(callback){
    console.log("Hello!");
    callback();
}

function goodbye(){
    console.log("Goodbye!");
}

// forEach() = method used to iterate over the elements 
//                     of an array and apply a specified function (callback)
//                     to each element

//                     array.forEach(callback)
//                     element, index, array are provided

// ------------- EXAMPLE 1 -------------

const numbers2 = [1, 2, 3, 4, 5];

numbers2.forEach(cube);
numbers2.forEach(display);

function double(element, index, array){
    array[index] = element * 2;
}

function triple(element, index, array){
    array[index] = element * 3;
}

function square(element, index, array){
    array[index] = Math.pow(element, 2);
}

function cube(element, index, array){
    array[index] = Math.pow(element, 3);
}

function display(element){
    console.log(element);
}

// ------------- EXAMPLE 2 -------------

let fruits2 = ["apple", "orange", "banana", "coconut"];

fruits2.forEach(capitalize);
fruits2.forEach(display);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function lowercase(element, index, array){
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

/*
function display(element){
    console.log(element);
}
*/


// .map() = accepts a callback and applies that function 
//                 to each element of an array, then return a new array

// ----------- EXAMPLE 1 -----------
const numbers3 = [1, 2, 3, 4, 5];
const squared = numbers3.map(square);
const cubed = numbers3.map(cube);

console.log(cubed);

function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}

// ----------- EXAMPLE 2 -----------
const students = ["Michael", "Jeffrey", "Karina", "Angel"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(studentsLower);

function upperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}

// ----------- EXAMPLE 3 -----------
const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

// ---------- EXAMPLE 1 ----------
let numbers4 = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers4.filter(isEven);
let oddNums = numbers4.filter(isOdd);

console.log(oddNums);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}

// .reduce() = reduce the elements of an array
//                     to a single value    

// ---------- EXAMPLE 1 ----------
const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element){
    return accumulator + element;
}

// ---------- EXAMPLE 2 ----------
const scores = [75, 50, 90, 80, 65, 95];
const maximum = scores.reduce(getMax);
const minimum = scores.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}