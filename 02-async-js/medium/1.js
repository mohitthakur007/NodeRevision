/*
Note on how to replace consecutive spaces with single space
Combine the string.replace() method and the RegEx and replace it with a single string.
Notice the starting and ending spaces will be kept and stripped down to a single space.
Trim any surrounding spaces from the string using JavaScript’s string.trim() method:

const sentence = '    My string with a    lot   of Whitespace.  '.replace(/\s+/g, ' ').trim()

// 'My string with a lot of Whitespace.'
Here’s a short overview of what the regular expression does:

\s: matches any whitespace symbol: spaces, tabs, and line breaks
+: match one or more of the preceding tokens (referencing \s)
g: the g at the end indicates iterative searching throughout the full string

*/
const fs= require('fs');
var str=""
var arr=[]
fs.readFile("./read.txt","utf-8", (error, content)=>{
    str= content;
    console.log("successfully read the file ")
   str=str.replace(/\s+/g, ' ').trim()
    console.log(str)
    fs.writeFile("./write.txt",str,()=>{
        console.log("successfully written the file ")
    })
})