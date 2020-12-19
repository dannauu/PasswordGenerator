// Assignment Code
var generateBtn = document.querySelector("#generate");
// Constant variables

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbol = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";

// main code

window.onload = alert("Please click generate password to begin.");

function generate(){
var allChar = [];
var result = "";

// dynamic variables
var passlength = prompt("How many characters would you like your password to be?");

if(passlength < 8 || passlength > 128) {
  alert("Your password must be at least 8 characters and no more than 128");
}

}

else {
  if(confirm("Would you like your password to contain uppercase letters?"))
}

if(confirm("Would you like your password to contain lower case letters?")){
  Array.prototype.push.apply(allChars, abcLowerArr);
}

if(confirm("Would you like your password to contain numbers?")){
  Array.prototype.push.apply(allChars, numArr);
}

if(confirm("Would you like your password to contain symbols?")){
  Array.prototype.push.apply(allChars, symArr);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
