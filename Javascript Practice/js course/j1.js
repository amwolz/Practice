let a;
let b;
let c;

// a = window.prompt("Enter side A");
// a = Number(a);

// b = window.prompt("Enter side B");
// b = Number(b);

// c = Math.pow(a, 2) + Math.pow(b, 2)
// c = Math.sqrt(c)

// console.log("side C:", c)

document.getElementById("submitButton").onclick = function(){
    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.pow(a, 2) + Math.pow(b, 2);
    c = Math.sqrt(c);

    document.getElementById("cLabel").innerHTML = "Side C: " + c;
}


let count = 0;

document.getElementById("decreaseBtn").onclick = function(){
    count-=1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function(){
    count=0;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increaseBtn").onclick = function(){
    count+=1;
    document.getElementById("countLabel").innerHTML = count;
}

let x;
let y;
let z;

document.getElementById("rollButton").onclick = function(){
    // 3 dice of range(1, 7) aka 6 sided dice
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;
}

// useful string properties & methods

let userName = "321amw123";
let phoneNumber = "123-456-7890";

console.log(userName.length);
console.log(userName.charAt(4));
console.log(userName.indexOf("2"));
console.log(userName.lastIndexOf("2"));
console.log(userName.trim());
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());

phoneNumber = phoneNumber.replaceAll("-", "");

console.log(phoneNumber);

// slice() extracts a section of a string 
//             and returns it as a new string, 
//             without modifying the original string

let fullName = "Andrew Wolz";
let firstName;
let lastName;

firstName = fullName.slice(0, 6);
lastName = fullName.slice(7);

console.log(firstName);
console.log(lastName);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);

// IF STATEMENTS = if a condition is true, execute some code
//                                   if not, do something else

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){

    age = myText.value;
    age = Number(age);
    
    if(age >= 100){
        resultElement.textContent = `You are TOO OLD to drive`;
    }
    else if(age == 0){
        resultElement.textContent = `You can't drive. You were just born.`
    }
    else if(age >= 16){
        resultElement.textContent = `You are old enough to drive`
    }
    else if(age < 0){
        resultElement.textContent = `Your age can't be below 0`;
    }
    else{
        resultElement.textContent = `You must be 16+ to drive`;
    }
}

// .checked = property that determines the checked state of an 
//                     HTML checkbox or radio button element

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mSubmit = document.getElementById("mSubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mSubmit.onclick = function(){

    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed!`;
    }
    else{
        subResult.textContent = `You are NOT subscribed!`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `You are paying with MasterCard`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `You are paying with PayPal`;
    }
    else{
        paymentResult.textContent = `You must select a payment type`;
    }
}

// ternary operator = a shortcut to if{} and else{} statements
//                                  helps to assign a variable based on a condition
//                                  condition ? codeIfTrue : codeIfFalse;

let time = 9;
let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
console.log(greeting);

let isStudent = false;
let message = isStudent ? "You are a student" : "You are NOT a student";
console.log(message);

let purchaseAmount = 99;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);

const day = 7; 

switch (day) {
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is Sunday");
        break;
    default:
        console.log(`${day} is not a day`);
}
// logical operators =  used to combine or manipulate boolean values 
//                                    (true or false)

// AND = &&
// OR  = ||
// NOT = !

// ---------- EXAMPLE 1 ----------
const temp1 = 20;

if(temp1 > 0 && temp1 <= 30){
    console.log("The weather is GOOD");
}
else{
    console.log("The weather is BAD");
}

// ---------- EXAMPLE 2 ----------
const temp2 = -250;

if(temp2 <= 0 || temp2 > 30){
    console.log("The weather is BAD");
}
else{
    console.log("The weather is GOOD");
}

// ---------- EXAMPLE 3 ----------
const isSunny = true;

if(!isSunny){
    console.log("It is CLOUDY");
}
else{
    console.log("It is SUNNY");
}

//   = assignment operator
//  == comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatype are equal)
//  != inequality operator
// !== strict inequality operator

const PI = 3.14;

if(PI === "3.14"){
    console.log("That is NOT Pi");
}
else{
    console.log("That is Pi");
}

let loggedIn = false;

document.getElementById("submitLogin").onclick = function(){
    let username = document.getElementById("loginUsername").value;
    let pwd = document.getElementById("loginPwd").value;
    if(username === "myUsername" && pwd === "myPassword"){
        let loggedIn = true
        document.getElementById("loginResult").innerHTML = "You're Logged In!";
    }
    else{
        document.getElementById("loginResult").innerHTML = "You're Logged Out. Try username: myUsername password: myPassword";
    }


}

// while loop = repeat some code WHILE some condition is true

// let loggedIn = false;
// let username;
// let password;

// while(!loggedIn){
//     username = window.prompt(`Enter your username`);
//     password = window.prompt(`Enter your password`);

//     if(username === "myUsername" && password === "myPassword"){
//         loggedIn = true;
//         console.log("You are logged in!");
//     }
//     else{
//         console.log("Invalid credentials! Please try again");
//     }
// }

// for loop = repeat some code a LIMITED amount of times

// ------- INCREMENT -------
for(let i = 1; i <= 10; i++){
    console.log(i);
}

// ------- DECREMENT -------
for(let i = 10; i > 0; i--){
    console.log(i);
}

