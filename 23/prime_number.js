let number=prompt("Enter a number" );
let count=0;
if(number>=2)
{
    for(let i=1;i<=number;i++)
        {  
           if(number%i==0) 
            {
              count++
            }
       
        }
    if(count==2)
    {
        alert("prime number ",number) 

    }
    else
    {
        alert("number is not a prime number ",number)

    }  
    
}
