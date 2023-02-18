//Declare a varibale and assign string value to it and then split it into an array using split() method
let str = "you have to create folder";
console.log("This is string :- ");
console.log(str);

let spl= str.split(); 
console.log("This is an array :- ");
console.log(spl);


let spl1= str.split(" ");      // split(seprator)
console.log("This is an array with seprator :- ");
console.log( spl1);

let spl2= str.split(" ",3);      // split(seprator,limit)   it will print 0 index till 2 and 3 index will be excluded 
console.log("This is an array with seprator and limit :- ");
console.log( spl2);


// OUTPUT Will be :- 
// This is string :- 
// you have to create folder

// This is an array :- 
// [ 'you have to create folder' ]

// This is an array with seprator :- 
// [ 'you', 'have', 'to', 'create', 'folder' ]

// This is an array with seprator and limit :- 
// [ 'you', 'have', 'to' ]