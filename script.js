// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//characters available for users to choose from

// I did put these variables inside the writePassword function, I doubted its accessibility to the generetePassword function????????????????????

var numberChar = "0123456789";
var lowerCaseChar= "abcdefghijklmnopqrstuvwxyz";
var upperCaseChar= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbolChar= "/:;<=>?@[\]^_`{|}~";


// Write password to the #password input
function writePassword() {
  lengthOfPassword = prompt("Write the preferred length of your password.\nIt should be at least 8 and atmost 128 characters.");

  //check wether the user input is valid 
if(lengthOfPassword >=8 && lengthOfPassword <= 128){

  var iLikeNumber = confirm('would you like to include number?');
  var ILikeLowerCase = confirm('would you like to include lowercase?');
  var iLikeUpperCase = confirm('would you like to include uppercase?');
  var iLikeSymbolChar = confirm('would you like to include symbol?');

var password = generatePassword(lengthOfPassword, iLikeNumber, ILikeLowerCase, iLikeUpperCase, iLikeSymbolChar);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
} else{
   lengthOfPassword = prompt("please try again, min 8 char");
   writePassword();
}
}

function generatePassword(length, iLikeNumber, ILikeLowerCase, iLikeUpperCase, iLikeSymbolChar){

  var chosenChars = numberChar + lowerCaseChar + upperCaseChar + symbolChar; //disregard the user's preference. what type of condition should i use?
  var password = "";
  for (var i = 0; i< length; i++){
    charIndex = Math.floor(Math.random()* chosenChars.length);
    password += chosenChars.charAt(charIndex);
  }
return password;
}










 
