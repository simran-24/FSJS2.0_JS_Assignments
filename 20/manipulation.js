//20. In the following shopping cart add, remove, edit items
    // => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    // - add 'Meat' in the beginning of your shopping cart if it has not been already added
    // - add Sugar at the end of your shopping cart if it has not been already added
    // - remove 'Honey'
    // - modify Tea to 'Green Tea'


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
let x="Meat";
let y="Sugar";


function addfirst()
{
    for(let i=0;i<shoppingCart.length;i++)
    {
        if(shoppingCart[i]==x)
        return shoppingCart;  
                  
    }
     shoppingCart.unshift(x);
     return shoppingCart
}
function addLast()
{
    for(let i=0;i<shoppingCart.length;i++)
    {
        if(shoppingCart[i]==y)
        return shoppingCart;  
                  
    }
     shoppingCart.push(y);
     return shoppingCart
}

function print_values()
{
    let unshift_element=addfirst()
    console.log(unshift_element)

    let push_element=addLast()
    console.log(push_element)

    let remove_last=push_element.pop()
    console.log(push_element)

    push_element[3]="Green Tea";
    console.log(push_element)
}

print_values()