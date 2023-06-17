var epochTimeCounter = ()=>{
    console.clear()
    console.log(Math.floor(Date.now()/1000))
    setTimeout(fun,1000)
}
// epochTimeCounter();
var localTimeCounter = ()=>{
    console.clear()
    console.log(new Date().toLocaleTimeString())
    setTimeout(fun,1000)
}
localTimeCounter();