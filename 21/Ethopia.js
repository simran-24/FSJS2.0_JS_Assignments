let countries=["India","Bangladesh","USA","UK","Japan"];

function search()
{
    for(let i=0;i<countries.length;i++)
        {
            if(countries[i]=="ethopia")
            {
                countries[i]=countries[i].toUpperCase();
                return countries;
            } 
            add_element=countries.unshift("ethopia")
            return countries  
        }
      
}
let return_val=search()
console.log(return_val)
