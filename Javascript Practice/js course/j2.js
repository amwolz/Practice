// setTimeout() = function in JavaScript that allows you to schedule
//                            the execution of a function after an amount of time 
//                            Times are approximate
//                            setTimeout(callback, delay);

// ---------- EXAMPLE 1 ----------
// function hello() {
//     window.alert("Hello");
// }
 
// setTimeout(hello, 3000);

// ---------- EXAMPLE 2 ----------
// clearTimeout() = can cancel a timeout before it triggers

const timeoutId = setTimeout(() => window.alert("Hello"), 3000);

clearTimeout(timeoutId);

// ---------- EXAMPLE 3 ----------

let timeoutId2;

function showAlert() {
    window.alert("Hello");
}

function startTimer() {
    timeoutId2 = setTimeout(showAlert, 3000);
    console.log("STARTED");
}

function clearTimer() {
    clearTimeout(timeoutId2);
    console.log("CLEARED");
}

function updateClock(){

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const dateString = `${hours}:${minutes}:${seconds}`;

    document.getElementById('clock').textContent = dateString;
}

updateClock();
setInterval(updateClock, 1000);

function loadData(){

    console.time("loadData");

    for(let i = 0; i < 1000000000; i++){
        //pretend to load some data
    }

    console.timeEnd("loadData");
}

function processData(){

    console.time("processData");

    for(let i = 0; i < 1000000; i++){
        //pretend to process some data
    }
    
    console.timeEnd("processData");
}

loadData();
processData();