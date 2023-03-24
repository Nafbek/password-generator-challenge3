// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input 
function writePassword() {
  lengthOfPassword = prompt("Write the preferred length of your password.\nIt should be at least 8 and atmost 128 characters.");

  //Check whether the user input is valid, and prompt user to choose their prefered character type
  if(lengthOfPassword >=8 && lengthOfPassword <= 128){
    var iLikeNumber = confirm('would you like to include number?');
    var iLikeLowerCase = confirm('would you like to include lowercase?');
    var iLikeUpperCase = confirm('would you like to include uppercase?');
    var iLikeSymbolChar = confirm('would you like to include symbol?');

    var password = generatePassword(lengthOfPassword, iLikeNumber, iLikeLowerCase, iLikeUpperCase, iLikeSymbolChar);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

  } else{
   alert("Please try again! Enter minimum 8 and maximum 128 characters");
 }
}
//Process the generation of password under certain conditions
function generatePassword(length, iLikeNumber, iLikeLowerCase, iLikeUpperCase, iLikeSymbolChar){
  //Declare variables-types of characters used to generate a password
  var numberChar = "0123456789";
  var lowerCaseChar= "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChar= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var symbolChar= "/:;<=>?@[\]^_`{|}~";
  
  //Declare an array to store character types chosen by the user
  var charInclusion = [];

  //Check user's preference of character type and add it into an array
  if (iLikeNumber){
    charInclusion.push(numberChar);
  }
  if (iLikeLowerCase){
    charInclusion.push(lowerCaseChar);
  }
  if (iLikeUpperCase){
    
    charInclusion.push(upperCaseChar); 
  }
  if (iLikeSymbolChar){
    charInclusion.push(symbolChar); 
  }

  // Check if at least one character type is chosen by user
  if (charInclusion.length === 0){
    alert("Please choose at least one character type");
    return "";  
  }else{
    //Store the generated password
    var password = "";
  
    //Generate a random password with the inclusion of at least one character from all the chosen character types 
    var charIndexAll;                              
    for(var i =0; i<charInclusion.length; i++){
      charIndexAll =i;
      charIndexAll =Math.floor(Math.random() * charInclusion[i].length);
      password += charInclusion[i].charAt(charIndex);
    }
    //Generate a password randomly until it meets the required length of character from the chosen character types
    for (var i = charInclusion.length; i< length; i++){
      charIndexAll =Math.floor(Math.random() * charInclusion.length);
      var charIndex = Math.floor(Math.random() * charInclusion[charIndexAll].length);
      password += charInclusion[charIndexAll].charAt(charIndex);
    }
      return password;
  }
    
}


