const fairskinLotion=[
    {
        id:"10f",
        image:"images/dso(1).jpg",
        name:"JERGENS",
        text:" for moisturing skin and giving good look as",
        price:8
    },
    {
        id:"11f",
        image:"images/f&wchildlotion.jpg ",
        name:"FAIR & WHITE",
        text:" for moisturing skin and giving good look as",
        price:8
    }, {
        id:"12f",
        image:"images/dove.jpg",
        name:"DOVE",
        text:" for moisturing skin and giving good look as",
        price:8
    },
    {
        id:"13f",
        image:"images/fair&white.jpg",
        name:"F & W ",
        text:" for moisturing skin and giving good look as",
        price:8
    },
    {
        id:"14f",
        image:"images/image(17).jpeg.jpg",
        name:"WHITE SECRET",
        text:" for moisturing skin and giving good look as",
        price:8
    },
    {
        id:"15f",
        image:"images/images-6.jpeg",
        name:"TOPSY",
        text:" for moisturing skin and giving good look as",
        price:8
    },
    {
        id:"16f",
        image:"images/superfoodoil.jpg",
        name:"SUPERFOOD",
        text:" for moisturing skin and giving good look as",
        price:8
    }
]
let fairSkinContent = document.getElementById("fairskinLotion-content");
let fairLotion ="";
fairskinLotion.forEach((product)=>{
    fairLotion +=`<div class="col-sm-3">
                    <div class="card card-body my-3 shadow ">
                        <div class="product-image"><img src="${product.image}"class='card-img img-circle'></div>
                        <p class="text-center user-select-all product-name"><b>${product.name}</b><br>${product.text} <a href="#">see more</a></p>
                        <h3 class="text-center text-danger">$${product.price}</h3>
                        <button class="btn btn-outline-danger add-to-cart"data-product-name="${product.name}">ADD TO CARD</button>
                    </div>
                </div>`
});
fairSkinContent.innerHTML = fairLotion;
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
        //console.log(cartQuantity);
        //console.log(cart);
    });
});