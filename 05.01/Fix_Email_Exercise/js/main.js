/* 
FIX EMAIL Exercise
1. Remove all spaces from prompted email
2. convert entire email address to lower case
3. If it is a GMAIL address, remove all periods from address


var email = prompt("Please enter your email.").replaceAll(" ","").toLowerCase();
// email = meir.sabbah@gmail.com

var arr = email.split("@"); // ["meir.sabbah", "gmail.com"]
if(arr[1] === "gmail.com") {
    email = arr[0].replaceAll(".", "") + "@gmail.com";
}

console.log(email);
//alert(email);
*/

/***********************************************************
**************** INTEGRER DANS UNE FONCTION ****************
***********************************************************/


//var emailAddress = fixEmail(prompt("Please enter your email."));
var emailAddress = prompt("Please enter yout email");
emailAddress = fixEmail(emailAddress);

function fixEmail(x) {
    var email = x.replaceAll(" ","").toLowerCase();
    // email = meir.sabbah@gmail.com

    var arr = email.split("@"); // ["meir.sabbah", "gmail.com"]
    if(arr[1] === "gmail.com") {
    email = arr[0].replaceAll(".", "") + "@gmail.com";
    }
    return email;
}


/*

**************************************************************
*********************     Meir's code    *********************
**************************************************************

function fixEmail(y) {
  var email = y.replaceAll(" ", "").toLowerCase();
  // meir.sabbah@gmail.com
  var arr = email.split("@"); // ["meir.sabbah", "gmail.com"]
  if (arr[1] === "gmail.com") {
    email = arr[0].replaceAll(".", "") + "@gmail.com";
  }
  return email;
}
*/
