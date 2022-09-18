// Assignment Code

//var for lowercase
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
console.log(lowercase)
//var for UPPERCASE
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
console.log(uppercase)
//var for Numeric
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
console.log(numeric)
//var for Special Characters
var specialCharacters = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "="] //only using the top row of symbols
console.log(specialCharacters)

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
      
      //var for the string of the combined random characters
      var combined = "";
      
      //for loop will end once length is reached
      for (var i = 1; i <= pLength; i++) {
        if 
        (cLowercase === true && 
          cUppercase === true && 
          cNumeric === true && 
          cSpecial === true) {
            //combines the arrays that were chosen
            var all = lowercase.concat(uppercase, numeric, specialCharacters);
            console.log(all);
            //randomly chooses characters in the array
            var randomAll = all[Math.floor(Math.random() * all.length)];
            console.log(randomAll);
            //combines all characters together
            combined += randomAll;
            console.log(combined);
            
          } else if 
          (cLowercase === true && 
            cUppercase === true && 
            cNumeric === true && 
            cSpecial === false) {
              var lowerUpperNum = lowercase.concat(uppercase, numeric);
              console.log(lowerUpperNum);
              var randomLowerUpperNum = lowerUpperNum[Math.floor(Math.random() * lowerUpperNum.length)];
              console.log(randomLowerUpperNum);
              combined += randomLowerUpperNum;
              console.log(combined);

            } else if 
            (cLowercase === true && 
              cUppercase === true && 
              cNumeric === false && 
              cSpecial === true) {
                var lowerUpperSpecial = lowercase.concat(uppercase, specialCharacters);
                console.log(lowerUpperSpecial);
                var randomLowerUpperSpecial = lowerUpperSpecial[Math.floor(Math.random() * lowerUpperSpecial.length)];
                console.log(randomLowerUpperSpecial);
                combined += randomLowerUpperSpecial;
                console.log(combined);
                
              } else if 
              (cLowercase === true && 
                cUppercase === false && 
                cNumeric === true && 
                cSpecial === true) {
                  var lowerNumSpecial = lowercase.concat(numeric, specialCharacters);
                  console.log(lowerNumSpecial);
                  var randomLowerNumSpecial = lowerNumSpecial[Math.floor(Math.random() * lowerNumSpecial.length)];
                  console.log(randomLowerNumSpecial);
                  combined += randomLowerNumSpecial;
                  console.log(combined);
                  
                } else if 
                (cLowercase === false && 
                  cUppercase === true && 
                  cNumeric === true && 
                  cSpecial === true) {
                    var upperNumSpecial = uppercase.concat(numeric, specialCharacters);
                    console.log(upperNumSpecial);
                    var randomUpperNumSpecial = upperNumSpecial[Math.floor(Math.random() * upperNumSpecial.length)];
                    console.log(randomUpperNumSpecial);
                    combined += randomUpperNumSpecial;
                    console.log(combined);
                    
                  } else if 
                  (cLowercase === false && 
                    cUppercase === false && 
                    cNumeric === true && 
                    cSpecial === true) {
                      var numSpecial = numeric.concat(specialCharacters);
                      console.log(numSpecial);
                      var randomNumSpecial = numSpecial[Math.floor(Math.random() * numSpecial.length)];
                      console.log(randomNumSpecial);
                      combined += randomNumSpecial;
                      console.log(combined);
                      
                    } else if 
                    (cLowercase === false && 
                      cUppercase === true && 
                      cNumeric === false && 
                      cSpecial === true) {
                        var upperSpecial = uppercase.concat(specialCharacters);
                        console.log(upperSpecial);
                        var randomUpperSpecial = upperSpecial[Math.floor(Math.random() * upperSpecial.length)];
                        console.log(randomUpperSpecial);
                        combined += randomUpperSpecial;
                        console.log(combined);
                        
                      } else if 
                      (cLowercase === false && 
                        cUppercase === true && 
                        cNumeric === true && 
                        cSpecial === false) {
                          var upperNum = uppercase.concat(numeric);
                          console.log(upperNum);
                          var randomUpperNum = upperNum[Math.floor(Math.random() * upperNum.length)];
                          console.log(randomUpperNum);
                          combined += randomUpperNum;
                          console.log(combined);
                          
                        } else if 
                        (cLowercase === true && 
                          cUppercase === false && 
                          cNumeric === false && 
                          cSpecial === true) {
                            var lowerSpecial = lowercase.concat(specialCharacters);
                            console.log(lowerSpecial);
                            var randomLowerSpecial = lowerSpecial[Math.floor(Math.random() * lowerSpecial.length)];
                            console.log(randomLowerSpecial);
                            combined += randomLowerSpecial;
                            console.log(combined);
                            
                          } else if 
                          (cLowercase === true && 
                            cUppercase === false && 
                            cNumeric === true && 
                            cSpecial === false) {
                              var lowerNum = lowercase.concat(numeric);
                              console.log(lowerNum);
                              var randomLowerNum = lowerNum[Math.floor(Math.random() * lowerNum.length)];
                              console.log(randomLowerNum);
                              combined += randomLowerNum;
                              console.log(combined);
                              
                            } else if 
                            (cLowercase === true && 
                              cUppercase === true && 
                              cNumeric === false && 
                              cSpecial === false) {
                                var lowerUpper = lowercase.concat(uppercase);
                                console.log(lowerUpper);
                                var randomLowerUpper = lowerUpper[Math.floor(Math.random() * lowerUpper.length)];
                                console.log(randomLowerUpper);
                                combined += randomLowerUpper;
                                console.log(combined);
                                
                              } else if 
                              (cLowercase === true && 
                                cUppercase === false && 
                                cNumeric === false && 
                                cSpecial === false) {
                                  lowercase;
                                  console.log(lowercase);
                                  var randomLower = lowercase[Math.floor(Math.random() * lowercase.length)];
                                  console.log(randomLower);
                                  combined += randomLower;
                                  console.log(combined);
                                  
                                } else if 
                                (cLowercase === false && 
                                  cUppercase === true && 
                                  cNumeric === false && 
                                  cSpecial === false) {
                                    uppercase;
                                    console.log(uppercase);
                                    var randomUpper = uppercase[Math.floor(Math.random() * uppercase.length)];
                                    console.log(randomUpper);
                                    combined += randomUpper;
                                    console.log(combined);
                                    
                                  } else if 
                                  (cLowercase === false && 
                                    cUppercase === false && 
                                    cNumeric === true && 
                                    cSpecial === false) {
                                      numeric;
                                      console.log(numeric);
                                      var randomNum = numeric[Math.floor(Math.random() * numeric.length)];
                                      console.log(randomNum);
                                      combined += randomNum;
                                      console.log(combined);
      
                                    } else if 
                                    (cLowercase === false && 
                                      cUppercase === false && 
                                      cNumeric === false && 
                                      cSpecial === true) {
                                        specialCharacters;
                                        console.log(specialCharacters);
                                        var randomSpecial = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
                                        console.log(randomSpecial);
                                        combined += randomSpecial;
                                        console.log(combined);
                                      }
    }
    return combined // stops the function and returns the value of combined
  }
  
  
  
  
  
  
  var generateBtn = document.querySelector("#generate");
  
  
  
  
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