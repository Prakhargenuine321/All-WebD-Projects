import './style.css';
import products from "./api/products.json";
import { showProductContainer } from './homeProductCards';


//1)this method will take "array of products" as an input.
showProductContainer(products); 







//Notes:-
//1)Hum "const myFunction = require('./myModule')" bhi use kar sakte hain but this is most widely used for
//'nodeJS' environment projects and it is an older syntax.