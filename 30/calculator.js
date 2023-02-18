let a=Number(prompt("Enter a number"))
let b=Number(prompt("Enter another number"))
var addition = (a,b)=>
{
    alert("Addition of " + a +" and " + b + " is : "+ (a+b))
}
var subtraction = (a,b)=>
{
    alert("Subtraction of " + a +" and " + b + " is : "+ (a-b))
}

var multiplication = (a,b)=>
{
    alert("Multiplication of " + a +" and " + b + " is : "+ (a*b))
}

var division = (a,b)=>
{
    alert("Division of " + a +" and " + b + " is : "+ (a/b))

}
addition(a,b)
subtraction(a,b)
multiplication(a,b)
division(a,b)
