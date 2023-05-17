//example 1
var people = 0;
var fName = "";
var list = "Here is your list: \n";
var f = false;
var found = false;
while (!found) {
  fName = prompt("What's your name please?").replaceAll(" ", ""); // "Yanky  "
  list += fName + ", ";
  people++;
  if (fName.toUpperCase() == "DAVID") found = true;
  if (confirm("Do you have Blue eyes?")) {
    alert("Yay!! I have someone with blue eyes! ");
    f = true;
    break;
  }
}

if (!f || found) alert("It took " + people + " people until I found my David.");

console.log(list);


//example 2
var f = false;
for (let i = 0; i < 100; i++) {
  let num = Math.floor(Math.random() * 100000); // 2545656
  if (num % 2 == 1) {
    console.log("skipped");
    continue;
  }
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  console.log(sum);
  if (sum === 26) {
    f = true;
    break;
  }
}
if (f) alert("Magic number found!");


// example 3
const Students = ["Michael", "Moshe", "Moshe", "Sara", "Eyal", "Amir", "Moshe"]; 
const Arr = []
for (let i = 0; i < Students.length; i++) { 
  const stud = Students[i]; 
  if (stud == "Moshe") { 
    Arr.push(i) 
  }
} 
console.log(Arr); // [1, 2, 6];

