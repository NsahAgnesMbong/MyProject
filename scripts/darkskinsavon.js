//import {cart,addToCart} from "./scripts/cart.js";
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
document.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click",()=>{
        const productId =btn.dataset.productId;
        let matchingItem;
        cart.forEach((cartItem)=>{
            if(productId === cartItem.productId){
                matchingItem =cartItem;
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
        cart.forEach((cartItem)=>{
            cartQuantity += cartItem.quantity;
        });
        document.querySelector('.cart-quantity').innerHTML =cartQuantity;
        console.log(cartQuantity);
        console.log(cart);
    });
});
/*function addToCartButton(event){
    console.log("button clicked");
     const productId = event.target.getAttributes("data-product-id");
    const product=savonProducts.find(product=>product.id=== parseInt(productId));
    CartProduct(product);
}
function CartProduct(product){
    const cart = JSON.parse(localStorage.getItem("cart"))||[];
    const existingProduct = cart.find(cartProduct=>cartProduct.id===product.id);
    if(existingProduct){
        existingProduct.quantity++;
    }else{
        cart.push({...product,quantity:1});
    }
    localStorage.setItem("cart",JSON.stringify(cart));
    window.location.href = 'cart.html';
};
document.querySelectorAll("button").addEventListener(("click"),event=>{
    if(event.target.classList.contains("add-to-cart")){
        addToCartButton(event);
    }
});*/
