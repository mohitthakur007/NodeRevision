/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function delay(msg, ms){
    return new Promise((resolve, reject)=>setTimeout(()=>resolve(msg),ms));
}
function waitOneSecond() {
    return delay("one sec", 1000)
}

function waitTwoSecond() {
    return delay("two sec", 2000)
}

function waitThreeSecond() {
    return delay("three sec", 3000)
}

function calculateTime() {
    var start= Date.now();
    waitOneSecond().then(waitTwoSecond).then(waitThreeSecond).then((val)=> console.log("val ",val, Date.now()-start))
}
calculateTime();