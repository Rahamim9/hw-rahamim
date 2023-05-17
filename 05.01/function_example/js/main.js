
console.log("Start the program");
/*
 on doit appeler la fonction pour qu'il se passe quelque chose,
 sinon la fonction ne se lance pas, 
 on peut appeler la fonction soit au début du code, 
 soit à la fin, ça ne change rien
*/

startProgram();

function startProgram() {
    var fName = step1();
    if (fName) { // si on rentre le prénom David, rien ne se passera car la réponse à step1 sera 'false'
        var greeting = step2(fName);
        step3(greeting);
    }

    function step1() {
        var name = prompt("What's your name?").toUpperCase();
        // différente possibilité d'écriture :
        /*  1e façon :
        if (name === "DAVID") {
            return false;
        }
        return name;
        */
        /* 2e façon :
        return name === "DAVID" ? false : name;
        */
        // 3e façon :
        var result = name === "DAVID" ? false : name;
        return result;
    }

    function step2(x) {
        var conf = confirm("Is it daylight outside?");
        if (conf) {
            return "Have a great day, " + x;
        }
        return "Have a wonderful evening, "; + x;
    }

    function step3(z) {
        alert(z);
    }
}