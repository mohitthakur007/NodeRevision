/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve, reject) => {
        console.log("inside promise")
        setTimeout(() => {
            console.log("inside timeout")
            resolve("resolve")
        }, n);
        // reject("fuckoff");

    })
}
var start=Date.now();
wait (7000).then((result)=>{
    console.log(`promise resolved!!!!! ${Date.now()-start} `)
})

