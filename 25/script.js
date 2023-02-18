// 25. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more

var weight=Number(prompt("Enter your weight (in Kg)"));
var height=Number(prompt("Enter your height (in cm)"));
valid()

function BMI()
{
    height=height/100;
    var bmi=weight/(height*height);    
    return bmi;
}

function valid() 
{
    var cal=BMI()
    if (cal<=18.5)
    {
        alert("Underweight")
    }
    else if (cal>18.5 && cal<=24.9)
    {
        alert("Normal weight")
    }
    else if (cal>=25 && cal<=29.9)
    {
        alert("Overweight")
    }
    else if (cal >=30)
    {
        alert("Obese")
    }

}

