/* 
Exemple de fonction simple qui va quand on l'appelera fera afficher "Hello"

function clicked (){
    alert("Hello");
};

Voici comment appeler cette fonction
DOM.Btn.addEventListener("click", clicked)  

Cette appel dit la chose suivante :
Tu prend l'object DOM 
Tu prend l'element Btn de cette Object
et tu appel la fonction addEventListener
la fonction addEvenListener fait appel à une fonction qui dis : qd on click, appel la fonction "clicked"
La fonction addEventListener est détaillé plus loin

*/

/*
const Main = document.querySelector("main");
const TextInput = document.querySelector("#add-text");
const Btn = document.querySelector("#add-text-btn");
*/

/**********************************
Pour que le code soit plus propre, 
le mieux est de créer un objet qui 
comprendra toutes ces constantes
***********************************/

const DOM = {
    Main: document.querySelector("main"), // on réccupère la balise <main>
    TextInput: document.querySelector("#add-text"), // on récupère l'élément qui à l'id (#) add-text, en l'occurence dans notre cas la balise <textarea>
    Btn: document.querySelector("#add-text-btn"), // on récupère l'élément qui à l'id (#) add-text-btn, en l'occurence dans notre cas la balise <button>
    Ps: document.querySelector(".info-text"), // on récupère l'élément qui à la classe (.) info-text, en l'occurence dans notre cas la balise <p>
};

/* 1e fonction d'ajouter un paragraphe en cliquant sur le bouton, mais a chaque fois il efface tout et ré écrit de nouveau 
function addParagrap() {
    var text = DOM.TextInput.value;
    var p = `<p class="info-text">
            <span class="tooltip">10.05.23 by ${prompt("What's your name ?")}</span>${text}</p>`;
    DOM.Main.innerHTML += p;
}
*/
/* **************************************************** 
Pour simplement rajouter un paragraphe supplémentaire, 
on écrit la fonction comme ceci :
*******************************************************/

/*
function addParagrap() {
    var text = DOM.TextInput.value;
    var p = document.createElement("p");
    p.className = "info-text";
    p.innerHTML = `<span class="tooltip">10.05.23 by ${prompt("What's your name ?")}</span>${text}`;
    DOM.Main.append(p);
    p.addEventListener("click", changeBG);
};
*/

/*************************************************
On peut également améliorer la fonction pour que 
le texte qu'on ajoute soit inclus 
lui aussi dans une balise span
**************************************************/

function addParagrap() {
    var text = DOM.TextInput.value;  // on crée une variable qui va reprendre la valeur rentré dans le TextInput
    var p = document.createElement("p");
    p.className = "info-text";
    
    var spanDate = document.createElement("span");
    spanDate.className = "tooltop";
    spanDate.innerHTML = `10.05.23 by ${prompt("What's your name ?")}`;

    var spanText = document.createElement("span");
    spanText.innerHTML = text;
    p.append(spanDate, spanText);
    DOM.Main.append(p);
    p.addEventListener("click", changeBG);
    DOM.TextInput.value = ""; // on efface le contenu du textarea
};

//DOM.Btn.onclick = function(){}    Cette solution est un peu oldSchool, vaut mieux utiliser la façon suivante



DOM.Btn.addEventListener("click", addParagrap);


/* la fonction for ci-dessous sert uniquement lors 
du 1e affichage de la page tant qu'on a pas 
ajouter de nouveau paragraphe */

for (let i = 0; i < array.length; i++) {
    const P = DOM.Ps[i];
    P.addEventListener("click", changeBG);
};

/* Cette fonction permet de dire que 
dès qu'on click sur l'élément qui appel cette fonction, 
on ajoute le style voulu */

function changeBG(){
    this.style.backgroundcolor = "pink";
};