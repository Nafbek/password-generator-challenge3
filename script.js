// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  lengthOfPassword = prompt("Write the preferred length of your password.\n It should be at least 8 and atmost 128 characters.");

  //check wether the user input is valid 
if(lengthOfPassword >=8 && lengthOfPassword <= 128){
  var numberChar = confirm('would you like to include lowercase?');
  var upperCaseChar = confirm('would you like to include uppercase?');
  var lowerCaseChar = confirm('would you like to include number?');
  var symbolChar = confirm('would you like to include symbol?');
} else{
   lengthOfPassword = prompt("please try again, min 8 char");
   writePassword();
}
//characters available for users to choose from
 numberChar = "0123456789";
lowerCaseChar= "abcdefghijklmnopqrstuvwxyz";
 upperCaseChar= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   symbolChar= "/:;<=>?@[\]^_`{|}~";


  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(numberChar, lowerCaseChar,  upperCaseChar, upperCaseChar,.........){
  //should it take the lengthOFPassword as an argument or not?as it generates the password based on the length of password chosen by user?
}










 
