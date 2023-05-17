/***********************************************************************
************************* CREATION D'UN OBJECT *************************
***********************************************************************/

/* Lorsqu'on crée un OBJECT, la convention veut qu'on le nomme en lettre MAJUSCULE
dès lors qu'on crée unevariable "var = " ou une constante "const = " et que l'on commence par "{}"
nous indiquons à JS que nous crééons un OBJECT
un OBJECT se constitue de plusieurs PROPERTIES séparé par ","
nous pouvons soit attribué une valeur string/num/Bolean à notre PROPERTIES, soit un Array, 
il est d'ailleurs préférable d'attribuer un array dans le cas où 
il peut y avoir plusieurs valeur pour un même PROPERTIES,
nous pouvons également attribuer une METHOD à notre PROPERTIES
Une METHOD est une function qui fonctionne uniquement à l'intérieur d'un OBJECT
*/

const ME = {
    fName: "Rahamim",
    lName: "GUEDJ",
    age: 41,
    address: [
        { street: "Hagay Hanavi", num: "4/2", city: "Bet Shemesh", zip: 9914016, country: "Israel" },
    ],
    children: [
        { fname: "Shirel", lName: "GUEDJ", age: 17 },
        { fname: "Isaac", lName: "GUEDJ", age: 14 },
        { fname: "Lea-Simha", lName: "GUEDJ", age: 12 },
        { fname: "Refael", lName: "GUEDJ", age: 10 },
        { fname: "Gabriel-Hay", lName: "GUEDJ", age: 4 },
        { fname: "Noa-Braha", lName: "GUEDJ", age: 2 },
    ],
    /*
    Voici comment créer une METHOD qui calculerait l'année de naissance en fonction de l'age :
    (il faudra par la suite appeler cette METHOD, cette "appel" se fait en dehors de l'OBJECT voir plus bas)
    */
    // METHOD_1 
    yearIWasBorn: function() {
        return 2023 - ME.age;
    },
    /*
    Voici comment créer une METHOD qui permettrait d'afficher directement l'adresse :
    (il faudra par la suite appeler cette METHOD, cette "appel" se fait en dehors de l'OBJECT voir plus bas)
    */
    // METHOD_2
    printFullAdress: function() {
        const A = ME.address;
        //return "I live at " + A.street + " " + A.num + ", " + A.city + ", " + A.zip;
        return `I live at ${A.street} ${funny(A.num)}, ${A.city}, ${A.zip}`;
    },
    /*
    Voici comment créer une METHOD qui va rajouter un enfant supplémentaire et qui affichera un message
    (il faudra par la suite appeler cette METHOD, cette "appel" se fait en dehors de l'OBJECT voir plus bas)
    */
    // METHOD_3
    addChild: function(_fName, _lName, _age = 0) {
        const Kid = {}/*{
            fName: _fName,
            lName: _lName,
            age: _age
        }*/
        Kid.fName= _fName;
        Kid.lName= _lName || "Guedj";
        Kid.age = _age;
        ME.children.push(Kid);
        return "Mazel Tov!!";
    }
};


//affichage de du nom du 2e enfant et de mon age : alert(ME.children[1].age);

//affichage de la METHOD_1 : alert(ME.yearIWasBorn());

//affichage de la METHOD_2 : alert(ME.printFullAdress());

//affichage de la METHOD_3 :
/*
alert(ME.addChild(prompt("Enter his first name"), prompt("Enter his last name"), null));
ce n'est pas bon comme ça pour que ça marche, il faut faire comme ça :
*/
var message = ME.addChild(prompt("Enter his first name :"), prompt("Enter his last name :"));
alert(message);

/*
function externe qui sera appelé dans une METHOD qui modifie l'affichage de la PROPERTIES (voir plus haut)
*/
function funny(x){
    return x + x + 50;
};

/* 

*******************************************************************
***** RAPPEL RAPPEL RAPPEL RAPPEL RAPPEL RAPPEL RAPPEL RAPPEL *****
*******************************************************************

si on commence par 'function() {....};' c'est une Function
ex : function sayHello ()
si on est à l'intérieur d'un objet c'est une Method et non une Function
ex : yearIWasBorn: function() {....};

*/

/* comment modifier une PROPERTIES d'un OBJECT */

var a = { age: 50}; // on crée ici un object
var b = a; // ici on ne créée pas un nouveau object, on crée une nouvelle variable qui fait référence au même object créée au dessus
b.age =60; // ici on met donc à jour le seul et unique object que nous avons créer, écrire b.age = 60; équivaut à écrire a.age = 60;
console.log(a.age); //le résultat obtenu ici sera donc 60


/* différente façon d'intégrer du texte dans un string */

var str1 = "Hello, world!";
var str2 = 'Hello, world!';
var str3 = `Hello, world!`;
var str4 = ` \"Hello, world! I\'m saying : \"Hello!!!\" `;