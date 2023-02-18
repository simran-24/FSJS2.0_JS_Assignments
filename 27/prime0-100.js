for(let i=1;i<=100;i++)
{
    var count=0;
    for(let j=2;j<=i/2;j++)
		{
           
			if(i%j==0)
			{
				count++;
                break
                
            }
		}
    if(count == 0 && i != 1 )
        {
            console.log( i);
        }  
	}








// if(number>=2)
// {
//     for(let i=1;i<=number;i++)
//         {  
//            if(number%i==0) 
//             {
//               count++
//             }
       
//         }
//     if(count==2)
//     {
//         alert("prime number ",number) 

//     }
//     else
//     {
//         alert("number is not a prime number ",number)

//     }  
    
// }
