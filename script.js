// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//var for lowercase
var lowercase = "abcdefghijklmnopqrstuvwxyz"
//var for UPPERCASE
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//var for Numeric
var numeric = "0123456789"
//var for Special Characters
var specialCharacters = "~`!@#$%^&*()_-+=" //only using the top row of symbols



//Click Button
//Prompt password Criterias
  //Prompt is Length length between 8 & 128 Characters
    //Prompt lowercase
      //Prompt UPPERCASE
        //Prompt Numeric
          //Prompt Special Characters (!, @ ,# ,$ , ect..)
            //Make Sure at least 1 is selected as yes before proceeding
//Generate Random Password Based on Answers
//Write in Generated Password into html box