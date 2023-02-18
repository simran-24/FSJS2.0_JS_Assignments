//  Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    // - September, October or November, the season is Autumn.
    // - December, January or February, the season is Winter.
    // - March, April or May, the season is Spring
    // - June, July or August, the season is Summer	

const monthName = ["January", "February", "March", "April", "May", "June",
                     "July", "August", "September", "October", "November", "December"];

         
let Season_Userinput= prompt("Enter month name : ");
let Season=Season_Userinput.charAt(0).toUpperCase() + Season_Userinput.slice(1) //to capitalize the first character and join with remaining string

if(Season<=monthName[1] | Season==monthName[11])
{
    alert("Winter season");
}
else if(Season>=monthName[2] && Season<=monthName[4])
{
    alert("Spring season");
}
else if(Season>=monthName[5] && Season<=monthName[7])
{
    alert("Summer season");

}
else if(Season>=monthName[8] && Season<=monthName[10])
{
    alert("Autumn season");
}
else
{
    alert("Invalid input");
}