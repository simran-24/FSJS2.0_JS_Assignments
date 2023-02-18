//Write a program to Create a variable.js file and declare variables and assign string, boolean, undefined and null data types,
// Display all the value with their data type.

let s="I am string";      //string
let b="True";            //boolean
let ud;                  //undefined
null;                    //null and it is treated as an object in JS

console.log("The value of s is : " + s + " and the type of s is : " + typeof(s));
console.log("The value of s is : " + b + " and the type of s is : " + typeof(b));
console.log("The value of s is : " + ud + " and the type of s is : " + typeof(ud));
console.log("The value of s is : " + null + " and the type of s is : " + typeof(null));  


//OUTPUT Will be  :- 

// The value of s is : I am string and the type of s is : string
// The value of s is : True and the type of s is : string
// The value of s is : undefined and the type of s is : undefined
// The value of s is : null and the type of s is : object
