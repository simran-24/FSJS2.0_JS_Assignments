//  Write a program which tells the number of days in a month. consider leap year.
function NoOfDays(month,year)
{
    return date.getDate();
}
var date=new Date(1992,2,0)
let year= date.getFullYear();
let month =date.getMonth(); 

console.log(year);
console.log(month);
if (year%4==0 && year%400==0)
{
  console.log(`Leap Year :-  The number of days in ${month} of the year ${year} is : ` + NoOfDays(month,year))
}
else
console.log(`Not A leap year :- The number of days in ${month} of the year ${year} is : ` + NoOfDays(month,year))
