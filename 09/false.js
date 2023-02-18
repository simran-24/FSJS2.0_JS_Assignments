//- Write three JavaScript statement example which provide falsy value.

//Write three JavaScript statement example which provide truthy value.
  

// Statement 1 : Check if the element contains less than 5 number

for(let i=0;i<5;i++)
{
    if(i>5);
}
console.log("The statement above is : " +  false);


// OUTPUT Will be :- 

// The statement above is : false

// =======================================================================

// Stament 2 :- create a function and check if it return true or not.

function check()
{
    return false;
}
let res=check();
    if(res===false)
    {
        console.log("The function returns : " + res);
    }

// OUTPUT Will be :- 

// The function returns : false

// =======================================================================

// Statement 3 :- create an arrow funtion and check if it return true or not.
var func = (a) =>  
{
    a=a+10;
    if(a<100)
    return false;
}
var result=func(10);
console.log(result);

// OUTPUT Will be :- 

// true