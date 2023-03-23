// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input 
function writePassword() {
  lengthOfPassword = prompt("Write the preferred length of your password.\nIt should be at least 8 and atmost 128 characters.");

  //Check whether the user input is valid and prompt user to choose their prefered character type
  if(lengthOfPassword >=8 && lengthOfPassword <= 128){
    var iLikeNumber = confirm('would you like to include number?');
    var iLikeLowerCase = confirm('would you like to include lowercase?');
    var iLikeUpperCase = confirm('would you like to include uppercase?');
    var iLikeSymbolChar = confirm('would you like to include symbol?');

    var password = generatePassword(lengthOfPassword, iLikeNumber, iLikeLowerCase, iLikeUpperCase, iLikeSymbolChar);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

  } else{
   alert("please try again, enter at least 8 characters");
 }
}
//Process the generation of password under certain conditions
function generatePassword(length, iLikeNumber, iLikeLowerCase, iLikeUpperCase, iLikeSymbolChar){
  //Type of characters used to generate password
  var numberChar = "0123456789";
  var lowerCaseChar= "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChar= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var symbolChar= "/:;<=>?@[\]^_`{|}~";
  
                  //Declare variables to store the chosen character types and the inclusion of at least one character type
                  // var userPreference ="";           ////////////////i do not see its significance once i defined an array instead
                  // var charInclusion = false;

                  // //Check user's preference of character type and 
                  // if (iLikeNumber){
                  //   chosenChars +=numberChar;
                  //   charInclusion = true;
                  // }
                  // if (iLikeLowerCase){
                  //   chosenChars +=lowerCaseChar;
                  //   charInclusion = true;
                  // }
                  // if (iLikeUpperCase){
                  //   chosenChars +=upperCaseChar;
                  //   charInclusion = true;
                  // }
                  // if (iLikeSymbolChar){
                  //   chosenChars +=symbolChar;
                  //   charInclusion = true;
                  // }
                  
                  // // Check if at least one character type from user's prefernce is included in the password
                  // if ((!iLikeNumber && !iLikeLowerCase && !iLikeUpperCase && !iLikeSymbolChar) && (!charInclusion)){
                  //   alert("Please choose at least one character type");
                  //   writePassword();  //why no effect?
                  // }else{
                  // //Generate a random password
                  // var Password = "";
                  // for (var i = 0; i<length; i++){
                  //   var charIndex = Math.floor(Math.random()* chosenChars.length);
                  //   Password += chosenChars.charAt(charIndex);
                  // }
                  //  return Password;
                  // }

//Store character types chosen by the user
  var charInclusion = [];

  //Check user's preference of character type and add it into an array
  if (iLikeNumber){
    // userPreference +=numberChar; ////i do not see its significance once i defined an array instead
    charInclusion.push(numberChar);
    
  }
  if (iLikeLowerCase){
    // userPreference +=lowerCaseChar; ////i do not see its significance once i defined an array instead
    charInclusion.push(lowerCaseChar);
  }
  if (iLikeUpperCase){
    // userPreference +=upperCaseChar;
    charInclusion.push(upperCaseChar); ////i do not see its significance once i defined an array instead
  }
  if (iLikeSymbolChar){
    // userPreference +=symbolChar;
    charInclusion.push(symbolChar); ////i do not see its significance once i defined an array instead
    
  }
  
  

  // Check if at least one character type is chosen by user
  if (charInclusion.length === 0){
    alert("Please choose at least one character type");
    return "";  
  }else{
    //Store the generated password
    var Password = "";

    //Generate a random password with the inclusion of the character types chosen by user         
                                            //acceptance criteria/readme file= ... password is generated that "matches the #selected# criteria" (i do not think it's to mean 'at least one')
    for(var i =0; i<length; i++){
      var charIndexAll =Math.floor(Math.random() * charInclusion.length);
      var charIndex = Math.floor(Math.random() * charInclusion[charIndexAll].length)
      Password += charInclusion[charIndexAll].charAt(charIndex);
    }
    return Password;
  }

}










 
