
// Declare a varibale and assign string value to it and check if the string contains a word Script using includes() method.

let list=["script", "scripting language" , "computer", "commands","compiled"];   //it contains the word script
console.log("The word script is present in array : " + list.includes("script"));  //results in boolean 

//it doesn't contains the word script
let list1=["scripting language" , "computer", "commands","compiled"];   
console.log("The word script is present in array : " + list1.includes("script"));  //results in boolean 

//OUTPUT Will be :- 

// The word script is present in array : true
// The word script is present in array : false