/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function delay(str,ms){
    return new Promise(resolve => {
        setTimeout(()=>resolve(str), ms)
    })
}
function waitOneSecond() {
    return delay("one sec",1000)
}

function waitTwoSecond() {
    return delay("two sec",2000)
}

function waitThreeSecond() {
    return delay("three sec",3000)
}



function calculateTime() {
    var start = Date.now();
    Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then((values) => {
        console.log(values);
        console.log("all 3 promise resolved IN ", Date.now() - start)

    });

}
calculateTime();