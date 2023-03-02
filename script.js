var passwordLength = 8;
var charArray= [];

var numberList = ["0","1","2","3","4","5","6","7","8","9"]
var symbolList = ["?", "!", "@", "#", "$", "%", "&", "*"]
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
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
    var randomIndex = Math.floor(math.random() * charArray.length);
    password = password + charArray[randomIndex];
  }
  return password;
  }
 

function getPrompts(){
  charArray = [];

  passwordLength = parseInt(prompt(How many characters would you like your password to have? Choose a number between '8' and '128'));
   
    if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
      alert("Character length must be between 8 and 128. Please try again.");;
    }
    return false;

    if (confrim("Include lowercase letters?")){
      charArr = charArr.concat(lowercaseList)
    }
    if (confrim("Include uppercase letters?")){
      charArr = charArr.concat(uppercaseList)
    }
    if (confrim("Include symbols?")){
      charArr = charArr.concat(symbolList)
    }
    if (confrim("Include numbers?")){
      charArr = charArr.concat(numberList)
    }
    return true;
  
}


// Add event listener to generate button

