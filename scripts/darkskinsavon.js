import {cart} from "./scripts/cart.js";
const savonProducts=[{
    id:"10s",
    image:"images/image(6).jpeg.jpg",
    name:"GIRLFRIEND",
    text:"good for both dark anf light skin people",
    price:15
},{
id:"11s",
image:"images/image(8).jpeg.jpg",
name:"DUDU-OSUN",
text:"good for both dark anf light skin people",
price:10
},{
id:"12s",
image:"images/image(13).jpeg.jpg",
name:"MEKAKO",
text:"good for both dark anf light skin people",
price:10
},{
id:"13s",
image:"images/ciensavon.jpg",
name:"CIEN",
text:"good for both dark anf light skin people",
price:3
},{
id:"14s",
image:"images/maisonsavon.jpg",
name:"MASION DU LAURIER",
text:"good for both dark anf light skin people",
price:3
},{
id:"15s",
image:"images/maisonsavon.jpg",
name:"LOVE",
text:"good for both dark anf light skin people",
price:5
},{
id:"16s",
image:"images/maisonsavon.jpg",
name:"PINK",
text:"good for both dark anf light skin people",
price:3
}
]
let pageContent = document.getElementById("page-content");
let savonHTML ="";
savonProducts.forEach((product)=>{
    savonHTML +=` <div class="col-sm-3">
                    <div class="card card-body my-3 shadow"><div class="product-image">
                        <img src="${product.image}"class="card-img-top"></div>
                        <p class="text-center product-name"><b>${product.name}</b><br>${product.text} <a href="#">see more</a></p>
                        <h3 class="text-center text-danger">$${product.price}</h3>
                        <button class="btn btn-outline-success  add-to-cart"data-product-id="${product.id}">ADD TO CARD</button>
                    </div>
                </div>`
});
console.log(pageContent.innerHTML =savonHTML);
document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click",()=>{
        console.log(button.dataset);
    });
});
document.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click",()=>{
        const productId =btn.dataset.productId;
        let matchingItem;
        cart.forEach((item)=>{
            if(productId === item.productId){
                matchingItem =item;
            }
        });
        if(matchingItem){
            matchingItem.quantity +=1;
        }else{
            cart.push({
                productId:productId,
                quantity:1
            });
           
        }
        let cartQuantity =0;
        cart.forEach((item)=>{
            cartQuantity += item.quantity;
        });
        document.querySelector('.cart-quantity').innerHTML =cartQuantity;
        console.log(cartQuantity);
        console.log(cart);
    });
});