/*export const cart=[
    {
    productId :"10s",
    quantity:1
},
{
    productId :"11s",
    quantity:1
},
];
function addToCart(productId){
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
    };
    let CartList = document.getElementById(".cartlist")*/
    const cartList = document.getElementById("cart-list");
    const cart =JSON.parse(localStorage.getItem("cart"))||[];
    function displayCart(){
        let cartHTML ="";
        cart.forEach((product)=>{
            cartHTML +=`<div class="col-sm-3">
                    <div class="card card-body my-3 shadow"><div class="product-image">
                        <img src="${product.image}"class="card-img-top"></div>
                        <p class="text-center product-name"><b>${product.name}</b><br>${product.text} <a href="#">see more</a></p>
                        <h3 class="text-center text-danger">$${product.price}</h3>
                        <p class="text-center product-quantity">Quantity:${product.quantity}</p>
                        <button class="btn btn-outline-success remove-from-cart"data-product-id="${product.id}">Remove</button>
                    </div>
                </div>`;
        });
    }
    