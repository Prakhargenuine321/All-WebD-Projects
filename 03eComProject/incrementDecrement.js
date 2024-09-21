import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event, id, stock, price) => {

    //selecting card on which 'click' action is fired.
    const currentCardElement = document.querySelector(`#card${id}`);

    //selecting product quantity to update it's quantity.
    const productQuantity = currentCardElement.querySelector(".productQuantity");

    //selecting product price to update it.
    const productPrice = currentCardElement.querySelector(".productPrice");

    let quantity = 1;
    let localStoragePrice = 0;

    //fetching data from local storage
    let localCartProducts = getCartProductFromLS();

    //check if this card/product exist or not
    let existingProd = localCartProducts.find((curProd)=> curProd.id === id);

    if(existingProd){
        quantity = existingProd.quantity;
        localStoragePrice = existingProd.price;
    }else{
        localStoragePrice = price;
        price = price;
    }


    //toggling value of quantity.
    if(event.target.className === "cartIncrement"){
        if(quantity < stock){
            quantity+=1;
        }else if(quantity === stock){
            quantity = stock;
            localStoragePrice = price * stock;
        }
    }

    if(event.target.className === "cartDecrement"){
        if(quantity > 0){
            quantity-=1;
        }
    }

    //price update in local storage
    localStoragePrice = price * quantity;

    //fixing decimal digits but need to convert it in number
    localStoragePrice = Number(localStoragePrice.toFixed(2));

    let updatedCart = {id, quantity, price: localStoragePrice};

    updatedCart = localCartProducts.map((curProd)=>{
        return curProd.id === id ? updatedCart : curProd;
    })

    //now push update over local storage
    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

    productQuantity.innerText = quantity;
    productPrice.innerText = localStoragePrice;

    //this function will update cart total
    updateCartProductTotal();

}