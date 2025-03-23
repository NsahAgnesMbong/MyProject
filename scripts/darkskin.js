const darkskinProducts =[{
    id :"10d",
    image :"images/image(2).jpeg.jpg",
    name: " NIVEA",
    text:"moisturises your skin. Come and make your skin glow ",
    price:18
},{
        id:"11d",
        image:"images/image(3).jpeg.jpg",
        name:"CARO LIGHT",
        text:"good for both dark and light skin people",
        price:10
    },{
        id:"12d",
        image:"images/image(4).jpg",
        name:"CARO WHITE",
        text:"good for both dark and light skin people",
        price:7
    },
    {
        id:"13d",
        image:"images/image(10).jpeg.jpg",
        name:"GIRL FRIEND ",
         text:"good for both dark and light skin people",
        price:4
    },
    {
        id:"14d",
        image:"images/image(11).jpeg.jpg",
        name:" EVERYBODY",
        text:"good for both dark and light skin people",
        price:5
    },
    {
        id:"15d",
        image:"images/dsko(4).jpg",
        name:"NEUTROGENA",
        text:"good for both dark and light skin people",
        price:5
    },
    {
        id:"16d",
        image:"images/image(16).jpeg.jpg",
        name:"VASELINE",
        text:"good for both dark and light skin people",
        price:5
    }, {
        id:"17d",
        image:"images/dsko(4).jpg",
        name:"NEUTROGENA",
        text:"good for both dark and light skin people",
        price:5
    }, {
        id:"18d",
        image:"images/dsko(4).jpg",
        name:"NEUTROGENA",
        text:"good for both dark and light skin people",
        price:5
    }
];
const cart =JSON.parse(localStorage.getItem("cart"))||[];
let productHtml ="";
function generateCart(){
    darkskinProducts.forEach((product)=>{
    productHtml +=`<div class="product-container col-sm-3">
    <div class="card card-body p-4 mx-auto my-3 shadow">
    <div class="product-image"> <img src="${product.image}"class="card-img img-circle"style="height:127px;"></div>
    <p class="text-center product-name"><b>${product.name}</b><br>
    ${product.text} <a href="#">see more</a><b><p class="text-center">$${product.price}</p></b>
    <button class="btn btn-outline-danger js-add-to-cart" data-product-id="${product.id}">ADD TO CART</button>
    </div>
    </div>`;
    let generatedContent = document.getElementById("generate-content");
    generatedContent.innerHTML = productHtml;                
});
};
//generatedContent.innerHTML = productHtml; 
/*document.querySelectorAll("button[textContent='ADD TO CART']").forEach((button)=>{
    button.addEventListener("click",()=>{
        console.log("added");
    })
})
document.querySelectorAll(".js-add-to-cart").forEach((btn) => {
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
});*/
function addToCartButton(productId){
    const product =darkskinProducts.find(product=>product.id === productId);
    const existingProduct = cart.find(cartProduct=> cartProduct.id === productId);
    if(existingProduct){
        if(existingProduct.quantity){
        existingProduct.quantity++;}else{
            existingProduct.quantity=1;
        }
    }else{
        cart.push({...product,quantity:1});
    }
    localStorage.setItem("cart",JSON.stringify(cart));
}
generateCart();
document.addEventListener(("click"),event=>{
    if(event.target.classList.contains('js-add-to-cart')){
        const productId = event.target.getAttributes("data-product-id");
        addToCartButton(parseInt(productId));
        alert("item added to cart");
        }
});