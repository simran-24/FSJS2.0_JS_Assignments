//  Use the Date object to do the following activities

//     - What is the year today?

const today = new Date();
const year = today.getFullYear();
console.log("Current Year : - " + year);


//     - What is the month today as a number?

const today_month = new Date();
const month = today_month.getMonth();
console.log("Current Month : - " + month);

//     - What is the date today?

const today_date = new Date();
const T_date = today_date.getDate();
console.log("Date today : - " + T_date);

//  - What is the day today as a number?

const Day_today = new Date();
const Day = Day_today.getDay();
console.log("Day of the week : - " + Day);

//     - What is the hours now?
const hours_now = new Date();
const hour = hours_now.getHours();
console.log("Current Hour : - " + hour);

//     - What is the minutes now?
 var current_minutes = new Date();
 var minute= current_minutes.getMinutes();
 console.log("Current minutes : - " , minute);



//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.
const past_Date= new Date("January 1, 1970 00:00:00 UTC");
const today_Date=Date.now();

const difference= today_Date-past_Date;
console.log(difference)     //milliseconds
console.log(difference/1000);     //seconds
console.log(difference/1000/60);   //minutes
console.log(difference/1000/60/60);  //hours
console.log(difference/1000/60/60/24); //days
