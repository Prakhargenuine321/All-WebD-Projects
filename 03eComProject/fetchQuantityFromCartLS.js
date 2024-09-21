import { getCartProductFromLS } from "./getCartProductFromLS"

export const fetchQuantityFromCartLS = (id, price) => {
    let cartProducts = getCartProductFromLS();

    //we need to return the price of current product from local storage
    let existingProduct = cartProducts.find((curProd)=> curProd.id === id );

    let quantity = 1; //by default value

    //if product is existing in LS than we fetch it's 
    //'quantity' and 'price'.
    if(existingProduct){
        quantity = existingProduct.quantity;
        price = existingProduct.price;
    }

    return { quantity, price};
}; 