export const showToast = (operation, id) => {

    const toast = document.createElement("div");
    toast.classList.add("toast");

    //set the toast content based on the operation
    if(operation === "add"){
        toast.textContent = `Your product with id: ${id} is added`;
    } else{
        toast.textContent = `Your product with id: ${id} is removed`;
    }

    document.body.appendChild(toast);

    //automatically remove the toast after a few seconds using timeout
    setTimeout(()=>{
        toast.remove();
    }, 2000);
}