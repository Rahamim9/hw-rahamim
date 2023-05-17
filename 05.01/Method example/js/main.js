const Students = ["Eyal", "Sarah", "aron", "Michael", "Moshe", "Amir"];
console.log(Students[0]); // "Eyal"

Students.sort();// ["Amir","Eyal","Michael","Moshe", "Sarah", "aron"]
// on trie les arguments dans l'ordre, attention : il prend en plus grand les lettres majuscules, les miniscules viendront toujours après les majuscules : de A à Z puis de a à z

Students.reverse();
// on inverse le contenu du tableau 

Students.includes("Amir");
console.log(Students); //  true
//include retourne true or false pour dire si oui ou non cette argument est présent dans le tableau

Students.indexOf("Amir"); 
console.log(Students); // 0
//indexOf retourne la place de l'argument qu'on lui demande de chercher, si l'argument n'est pas dans le tableau, il donne -1

Students.slice(2,3); // "aron"
// on choisis des arguments, le 1e chiffre correspond au début de la selection et le 2e chiffres correspond au nombre d'arguments que l'on veut choisir


Students.splice(2,1); //["Eyal", "Sarah", "aron", "Moshe", "Amir"] 
//on lui demande de supprimer des éléments, le 1e chiffre correspond à la place à partir de laquelle on coupe et le 2e chiffre correspond au nombre d'occurence qu'on supprime

Students.splice(2,0, "Lea", "Shneor");
// on lui demande de rajouter des éléments car on lui met en 2e chiffre "0" et ensuite on lui donne les arguments à ajouter, si on ne met pas le "0" il va supprimer les éléments

Students.push("Eyal2"); //["Eyal", "Sarah", "aron", "Amir", "Eyal2"]                           
// on rajoute un élément à la fin du tableau

var last = Students.pop(); 
// pop prend le dernier arguments et le met de coté
console.log(Students); // ["Eyal", "Sarah", "aron", "Moshe", "Amir"]
//pop à été exécuté donc le contenu du tableau à été changé

var first = Students.shift(); 
// shift prend le premier arguments et le met de coté
console.log(Students); //["Sarah", "aron", "Amir"]
console.log(last); // "Eyal2"
console.log(first); // "Eyal"

Students.unshift(last); //unshift rajoute dans le tableau, comme push, mais au début du tableau
console.log(Students); //["Eyal2", Sarah", "aron", "Amir"]

console.log(Students.join("")); // "Eyal2SaraharonAmir"
console.log(Students.join(" * ")); // "Eyal2 * Sarah * aron * Amir"
//join réunis tous les arguments du tableau, mais ne fonctionne pas avec un string

var str = "Meir Sabbah";
console.log(str.slice(3,6)); // r S
//slice va tronquer tous les caractères d'un string selon les arguments qu'on lui demande, le 1e chiffres est la position du caractère à partir duquelle on commence (tous ce qui est avant est effacé), et le 2e chiffre correspond au nombre de caractère qu'on va garder


var newArr = str.split(" "); //  ["Meir", "Sabbah"] 
var newArr = str.split("e"); //  ["M", "ir Sabbah"]
// split va séparer toutes les données d'un string dès qu'il rencontre le caractère qu'on lui donne et il efface ce caractère

var strb = "Sarah";
var str2 = strb.replaceAll("a","i") // Sirih
var str3 = strb.replace("a","i") // Sirah

