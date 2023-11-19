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
const maximum1 = scores.reduce(getMax);
const minimum1 = scores.reduce(getMin);

console.log(maximum1);
console.log(minimum1);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}

// function expressions = a way to define functions as
//                                          values or variables

const numbers5 = [1, 2, 3, 4, 5, 6];

const squares = numbers5.map(function(element){
    return Math.pow(element, 2);
});
const cubes = numbers5.map(function(element){
    return Math.pow(element, 3);
});
const evenNums2 = numbers5.filter(function(element){
    return element % 2 === 0;
});
const oddNums2 = numbers5.filter(function(element){
    return element % 2 !== 0;
});
const total2 = numbers5.reduce(function(accumulator, element){
    return accumulator + element;
});

console.log(total);

// arrow functions = a concise way to write function expressions
//                                good for simple functions that you use only once
//                                (parameters) => some code

// ---------- EXAMPLE 1 ----------
const hello1 = (name, age) => {console.log(`Hello ${name}`)
                              console.log(`You are ${age} years old`)};
   
hello1("Andrew", 21);
  
// ---------- EXAMPLE 2 ----------
setTimeout(() => {console.log("Hello"); 
                  console.log("Goodbye");}, 3000);

// ---------- EXAMPLE 3 ----------               
const numbers6 = [1, 2, 3, 4, 5, 6];

const squares3 = numbers6.map((element) => Math.pow(element, 2));
const cubes3 = numbers6.map((element) => Math.pow(element, 3));
const evenNums3 = numbers6.filter((element) => element % 2 === 0);
const oddNums3 = numbers6.filter((element) => element % 2 !== 0);
const total3 = numbers6.reduce((accumulator, element) => accumulator + element);

console.log(total);

// object = A collection of related properties and/or methods
//                Can represent real world objects (people, products, places)
//                object = {key:value,
//                               function()}

const person1 = {
    firstName: "Aidan",
    lastName: "Henderson",
    age: 22,
    isEmployed: true,
    sayHello: function(){console.log(`Hi! I am ${this.firstName}`)},    
    do: function(){console.log('I am ' + this.age + ' years old')}
}

const person2 = {
    firstName: "Cynthia",
    lastName: "Hlushko",
    age: 21,
    isEmployed: false,
    sayHello: function(){console.log("Hey, I'm " + this.firstName)},
    do: function(){console.log("I am going to the coffeeshop and I am " + this.age)},
}

console.log(person1.firstName);
console.log(person2.firstName);

person1.sayHello();
person1.do();
person2.sayHello();
person2.do();

// constructor = special method for defining the
//                          properties and methods of objects

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
const car3 = new Car("Dodge", "Charger", 2026, "silver");

car1.drive();
car2.drive();
car3.drive();

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);

// class = (ES6 feature) provides a more structured and cleaner way to 
//              work with objects compared to traditional constructor functions
//              ex. static keyword, encapsulation, inheritance

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Shoes", 100.00);

product1.displayProduct();

const total5 = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total5.toFixed(2)}`);
console.log(`This final price is $${total5}`);

// static = keyword that defines properties or methods that belong 
//               to a class itself rather than the objects created
//               from that class (class owns anything static, not the objects)

// ------------ EXAMPLE 1 ------------
class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));

// ------------ EXAMPLE 2 ------------

class User{

    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
    }
    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }
}

const user1 = new User("Andrew");
const user2 = new User("Stephen");
const user3 = new User("Claire");

user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();

// inheritance = allows a new class to inherit properties and methods 
//                         from an existing class. Helps with code reusability
// super = keyword is used in classes to call the constructor or
//              access the properties and methods of a parent (superclass)
//              this = this object
//              super = the parent

class Animal{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}mph`);
    }
}

class Rabbit extends Animal{

    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal{
    
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}

class Hawk extends Animal{
    
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 3, 50);

rabbit.run();
fish.swim();
hawk.fly();

// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property
// ---------- EXAMPLE 1 ----------
class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height must be a positive number");
        }
    }


    get width(){
        return `${this._width.toFixed(1)}cm`;
    }
   
    get height(){
        return `${this._height.toFixed(1)}cm`;
    }


    get area(){
        return `${(this._width * this._height).toFixed(1)}cm`;
    }
}

const rectangle = new Rectangle(2, 3);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

// ---------- EXAMPLE 2 ----------
class Person{

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("First name must be a non-empty string");
        }
    }

    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("Last name must be a non-empty string");
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error("Age must be a non-negative number");
        }
    }
    
    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get fullName(){
        return this._firstName + " " + this._lastName;
    }

    get age(){
        return this._age;
    }
}

const person = new Person("Ismael", "Alvarado", 23);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);

// destructuring =  extract values from arrays and objects,
//                              then assign them to variables in a convenient way
//                              [] = to perform array destructuring
//                              {} = to perform object destructuring
//                              5 examples

// --------- EXAMPLE 1 ---------
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

// --------- EXAMPLE 2 ---------
// SWAP 2 ELEMENTS IN AN ARRAY

const colors = ['red', 'green', 'blue', 'black', 'white'];

[colors[0], colors[4]] = [colors[4], colors[0]]

console.log(colors);

// --------- EXAMPLE 3 ---------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// --------- EXAMPLE 4 ---------
// EXTRACT VALUES FROM OBJECTS

const person11 = {
  firstName: 'Spongebob',
  lastName: 'Squarepants',
  age: 30,
  job: "Fry cook",
};
const person12 = {
  firstName: 'Patrick',
  lastName: 'Star',
  age: 34
};


// you have to create a job property because there's not one here
const {firstName, lastName, age, job="Unemployed"} = person12;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// --------- EXAMPLE 5 ---------
// DESTRUCTURING IN FUNCTION PARAMETERS

// can set defauly value in arguments
function displayPerson({ firstName, lastName, age, job="Unemployed" }) {
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

displayPerson(person11);
displayPerson(person12);

// nested objects = Objects inside of other Objects.
//                               Allows you to represent more complex data structures
//                               Child Object is enclosed by a Parent Object

//                               Person{Address{}, ContactInfo{}}
//                               ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}  

class Persona{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person21 = new Persona("Andrew", 30, "423 Carruthers NE", 
                                                    "Albuquerque", 
                                                    "NM");

const person22 = new Persona("Stephen", 37,   "212 Loma Vista NE", 
                                                    "Albuquerque", 
                                                    "NM");

const person23 = new Persona("Claire", 45, "398 Gold Ave SE", 
                                                    "Albuquerque", 
                                                    "NM");

console.log(person21.name);
console.log(person21.age); 
console.log(person21.address);                                   
console.log(person21.address.street);
console.log(person21.address.city);
console.log(person21.address.country);

const fruits4 = [ {name: "apple", color: "red", calories: 95}, 
                          {name: "orange", color: "orange", calories: 45}, 
                          {name: "banana", color: "yellow", calories: 105}, 
                          {name: "coconut", color: "white", calories: 159}, 
                          {name: "pineapple", color: "yellow", calories: 37}];

// Access properties of a fruit object
console.log(fruits4[0].calories);

// Add a new fruit object
fruits4.push({ name: "grapes", color: "purple", calories: 62});

// Remove the last fruit object
fruits4.pop();

// Remove fruit objects by indices
fruits4.splice(1, 2);

// ---------- forEach() ----------
fruits4.forEach(fruit => console.log(fruit));
fruits4.forEach(fruit => console.log(fruit.name));
fruits4.forEach(fruit => console.log(fruit.color));
fruits4.forEach(fruit => console.log(fruit.calories));

// ---------- map() ----------
const fruitNames = fruits4.map(fruit => fruit.name);
const fruitColors = fruits4.map(fruit => fruit.color);
const fruitCalories = fruits4.map(fruit => fruit.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

// ---------- filter() ----------
const yellowFruits = fruits4.filter(fruit => fruit.color === "yellow");
const lowCalFruits = fruits4.filter(fruit => fruit.calories < 100);
const highCalFruits = fruits4.filter(fruit => fruit.calories >= 100);

console.log(yellowFruits);
console.log(lowCalFruits);
console.log(highCalFruits);

// ---------- reduce() ----------
const maxFruit = fruits4.reduce( (max, fruit) =>
                                                        fruit.calories > max.calories ?
                                                        fruit : max);

const minFruit = fruits4.reduce( (min, fruit) =>
                                                       fruit.calories < min.calories ?
                                                       fruit : min);

console.log(maxFruit);
console.log(minFruit);