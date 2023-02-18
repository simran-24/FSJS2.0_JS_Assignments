// Write a program which can give grades to students according to theirs scores:
// - 80-100, A
// - 70-79, B
// - 60-69, C
// - 50-59, D
// - 0-49, F
 const score = prompt("Enter your Score between 0-100:")
 {
    // if (score<0 | score>100)
    // {
    //     alert("Enter number between 0-100")
    // }
    if(score>=80 && score<=100)
    {
        alert("Your Grade is A")
    }
    if(score>=70 && score<=79)
    {
        alert("Your Grade is B")
    }
    if(score>=60 && score<=69)
    {
        alert("Your Grade is C")
    }
    if(score>=50 && score<=59)
    {
        alert("Your Grade is D")
    }
    if(score>=0 && score<=49)
    {
        alert("Your Grade is F")
    }
 }