export const addToCart = (event , id , stock) => {

    let arrLocalStorageProduct = getCartProductFromLS();

    const currentProductElem = document.querySelector(`#card${id}`);

    let quantity = currentProductElem.querySelector(".productQuantity").innerText;

    let price = currentProductElem.querySelector(".productPrice").innerText;



}