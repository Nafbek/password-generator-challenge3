// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  lengthOfPass = prompt("enter the length of your passw");
  var number = 0123456789;
  var lowerCase= "abcdefghijklmnopqrstuvwxyz";
  var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var symbol= "/:;<=>?@[\]^_`{|}~";

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}






