// Figure out the result of the following comparison expression first without using console.log().
// After you decide the result confirm it using console.log()
    
//    (a) // 4 > 3 
    // 4 >= 3
    // 4 < 3 
    // 4 <= 3 
    // 4 == 4  
    // 4 === 4 
    // 4 != 4  
    // 4 !== 4 
    // 4 != '4'
    // 4 == '4'
    // 4 === '4' 
   
   
   console.log( 4 > 3);         //true
   console.log( 4 >= 3);        //true
   console.log(4 < 3);          //false
   console.log( 4 <= 3);        //false
   console.log( 4 == 4);        //true
   console.log( 4 === 4);       //true
   console.log( 4 != 4);        //false
   console.log(4 !== '4');      //true
   console.log( 4 != '4');      //false
   console.log(4 == '4');       //true
   console.log( 4 === '4');     //false



// Output Will be :- 

// true
// true
// false
// false
// true
// true
// false
// true
// false
// true
// false


 // (b)  // Find the length of python and jargon and make a falsy comparison statement.

  let string1="python";
  let string2="jargon";

  let len_str1=string1.length;
  let len_str2=string1.length;

 console.log(`The length of ${string1} : ` + len_str1);
 console.log(`The length of ${string2} : ` + len_str2);
 console.log("The length of  string \"python and jargon\" is not equal : -" , len_str1!=len_str2);


 // Output Will be :- 
//  The length of python : 6
//  The length of jargon : 6
//  The length of  string "python and jargon" is not equal : - false