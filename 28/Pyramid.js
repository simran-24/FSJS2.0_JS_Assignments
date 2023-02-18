Num=5;
for(let i=1;i<=Num;i++)  
{  
    for(let k=Num;k>=i;k--)
    {
        process.stdout.write(" ");}
        for(let j=1;j<=i;j++)  
            { 
                if(j%2!==0) 
                    {
                         process.stdout.write("*"); 
                          
                    }
                    process.stdout.write("\n"); 
   

            }  
  
            
            
}


