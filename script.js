//between 8 and 128 characters
//lowercase, uppercase, symbols, numbers
//write password to the #password input
//add event listener to generate button

var passwordLength = 8;
var charArray = [];
var numberList = ["0","1","2","3","4","5","6","7","8","9"];
var symbolList = ["?", "!", "@", "#", "$", "%", "&", "*"];
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var correctPrompts = prompts();
  var passwordText = document.querySelector("#password");

  if(correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  var password = "";
  for(var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charArray.length);
    password = password + charArray[randomIndex];
  }
  return password;
}

function prompts(){
  charArray = [];

  passwordLength = parseInt(prompt("How many characters would you like your password to have? Choose a number between 8 and 128"));
   
  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
      alert("Character length must be between 8 and 128. Please try again.");
      return false;
    }
  if (confirm("Include lowercase letters?")){
      charArray = charArray.concat(lowercaseList)
    }
  if (confirm("Include uppercase letters?")){
      charArray = charArray.concat(uppercaseList)
    }
  if (confirm("Include symbols?")){
      charArray = charArray.concat(symbolList)
    }
 if (confirm("Include numbers?")){
      charArray = charArray.concat(numberList)
    }
  return true;
}
