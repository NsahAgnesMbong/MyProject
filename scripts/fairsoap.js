//import {cart} from "./scripts/cart.js";
const fairSkinSoap=[
    {
        id:"10sv",
        image:"images/pawpaw.jpg",
        name:"PAWPAW",
        text:"good for fair shin individuals and its adviceable to use it ",
        price:3
    },
    {
        id:"11sv",
        image:"images/f&ws(1).jpg",
        name:"MISS WHITE",
        text:"good for fair shin individuals and its adviceable to use it",
        price:3
    },
    {
        id:"12sv",
        image:"images/bbclearsoap.jpg",
        name:"B.B.CLEAR",
        text:"good for fair shin individuals and its adviceable to use it",
        price:3
    },
    {
        id:"13sv",
        image:"images/clinicgold.jpg",
        name:"CLINIC GOLD",
        text:"good for fair shin individuals and its adviceable to use it",
        price:2
    },
    {
        id:"14sv",
        image:"images/fairchildsoap.jpg",
        name:"FAIR CHILD",
        text:"good for fair shin individuals and its adviceable to use it",
        price:2
    },
    {
        id:"15sv",
        image:"images/naturesecretsoap.jpg",
        name:"NATURE SECRETE",
        text:"good for fair shin individuals and its adviceable to use it",
        price:2
    },
    {
        id:"16sv",
        image:"images/kojicacidsoap.jpeg",
        name:"KOJIC ACID SOAP",
        text:"good for fair shin individuals and its adviceable to use it",
        price:2
    }
];
let cart =JSON.parse(localStorage.getItem("cart"))||[];
function addProductToCart(productId){
    const product = fairSkinSoap.find(product =>product.id === productId); 
    if(product){
        cart.push(product);
        localStorage.setItem('cart',JSON.stringify(cart));
        alert("product addede to cart");
    }
}
function displayProduct(){
    let fairsavons ="";
    fairSkinSoap.forEach((product)=>{
        fairsavons +=`<div class="col-sm-3">
            <div class="card card-body my-3  shadow">
                <div class="product-image">
                        <img src="${product.image}"class="card-img img-circle"></div>
                        <p class="text-center product-name"><b>${product.name}</b><br>${product.text} <a href="#">see more</a></p>
                        <h1 class="text-center text-warning product-price">$${product.price}</h1>
                        <button onclick="addProductToCart(${product.id})" class="btn btn-outline-warning add-to-cart"data-product-id="${product.id}">ADD TO CARD</button>
                    </div>
                
            </div>`;
});
let fairsoapContent = document.getElementById("fairSkinSoap-content");
fairsoapContent.innerHTML = fairsavons;
console.log(fairsoapContent.innerHTML = fairsavons);
}
document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("view-cart").addEventListener(("click"),()=>{
        window.location.href="cart.html";
    });
});
console.log(displayProduct());







/*document.querySelectorAll(".add-to-cart").forEach((btn) => {
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
        document.write(cartQuantity);
        document.write(cart);
    });
});
/*document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click",()=>{
        //document.write("added");
       // console.log(button.dataset);
    });
});*/