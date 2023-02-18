var num=Number(prompt("Enter a number for which you want to print the Table."))
Table()
function Table()
{
    for(let i=0;i<=10;i++)
    {
        var mul=num*i;
        alert(`${num} * ${i} = ${mul}`) 

    }
}