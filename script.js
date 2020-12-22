var generateBtn = document.querySelector("#generate");

// static variables
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharcters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharacters = "0123456789";
var specialCharacters = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";


  function passLength() {
    pwLength = "";  
    var pwLength = prompt("How many characters would you like your password to be? (Must be between 8-128)");

      if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
          alert("Please enter a number between 8 and 128.");
          passLength()
      }
      
      return pwLength
  }   

  function askLowerCase() {
    var confirmLowercase = confirm("Do you want to include lowercase letters in your password?");
    return confirmLowercase
  }

  function askUpperCase() {
    var confirmUpperCase = confirm("Do you want to include uppercase letters in your password?");
    return confirmUpperCase
  }

  function askNumbers () {
    var confirmNumeric = confirm("Do you want to include numbers in your password?");
    return confirmNumeric
  }

  function askSpecialChar () {
    var confirmSpecial= confirm("Do you want to include special characters in your password?");
    return confirmSpecial
  }

  function clear() {
    document.querySelector("#password").value = '';
  }

function generatePassword () {
    var randomPassword = "";
    var pwLengthEntry = passLength();
    var userOption1 = askLowerCase();
    var userOption2 = askUpperCase();
    var userOption3 = askNumbers();
    var userOption4 = askSpecialChar();


    var lastUserInput = "";

    if (userOption1) {
      lastUserInput = lastUserInput.concat(lowercaseCharacters);
    }

    if (userOption2) {
      lastUserInput = lastUserInput.concat(uppercaseCharcters);
    }

    if (userOption3) {
      lastUserInput = lastUserInput.concat(numberCharacters);
    }

    if (userOption4) {
      lastUserInput = lastUserInput.concat(specialCharacters);
    }

    for (var i = 0; i < pwLengthEntry; i++) {
      randomPassword += lastUserInput.charAt(Math.floor(Math.random() * lastUserInput.length));
    }
    return randomPassword;

}


 function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

