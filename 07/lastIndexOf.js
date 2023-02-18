// Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last 
// occurrence of a word "pw skills".


let online_study= ["iNeuron" ,"pw skills","LCO" ,"PrepBytes","Scaler","pw skills","Unacademy"];

let firt_occur= online_study.lastIndexOf("pw skills",1);  //first occurence it will count from the last of the list

let last_occur= online_study.lastIndexOf("pw skills"); //last occurence

console.log("First occurence of pw skills is at index : " + firt_occur);
console.log("last occurence of pw skills is at index : " + last_occur);

// OUTPUT Will be :- 
// First occurence of pw skills is at index : 1

// last occurence of pw skills is at index : 5