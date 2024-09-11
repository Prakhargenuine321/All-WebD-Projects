export const addToCard = (event, id, stock) => {

    //1st task is to find ki user nae kis card ko clck kiya hai
    //selecting the product for which click event is occured
    const currentProdElem = document.querySelector(`#card${id}`);
    
    //from above selected element we need 'quantity' and 'price'

    let quantity = currentProdElem.querySelector('.productQuantity').innerText; //getting quantity
    let price = currentProdElem.querySelector('.productPrice').innerText; //getting price
};