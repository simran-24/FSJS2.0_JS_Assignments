//Write three JavaScript statement example which provide truthy value.
  

// Statement 1 : Check if the element contains less than 5 number

for(let i=0;i<5;i++)
{
    if(i<5);
}
console.log("The statement above is : " +  true);


// OUTPUT Will be :- 

// The statement above is : true

// =======================================================================

// Stament 2 :- create a function and check if it return true or not.

function check()
{
    return true;
}
let res=check();
    if(res===true)
    {
        console.log("The function returns : " + res);
    }

// OUTPUT Will be :- 

// The function returns : true

// =======================================================================

// Statement 3 :- create an arrow funtion and check if it return true or not.
var func = (a) =>  
{
    a=a+10;
    if(a>100)
    return true;
}
var result=func(100);
console.log(result);

// OUTPUT Will be :- 

// true