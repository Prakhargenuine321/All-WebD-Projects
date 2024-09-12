//whenever this function is called it will return prduct data
//in the JSON format.

import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLS = () => {
    let cartProducts = localStorage.getItem('cartProductLS');

    //if there is no data inside local storage iska mtlb koi bhi 
    //product cart maein nahi hai
    if(!cartProducts){
        return [];
    }

    //if there is product inside cart than return it's data
    //but we must remember that it is in string format so we need 
    //to convert it in JSON format first.
    cartProducts = JSON.parse(cartProducts);

    //before returning it we need to update it so that it will
    //be always updated.
    updateCartValue(cartProducts);

    //and return data now
    return cartProducts;
};