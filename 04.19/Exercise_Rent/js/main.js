var rent = +prompt("Please enter your rent.");
var salary = +prompt("Please enter your salary");
var month = 1;
var mysteryAmount = 0;
var isGift = false;
var rentDue = 0;
var balance = salary * 2;

if (balance >= rent) {
    balance -= rent;
} else {
    rentDue = rent;
}

month++;
balance += salary / 2;

if (balance >= rentDue) { //January ...in case i didn't
    balance -= rentDue;
    rentDue = 0;
}

rent += 200;
if (balance >= rent) {
    balance -= rent;
} else {
    rentDue += rent;
}

month++;
balance -= 500;

mysteryAmount = balance;
balance = 0;
if (mysteryAmount < 0) {
    isGift = true;
    mysteryAmount = -mysteryAmount;
}

//alert(month + "\n" + mysteryAmount + "\n" + isGift + "\n" + rentDue);

var message = "";
message = "the current month is : " + month + ".\n";
if (rentDue > 0) {
    message += "I owe " + rentDue + " shekels to my landlord.\n";
}

if (isGift) {
    message += "I got a gift of " + mysteryAmount + " shekels.";
} else {
    message += "I was robbed in the amount " + mysteryAmount + " shekels.\n";
}

alert(message);