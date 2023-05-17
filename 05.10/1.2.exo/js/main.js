// 1. in your HTML, you must only hame a main tag.
// 2. in JS, create a container div for all your products. 
// 3. Run a loop through each product that will create a separate tag (article) per item.
// 4. Each property will have its own tag (div, h3, p, span, img...) and a class to style it.
// 5. after the article tag is ready, append it to a container.
// 6. once the code is out of the loop, take the container and append it to the main tag in your HTML.


const Products = [
    {
        id: 1,
        title: "The Must Have Watch",
        categories: ["Watches", "Luxury", "Sport"],
        description: "This describes the most beautiful watch",
        price: 1800,
        img: "watch.jpg",
    },
    {
        id: 2,
        title: "The Every Day Suit",
        categories: ["Suit", "Luxury", "Casual"],
        description: "This describes the most beautiful Suit",
        price: 2500,
        img: "suit.jpg",
    },
    {
        id: 3,
        title: "The Must Have Shoes",
        categories: ["Shoes", "Luxury", "Confortable"],
        description: "This describes the most beautiful shoes",
        price: 800,
        img: "shoes.jpg",
    },
    {
        id: 4,
        title: "The Borsalino Hat",
        categories: ["Hat", "Comfortable", "Chic"],
        description: "This describes the most beautiful Hat",
        price: 2900,
        img: "hat.jpg",
    },
    {
        id:5,
        title: "The Must Have Sweat",
        categories: ["Sweat", "Sportswear", "confortable"],
        description: "This describes the most beautiful Sweat",
        price: 400,
        img: "sweat.jpg",
    },
]



/**
 * Mon essai....
 * 
const DOM = {
    Main: document.querySelector("main"),
};


function addDiv() {
    var div = document.createElement("div");
    div.className = "";
    div.innerHTML = "";

    var text = DOM.TextInput.value;
    var p = document.createElement("p");
    p.className = "info-text";
    
    

    var spanText = document.createElement("span");
    spanText.innerHTML = text;
    p.append(spanDate, spanText);
    DOM.Main.append(p);
    p.addEventListener("click", changeBG);
    DOM.TextInput.value = ""; // on efface le contenu du textarea
};

*/

/*
Correction de Meir
*/

//1.
const Main = document.querySelector("main");
//2.
const Container = document.createElement("div");
//3. 
Container.className = "products-container";

/*
for (let i = 0; i < array.length; i++) {
    const p = Products[i];
    Container.append(createArticle(p));
};
*/

/* tout àa est fait par la fonction forEach
Products.meirEach = function(callback){
    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        callback(element, i);
    }
};

Products.meirEach(createArticle);
*/

Products.forEach(createArticle);


function createArticle(prod){
    const article = document.createElement("article");
    article.className = "each-prod";
    const h3 = document.createElement("h3");
    const cats = document.createElement("p");
    const desc = document.createElement("p");
    const price = document.createElement("h4");
    const btn = document.createElement("button"); 
    //const btn2 = document.createElement("button2");
    const img = document.createElement("img");

    article.id = "prod_" + prod.id;
    h3.innerText = prod.title;
    cats.innerText = prod.categories.join(", ");
    desc.innerText = prod.description;
    price.innerText = prod.price;
    btn.innerText = "Order Now";
    //btn2.innerText = "More Details";
    btn.addEventListener("click", orderProduct);
    img.src= "./assets/images/" + prod.img;

    article.append(h3, cats, desc, price, img, btn)
    //return article;
    Container.append(article);
};

function orderProduct(){
    var productID = this.parentElement.id.split("_")[1];
    alert("you bought this product: " + productID);
};

Main.append(Container);
