
//function to toggle quantity of the current product
export const homeQuantityToggle = (event, id, stock) => {

    //now we need to select the card jis par humnae click kiya hai
    const currentCardElement = document.querySelector(`#card${id}`);
    
    //selecting product quantity div to update value after updation
    const productQuantity = currentCardElement.querySelector('.productQuantity');

    //inspite of doing 'innerText' we can update it by setting attribute 'data-quantity'.

    //as it is an 'string' so we can convert it into 'int' format.
    let quantity = parseInt(productQuantity.getAttribute('data-quantity')) || 0;
    
    //now condition ki kis button par click hone par kya hoga
    if(event.target.className === "cartIncrement"){
        if(quantity < stock){
            quantity+=1;
        }else if(quantity === stock){
            quantity = stock;
        }
    }

    if(event.target.className === "cartDecrement"){
        if(quantity > 0){
            quantity-=1;
        }
    }

    productQuantity.innerText = quantity;

    //we need to also update this quantity otherwise it will always be set to '0'
    productQuantity.setAttribute('data-quantity', quantity.toString());
    return quantity;
};