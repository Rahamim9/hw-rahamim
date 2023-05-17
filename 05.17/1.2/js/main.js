/*
My code
*/
const body = document.querySelector("body");
var btn = document.createElement("button");
body.append(btn);
btn.className = "btn_ray";
btn.addEventListener("click", alert("hello, world Ray"));


/*
Meir's Code
*/
var btn2 = document.createElement("button");
document.querySelector("body").append(btn2);
btn2.addEventListener("click", function() {alert("hello, world Meir")});