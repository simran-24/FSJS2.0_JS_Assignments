//. Write a program which tells the number of days in a month.

function NoOfDays(month,year)
{
    return new Date(year,month,0).getDate();
}
var date=new Date()
let year= date.getFullYear();


let month=date.getMonth(); 
console.log(`The number of days in ${month} of the year ${year} is : ` + NoOfDays(month,year))

