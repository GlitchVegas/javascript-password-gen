// Assignment Code
var generateBtn = document.querySelector("#generate");

//var for lowercase
var lowercase = "abcdefghijklmnopqrstuvwxyz"
//var for UPPERCASE
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//var for Numeric
var numeric = "0123456789"
//var for Special Characters
var specialCharacters = "~`!@#$%^&*()_-+=" //only using the top row of symbols

//Click Button
function generatePassword() {
  //Prompt password Criterias
  //Prompt is Length length between 8 & 128 Characters
  var pLength = prompt(" Pick a Number 8 to 128");
  console.log(pLength);
  
  if ( 
    (pLength <= 7) ||
    (pLength >= 129) ||
    isNaN(pLength)
    ) {
      alert("Please enter an Password Length Greater then 8 and Less then 128");
      
    } else {
      //Prompt lowercase
      var cLowercase = confirm("Press OK to add Lowercase.")
      //Prompt UPPERCASE
      var cUppercase = confirm("Press OK to add Uppercase.")
      //Prompt Numeric
      var cNumeric = confirm("Press OK to add Numeric.")
      //Prompt Special Characters (!, @ ,# ,$ , ect..)
      var cSpecial = confirm("Press OK to add Special Characters.")
    }
    console.log(cLowercase, cUppercase, cNumeric, cSpecial);
    //Make Sure at least 1 is selected as yes before proceeding
    if (
      (cLowercase === false) &&
      (cUppercase === false) &&
      (cNumeric === false) &&
      (cSpecial === false)
      ) {
        alert("Please Enter at least one choice")
      }
      
      
      
      
      
      
      
      
      
      
    }
    function writePassword() { 
    // Write password to the #password input
    //Write in Generated Password into html box
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    
    passwordText.value = password;
  }
    // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//Generate Random Password Based on Answers