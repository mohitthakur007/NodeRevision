/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(ms) {
    var startTime = Date.now();
    while(Date.now()-startTime <ms){

    }

}
console.log("start")
sleep(5000)
console.log("end");