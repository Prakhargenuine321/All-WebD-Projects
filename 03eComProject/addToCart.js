import { getCartProductFromLS } from "./getCartProductFromLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS(); //by default it will run so that cart will
//always be updated.

export const addToCard = (event, id, stock) => {

    //storing data inside local storage so that if user refresh page than also
    //jo product usnae cart maein add kiya hai will not be changed.
    let arrLocalStorageProduct = getCartProductFromLS();

    //1st task is to find ki user nae kis card ko clck kiya hai
    //selecting the product for which click event is occured
    const currentProdElem = document.querySelector(`#card${id}`);
    
    //from above selected element we need 'quantity' and 'price'

    let quantity = currentProdElem.querySelector('.productQuantity').innerText; //getting quantity
    let price = currentProdElem.querySelector('.productPrice').innerText; //getting price

    //price is containing '₹' sign so if we calculate total price 
    //by price*quantity we will get error always so before using it remove '₹'

    price = price;
    
    price = price.replace('₹', '');

    //we need to put extra check as if product is already inside cart
    //than no need to add it inside array of objects
    //just update it's quantity and total price.

    //.find() will traverse whole array of rpoducts with their id 
    //and if that id matches with current current id then it means
    //ki yaeh product hai so we need to just put update quantity 
    //and total price.
    let existingProd = arrLocalStorageProduct.find((currProd) => currProd.id === id);


    //if product is existing and user chooses more than 1 
    //than only update only that object rest will remain same
    if(existingProd && quantity > 1){
        quantity = Number(existingProd.quantity) + Number(quantity);
        price = Number(price * quantity);
        let updatedCart = {id, quantity, price};

        updatedCart = arrLocalStorageProduct.map((currProd) => {
            return currProd.id === id ? updatedCart : currProd;
        })
        localStorage
        .setItem("cartProductLS", JSON.stringify(updatedCart));

        //show toast when product added to cart
        showToast("add", id);
    }

    if(existingProd){

        return false;
    }

    price = Number(price*quantity); //here we will have our total price
    
    //converting quantity into number form.
    quantity = Number(quantity);
    arrLocalStorageProduct.push({id, quantity, price});
    localStorage.setItem('cartProductLS', JSON.stringify(arrLocalStorageProduct));

    //function to update number of products in cart image
    updateCartValue(arrLocalStorageProduct);

    //update and then now show toast 
    showToast("add", id);
};