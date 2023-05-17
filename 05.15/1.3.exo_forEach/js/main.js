//Create 5 buttons.
//each button will call a function when clicked
//button1 calls function1
//button2 calls function2
//etc.
//Each function does something simple, like alert("Hi, i am funct1")

/***************************
 * Mon code
 ***************************/
/*
const Body = document.querySelector("body");
const Container = document.createElement("main");

function createBtn(btn,i){
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    const btn3 = document.createElement("button");
    const btn4 = document.createElement("button");
    const btn5 = document.createElement("button");

    btn.innerText = "Order Now";
    //btn2.innerText = "More Details";
    btn.addEventListener("click", orderProduct);
    img.src= "./assets/images/" + prod.img;

    article.append(h3, cats, desc, price, img, btn)
    //return article;
    Container.append(article);
};


function callBtn(){
    btn.innerText = `Button ${i}`;
    btn.addEventListener("click",);
}


Body.append(Container);
*/

/********************************************
************** Correction Meir **************
********************************************/

/* Je crée la variable qui correspond à mon conteneur
pour pouvoir à la fin balancer tout les éléments
que je vais créer dans mon conteneur*/
const Body = document.querySelector("body");

/*
1. Je crée chaque élément que j'associe à une variable,
ici il s'agit de mes différents btn
2. Je nomme le btn, innerText vas venir paramétrer
le texte qui s'affichera à l'intérieur de mon bouton
3. Je paramètre ce qui va se passer lors d'un évènement
ici, je lui dis que au click, il appel tel function
Il s'agit de le faire pour chaque élément 
que nous voulons construire
*/
/*
const btn1 = document.createElement("button");
btn1.innerText = "Button One";
btn1.addEventListener("click", func1);

const btn2 = document.createElement("button");
btn2.innerText = "Button Two";
btn2.addEventListener("click", func2);

const btn3 = document.createElement("button");
btn3.innerText = "Button Three";
btn3.addEventListener("click", func3);

const btn4 = document.createElement("button");
btn4.innerText = "Button Four";
btn4.addEventListener("click", func4);

const btn5 = document.createElement("button");
btn5.innerText = "Button Five";
btn5.addEventListener("click", func5);
*/

/*
Je crée chaque function qui correspondra à l'action
qui se produira lorsque je l'appelerai
ici, chaque function va afficher dans un pop-up
un texte différents pour dire "je suis le btn n°..."
*/
/*
function func1() {
    alert("hi, I am function one!");
};

function func2(){
    alert("hi, I am function Two!");
};

function func3(){
    alert("hi, I am function Three!");
};

function func4(){
    alert("hi, I am function Four!");
};

function func5(){
    alert("hi, I am function Five!");
};
*/

/*
Enfin, une fois que nous avons crée nos btn,
que nous les avons nommée, que nous avons dis
quoi faire à l'évènement clic, on va les intégré 
au conteneur par la fonction .append
*/
//Body.append(btn1,btn2,btn3,btn4,btn5);


/*
On peut également faire ça en utilisant forEach
On crée un Obje
 
*/

/* 1e façon*/
/*
const Btns = [
    { name: "One"},
    { name: "Two"},
    { name: "Three"},
    { name: "Four"},
    { name: "Five"},
];

Btns.forEach(createBtns);
function createBtns(x){
    var btn = document.createElement("button");
    btn.innerText = "Button " + x.name;
    btn.addEventListener("click", func);
    function func(){
        alert(`Hi, I am func ${x.name}`);
    };
    Body.append(btn);
};
*/
/* 
2e façon ou l'objet comprend également sa propre fucntion
*/
const Btns = [
    { name: "One",
        func : function () {
        alert("hi, I am function one!");  
        }    
    },
    { name: "Two",
    func : function () {
        alert("hi, I am function Two!");  
    }},
    { name: "Three",
    func : function () {
        alert("hi, I am function Three!");  
    }},
    { name: "Four",
    func : function () {
        alert("hi, I am function Four!");  
    }},
    { name: "Five",
    func : function () {
        alert("hi, I am function Five!");  
    }},
];

Btns.forEach(createBtns);
function createBtns(x){
    var btn = document.createElement("button");
    btn.innerText = "Button " + x.name;
    btn.addEventListener("click", x.func);
    
    Body.append(btn);
};