/*************************************
************* 1e example *************
*************************************/

/* INSTRUCTION :
Après avoir demandé à l'utilisateur quel jour nous sommes,
nous souhaitons faire apparaitre un message personnalisé
en fonction de chaque jour.
nous allons en 1e lieu forcer la valeur du jour entrée en miniscule,
puis nous allons devoir prévoir les différentes possibilités de message,
sans oublier un message par défaut dans le cas où la valeur entrée
ne correspond à aucun jour prévu dans notre scénario :
*/

var today = prompt("what day is it").toLowerCase();
var message = "";

if (today === "sunday") {
  message = "Happy sunday to you!";
} else if (today === "monday") {
  message = " Good Luck this week";
} else if (today === "tuesday") {
  message = "Two for tuesday.";
} else {
  message = "Tha is not really a day";
}

switch (today) {
  case "sunday":
    message = "Happy sunday to you.";
    break;
  case "monday":
    message = "Good Luck this week";
    break;
  case "tuesday":
    message = "Two for tuesday";
    break;
  case "Wednesday":
    message = "Humpday sucks for all";
    break;
  case "thusday":
    message = "Having some chulnt tonignt!!!";
    break;
  default:
}

alert(message);


/*************************************
************* 2e example *************
*************************************/

/* INSTRUCTION :
Nous voulons dans cette exemple attribuer une valeur
à la variable 'bracket' en fonction de l'age que rentrera l'utilisateur
la valeur attribuée ce fera selon les données suivantes : 
0   < age < 18   bracket = 0
18  < age < 25   bracket = 0.1
26  < age < 40   bracket = 0.2
41  < age < 60   bracket = 0.3
61  < age < 100  bracket = 0.4
101 < age < 120  bracket = 1
*/

var age = +prompt("Enter your age");
var bracket = 0;


switch (age) {
  case age <= 18:
    bracket = 0;
    break;
  case age <= 25:
    bracket = 0.1;
    break;
  case age <= 40:
    bracket = 0.2;
    break;
  default:
    bracket = 1;
}
alert(bracket);

/* Ce code ne fonctionnera pas, 
la valeur de 'bracket' sera '1' dans tous les cas
la structure de la clause switch ne permet pas d'utiliser des comparaisons 
de conditions telles que age <= 18 dans les étiquettes case.

Pour corriger le code en utilisant une clause switch, 
il faut utiliser une expression à évaluer pour chaque étiquette de cas (case label). 
C'est à dire qu'il faut définir une valeur pour chaque tranche d'âge et l'utiliser comme étiquette de cas.
Pour cela il faut corriger le code en attribuant à la clause switch l'expression true pour 
évaluer chaque étiquette de cas en tant que condition. 
Les valeurs pour chaque tranche d'âge seront utilisées comme étiquettes de cas,
et la valeur correspondante sera alors assignée à la variable bracket. 
L'instruction break sera utilisée pour sortir de la clause switch après chaque étiquette de cas.

le bon code sera donc : */

switch (true) {
  case age <= 18:
    bracket = 0;
    break;
  case age <= 25:
    bracket = 0.1;
    break;
  case age <= 40:
    bracket = 0.2;
    break;
  default:
    bracket = 1;
}
alert(bracket);               