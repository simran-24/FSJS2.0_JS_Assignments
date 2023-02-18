Num=3;
// ===========================Method 1 =============================

// let i=0;
// for(;i<Num;i++);
//     {
//        for(let j=1;j<=i;j++)
//        {
//         pattern=" * ";
//         console.log(pattern.repeat(j))
//        }
//     }

// =========================== Method 2 =============================


for(let i=1;i<=Num;i++)  
{  
    for(let j=1;j<=i;j++)  
    {  
       process.stdout.write("* ");  
    }  
    console.log("\n");  
}

//Output :- 

// * 

// * * 

// * * * 


