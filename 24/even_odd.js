let even_arr=[];
let odd_arr=[];
var num=[]
var iterate=Number(prompt("How many values you want to add in an array ?"))
for(let j=0;j<iterate;j++)
{
    var values=Number(prompt("Enter value"))
    num.push(values)
}
for(let i=0;i<num.length;i++)
{
    var elem=num[i];
    Validate_Array()
}

function Validate_Array()
{
    if(elem<0 || elem>100)
    {
        alert("Please enter a number between 0 to 100")
    }
    if(elem%2==0)
        {
             even()
        }
    else
       {
             odd()
       }
    
}
function even()
{
    even_arr.push(elem)    
   
}
function odd()
{
    odd_arr.push(elem)
  
}
alert( even_arr)
alert( odd_arr)


