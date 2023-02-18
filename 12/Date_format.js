// //Create a human readable time format using the Date time object
// // - YYYY-MM-DD HH:mm
// // - DD-MM-YYYY HH:mm
// // - DD/MM/YYYY HH:mm

//Year
var today = new Date();
var year = today.getFullYear();
// console.log("Current Year : - " + year);


// Month
var today_month=new Date();
var month = today_month.getMonth() + 1;
if(month<=9)
{
    month= ( `0${month}`);
}
else
{
   month = ( `${month}`);

}


//Date

var today_date = new Date();
var T_date = today_date.getDate() ;
if(T_date<=9)
{
   T_date =( `0${T_date}`);
}
else
{
    T_date= `${T_date}`;
}
// console.log("Date today : - " + T_date);



//Hours
var hours_now = new Date();
var hour = hours_now.getHours();
if(hour<=9)
{
    hour=( `0${hour}`);
}
else
{
    hour=( `${hour}`);
}
// console.log("Current Hour : - " + hour);

//  minutes
 var current_minutes = new Date();
 var minute= current_minutes.getMinutes();
 if(minute<=9)
{
    minute=(`0${minute}`);
}
else
{
    minute=( `${minute}`);
}
//  console.log("Current minutes : - " , minute);


var full_date = (`${year}/${month}/${T_date} ${hour}:${minute}` ) ;
var full_date1 = (`${T_date}-${month}-${year} ${hour}:${minute}` ) ;
var full_date2= (`${T_date}/${month}/${year} ${hour}:${minute}` ) ;

console.log("This is a full date " + full_date);
console.log("This is a full date " + full_date1);
console.log("This is a full date " + full_date2);


