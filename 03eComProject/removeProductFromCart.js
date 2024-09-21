import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCartValue } from "./updateCartValue";

export const removeProductFromCart = (id) => {
    
    //fetching added products detail from local-storage.
    let cartProducts = getCartProductFromLS();

    //so using filter we can update the cartProducts 
    //by filtering out the clicked card.
    cartProducts = cartProducts.filter((curProd) => curProd.id !== id);
    
    //upadting the data in localstorage
    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

    //but problem us that remove will not update over interface at that time you need to 'reload' the page,
    //to tackle this we will remove that card if it is still there
    let removeDiv = document.getElementById(`card${id}`);
    if(removeDiv){
        removeDiv.remove();
    }

    //now update the cart value (icon)
    updateCartValue(cartProducts);

    //this function will update cart total
    updateCartProductTotal();
};