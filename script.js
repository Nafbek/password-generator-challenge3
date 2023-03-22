// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Type of characters used to generate password
var numberChar = "0123456789";
var lowerCaseChar= "abcdefghijklmnopqrstuvwxyz";
var upperCaseChar= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbolChar= "/:;<=>?@[\]^_`{|}~";

// Write password to the #password input
function writePassword() {
  lengthOfPassword = prompt("Write the preferred length of your password.\nIt should be at least 8 and atmost 128 characters.");

  //Check whether the user input is valid 
if(lengthOfPassword >=8 && lengthOfPassword <= 128){
  var iLikeNumber = confirm('would you like to include number?');
  var ILikeLowerCase = confirm('would you like to include lowercase?');
  var iLikeUpperCase = confirm('would you like to include uppercase?');
  var iLikeSymbolChar = confirm('would you like to include symbol?');

var password = generatePassword(lengthOfPassword, iLikeNumber, ILikeLowerCase, iLikeUpperCase, iLikeSymbolChar);
var passwordText = document.querySelector("#password");
passwordText.value = password;

} else{
   alert("please try again, at least 8 characters");
 }
}
//why the parameters appear as their values not read????
function generatePassword(length, iLikeNumber, ILikeLowerCase, iLikeUpperCase, iLikeSymbolChar){
  var chosenChars ="";
  if (iLikeNumber){
    chosenChars +=numberChar;
    //what if i 
  }
  if (ILikeLowerCase){
    chosenChars +=lowerCaseChar;
  }
  if (iLikeUpperCase){
    chosenChars +=upperCaseChar;
  }
  if (iLikeSymbolChar){
    chosenChars +=symbolChar;
  }
  // Check if at least one  is included??// but no effect, i think?
  if(!iLikeNumber && !ILikeLowerCase && !iLikeUpperCase && !iLikeSymbolChar){
    alert("Please chose at least one character type");
    writePassword();
  }
// a code to ensure that a computer included at least one user's character type preference 

  //Generate a random password
  var Password = "";
  for (var i = 0; i<length; i++){
    var charIndex = Math.floor(Math.random()* chosenChars.length);
    Password += chosenChars.charAt(charIndex);
  }
return Password;
}










 
