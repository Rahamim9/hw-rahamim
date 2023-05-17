const objX ={
    fName : "Meir",
    lName: "Sabbah",
    age : 89,
};

const objY ={
    fName : "Meir",
    lName: "Sabbah",
    age : 89,
};

const objZ ={
    fName : "Meir",
    lName: "Sabbah",
    age : 89,
};

//au lieu de créer chaque object à la main, on utilise une class

class Person {
    constructor(_fName ="", _lName="", _age=0) {
        this.fName = _fName;
        this.lName = _lName;
        this.age = _age;
    }            
};

const People = [
    new Person("Meir","Sabbah", 89),
    new Person("Nissan","Shuv", 82),
    new Person("Eyal","Reitzer", 84),
];

function getNewPerson() {
    
    var fName = prompt("Enter first name");
    var lName = prompt("Enter last name");
    var age = parseInt(prompt("enter age"));

    const P = new Person;(fName, lName, age);

    People.push(P);
};
