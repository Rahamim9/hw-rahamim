/*************************
***** Meir's Code ********
*************************/
/*
const Body = document.querySelector("body");
const Users = [];

const $Register = {
  fName: document.createElement("input"),
  lName: document.createElement("input"),
  email: document.createElement("input"),
  password: document.createElement("input"),
  btn: document.createElement("button"),
};

$Register.fName.type = "text"
$Register.lName.type = "text";
$Register.email.type = "email";
$Register.password.type = "password";

$Register.fName.placeholder = "Enter your First Name";
$Register.lName.placeholder = "Enter your Last Name";
$Register.email.placeholder = "Enter your Email";
$Register.password.placeholder = "Choose a Password";
$Register.btn.innerText = "Register";

$Register.btn.addEventListener("click", register)

function register() {

}

Body.append(
  $Register.fName,
  $Register.lName,
  $Register.email,
  $Register.password,
  $Register.btn
);

*/

/*
Autre façon de faire
*/

const Body = document.querySelector("body");
const Users = [];

const $Register = {
    inputs: [
        { 
            name: "fName", 
            type: "text", 
            placeholder: "Enter your First Name",
            required: true, 
        },
        { 
            name: "lName", 
            type: "text", 
            placeholder: "Enter your Last Name",
            required: true, 
        },
        { 
            name: "phone", 
            type: "text", 
            placeholder: "Enter your Phone Number",
            required: false, 
        },
        { 
            name: "email", 
            type: "email", 
            placeholder: "Enter your Email",
            required: true, 
        },
        { 
            name: "password", 
            type: "password", 
            placeholder: "Choose a Password",
            required: true, 
        },
    ],
    btn: document.createElement("button"),
};

$Register.inputs.forEach(createInputs);

function createInputs(x){
    x.input = document.createElement("input");
    x.input.type = x.type;
    x.input.required = x.required;
    x.inpt.placeholder = x.placeholder;
    Body.append(x.input);
};

$Register.btn.innerText = "Register";
$Register.btn.addEventListener("click", register);
function register() {
    // 1. verify uniqueness of email
    //var email = $Register.inputs[3].input.value;
    const IPS = $Register.inputs;
    var email = IPS[3].input.value;
    for (let i = 0; i < Users.length; i++) {
        const  U= Users[i];
        if(U.email === email) {
            alert("This email already exists");
            return;
        }   
    }
    // 2. create a User object
    /*
    A.1e method 

    const User = CreateUser (
        IPS[0].input.value,
        IPS[1].input.value,
        IPS[2].input.value,
        IPS[3].input.value,
        IPS[4].input.value,
    );
    */


   /*
   B.2e method
   */
    const user = new User (
        IPS[0].input.value,
        IPS[1].input.value,
        IPS[2].input.value,
        IPS[3].input.value,
        IPS[4].input.value,
    );

    // 3. enter User object to array of Users
    /*
    A.1e method 

    Users.push(User);
    */


   /*
   B.2e method
   */
    Users.push(user);
    
    // 4. clean the form
    IPS.forEach(clean);

    function clean(x) {
        x.input.value = "";
    };
};
/*
    A.1e method 

function CreateUser(_fName, _lName, _email, _password, _Phone) {
    const obj = {
        fName : _fName,
        lName : _lName,
        email : _email,
        password : _password,
        phone : _phone,
    };
    return obj;
};
*/


/*
   B.2e method

function User(_fName, _lName, _email, _password, _Phone) {
    this.fName = _fName;
    this.lName = _lName;
    this.email = _email;
    this.password = _password;
    this.phone = _phone;    
};
*/

/*
C. 3e method
*/

class User {
    constructor (_fName, _lName, _email, _password, _Phone) {
        this.fName = _fName;
        this.lName = _lName;
        this.email = _email;
        this.password = _password;
        this.phone = _phone;   
    };
};

class Input {
    constructor(_name, _type, _placeholder, _required = false) {
        this.input = document.createElement("input");
        this.input.name = _name;
        this.input.type = _type;
        this.input.placeholder = _placeholder;
        this.input.required = _required;
    };
};


Body.append($Register.btn);



