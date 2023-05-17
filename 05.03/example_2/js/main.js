/*******************************
******** LESSON_DOM_1 **********
*******************************/


//const cool5 = document.getElementById("cool-5");
//const cool5 = document.querySelector("div");
//const H1 = document.getElementsByTagName("h1"); // []

//const A = {};
//alert (cool5); // object Object

//document.title = prompt("What title do you want?");  

//const H1 = document.querySelector("h1");
//H1.className = "red";
//alert(H1.className); //
//H1.classList.add("red");
//H1.classList.remove("red");
//H1.className += " important"; // si on ne met pas l'espace avant on obtient une liste de tte les class sans espace et css ne comprendra pas de quel class il s'agit
//console.log(H1.classList);

//const Cool5 = document.querySelector("#cool-5");
//const Cool5 = document.getElementById("#cool-5");
//Cool5.style.backgroundColor = "lime";


/*******************************
******** Exercise_DOM_1 ********
*******************************/

// grab the H1 from the DOM,
// ask the user for a color,
//change the color of the H1 to the color received by the user
// all in 1 line!

//Mon code :
//document.querySelector("h1").style.color = prompt("What Color do you Want for the title?");
//code de Meir :
//document.querySelector("h1").style.color = prompt("What Color?").replaceAll(" ", "").toLowerCase();



/*******************************
******** LESSON_DOM_2 **********
*******************************/
  
/*
const H1 = document.querySelector("H1");
var text = H1.innerText.toUpperCase(); 
H1.innerText = text;
console.log(text);


const H1 = document.querySelector("H1");
var x = "<mark>Rahamim</mark> <i>GUEDJ</i>"; 
H1.innerHTML = x;
console.log(x);
*/

/* 
 - innerText prend tous le texte contenu dans la balise selectionné
dans la 1e ligne, je n'ai pas modifié le text, j'ai simplement
créer une variable dans laquelle j'attribue une "variante" du texte
ensuite je viens dire que innerText de l'élément sélectionné est égal à cette variable
 - avec innerText on prend en compte tous le texte dans l'élément sélectionné,
 donc dans le cas où dans mon h1 j'ai du texte dans une balise <i> (italique)
 je reçois tous le texte
 - avec innerHTML, je vais recevoir le contenu de l'élément h1 y compris
 la balise
- innerHTML fonctionne uniquement avec string
*/

/*******************************
******** Exercise_DOM_2 ********
*******************************/

// Create a UL inside your HTML DOM
// prompt for 3 names, each time, push them into an array
// once your array is ready, run a loop that will create an LI element
// then add the LIs to the UL

const UL = document.querySelector("ul");
const Names = [];
Names.push(prompt("Enter the first name"));
Names.push(prompt("Enter the second name"));
Names.push(prompt("Enter the third name"));
Names.push(prompt("Enter the fourth name"));
Names.push(prompt("Enter the fifth name"));
var allLIs = "";
for (let i = 0; i < Names.length; i++) {
    const Name = Names[i];
    var color = "";
    if (Name[0].toLowerCase() === "s") {
        color = "style='color:red'";
    };
    allLIs += `<li ${color}>${Name}</li>`;
};
//console.log(allLIs);
UL.innerHTML = allLIs;