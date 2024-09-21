//to show product in cart we need both 
//API data and data in localstorage.

import products from "./api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLS } from "./getCartProductFromLS";
import { incrementDecrement } from "./incrementDecrement";
import { removeProductFromCart } from "./removeProductFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

//fetching data from cart.
let cartProducts = getCartProductFromLS();

//now filtering-out products that we have to show over our cart section
let filterProducts = products.filter( (curProd)=>{
    
    //to get details of product that is added to cart 
    //we use .some() method, it runs for each but returns if any of them 
    //will be true.
    return cartProducts.some((curElem) => curElem.id === curProd.id);
} );


//referencing the container where we have to put our cards.
const cartElement = document.querySelector('#productCartContainer');

//referencing template to clone it and generate cards dynamically.
const templateContainer = document.querySelector('#productCartTemplate');

//function that will showcase the products in the cart
const showCartProduct = ()=>{
    filterProducts.forEach((curProd)=>{
        //destructuring the data to showcase over cart.
        const { category, id, image, name, stock, price } = curProd;

        //cloning template.
        let productClone = document.importNode(templateContainer.content, true);

        //to get 'current-price' and 'quantity' we use local-storage data
        const lsActualData = fetchQuantityFromCartLS(id, price);

        //filing out the data in template.
        productClone.querySelector('#cardValue').setAttribute('id', `card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productQuantity").textContent = lsActualData.quantity;
        productClone.querySelector(".productPrice").textContent = lsActualData.price;

        //quantity incr and decr at cart page
        productClone.querySelector('.stockElement').addEventListener('click', (event)=>{
            incrementDecrement(event, id, stock, price);
        })


        //remove from cart button
        productClone.querySelector('.remove-to-cart-button').addEventListener('click', () => removeProductFromCart(id));

        
        cartElement.appendChild(productClone);
    });
}

showCartProduct();

//this function will update cart total
updateCartProductTotal();




