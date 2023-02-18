//The following is an array of 10 students ages:
    // => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    // - Sort the array and find the min and max age
    // - Find the median age(one middle item or two middle items divided by two)
    // - Find the average age(all items divided by number of items)
    // - Find the range of the ages(max minus min)
    // - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

console.log("This is median " + median())       //Median

console.log("Sorted array :- " + ages.sort())   //Sorted the array

console.log("Min Value : - ",Math.min(...ages)) //Minimum value

console.log("Max Value : - ",Math.max(...ages)) //Maximum value

console.log("Average age : - " + average())     //Average age

console.log("Range if the ages :- " , range())  //Range

absolute() //absolute value 


// average

function average() 
{
    var Total_ages= 0
    for(let i=0;i<ages.length;i++)
    {
        Total_ages=Total_ages+ages[i];
    }
    avg= Total_ages/ages.length;
    return avg
}

// range

function range()
{
    let rangeofitems= Math.max(...ages)-Math.min(...ages)
    return rangeofitems
}

// absolute

function absolute()
{
    CompareMIN= Math.abs(Math.min(...ages) - average());
    CompareMAX = Math.abs(Math.max(...ages) - average());
    console.log("Compare minimum :- " + CompareMIN) ;
    console.log("Compare Maximum :- " + CompareMAX)
}
// median

function median()
{
    let ages1=ages.sort()
    if(ages.length%2==0)  
    {
    let half=ages.length/2
  
    median_val= (ages1[half]+ ages1[half+1])/2
    return median_val
    }
    else
    {
        let half=ages.length/2;
     
        median_val= ages1[half+1];
        console.log("MEd" + median_val)
        return median_val
    }
     
}

