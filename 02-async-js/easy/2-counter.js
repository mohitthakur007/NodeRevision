var counter=0
var fun = ()=>{
    console.clear();
    console.log(counter++);
    setTimeout(fun,1000);
}
fun();