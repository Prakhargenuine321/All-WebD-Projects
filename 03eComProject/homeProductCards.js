import { addToCard } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

//2)selecting container where we will append our cards.
const productContainer = document.querySelector("#productContainer");

//3)selecting template to clone it and create cards dynamically.
const productTemplate = document.querySelector("#productTemplate");

export const showProductContainer = (products) => {
  //1)if there are no products(array is empty)
  if (!products) {
    return false;
  }

  //4)now iterating over the 'array of objects' to access get data for each card.
  products.forEach((curProd) => {
    //5)'currElem' is containing whole data of an product
    //so we need to destructure data to use it efficiently.

    const { brand, category, description, id, image, name, price, stock } = curProd;

    //6)Now cloning the template
    //here 'importNode()' is method to get that node and '.content' will tell it to also clone all its descendant node,
    //actually here we are making 'deep-copy'

    const productClone = document.importNode(productTemplate.content, true);

    //to uniquely identify each card we will set unique 'id' for each card.
    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);


    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector(".productDescription").textContent = description;
    productClone.querySelector(".productPrice").textContent = `₹${price}`;
    productClone.querySelector(".productActualPrice").textContent = `₹${price * 4}`;

    //7)function to '+' and '-' the quantity of product, 
    productClone.querySelector('.stockElement').addEventListener('click', (event) =>{

      //'id' is used to uniquely identify ki kis par card par click hua hai jissae sirf usi par hi 
      //quantity update ho.
      homeQuantityToggle(event, id, stock); 
    });

    //8)function to add product to cart
    productClone.querySelector('.add-to-cart-button').addEventListener('click', (event) =>{
      
      //function to addToCard
      addToCard(event, id, stock);
    });


    productContainer.append(productClone);
  });
};
