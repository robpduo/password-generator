// Assignment code here
const alphabetsLower = "abcdefghijklmnopqrstuvwxyz";
const alphabetsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
const numeric = "0123456789";


let criteria = {
  length: 0,
  isNumeric: false,
  isLower: false,
  isSpecial: false,
  isUpper: false,
  promptResp: "" //response from the prompt
}

let randomize = () => {
  let charSelector;
  let charRestrict = 4;
  let password = "";
  let complete = 0;

  for (let i = 0; i < criteria.length; i++) {
    //generate random number between 1 and 3 to choose between lowercase, uppercase, and special characters
    do {
      charSelector = Math.floor(Math.random() * charRestrict + 1);

      if (charSelector == 1 && criteria.isLower == true) { //append lowercase letter
        password += alphabetsLower[Math.floor(Math.random() * (alphabetsLower.length -1) )];
        complete = 1;

      } else if (charSelector == 2 && criteria.isUpper == true) {  //append uppcase letter
        password += alphabetsUpper[Math.floor(Math.random() * (alphabetsUpper.length -1))];
        complete = 1;

      } else if (charSelector == 3 && criteria.isSpecial == true) { //append special character
        password += specialChar[Math.floor(Math.random() * (specialChar.length - 1) )];
        complete = 1;

      } else if (charSelector == 4 && criteria.isNumeric == true) { //append numeric
        password += numeric[Math.floor(Math.random() * (numeric.length - 1))];
        complete = 1;
      }

    } while (complete == 0);

    complete = 0;
  }

  return password;
}


let generatePassword = () => {
  //prompt for pasword length
  do {
    criteria.length = window.prompt("Enter your desired length for the password(min: 8 characters, max 128 characters):");

    if (criteria.length < 8 || criteria.length > 128) {
      alert("password length must be between 8 and 128");
    }

  } while (criteria.length < 8 && criteria.length > 128);

  //prompt for lowercase
  do {
    criteria.promptResp = window.prompt("Would you like to include Lowercase characters(y/n)?");

    if (criteria.promptResp != 'y' && criteria.promptResp != 'n') {
      alert("Please Enter 'y' for yes or 'n' (no)");
    }

    if (criteria.promptResp == 'y') {
      criteria.isLower = true;
    } else if (criteria.promptResp == 'n') {
      criteria.isLower = false;
    }

  } while (criteria.promptResp != "y" && criteria.promptResp != "n");

  //prompt for uppercase
  do {
    criteria.promptResp = "";
    criteria.promptResp = window.prompt("Would you like to include Uppercase characters(y/n)?");

    if (criteria.promptResp != 'y' && criteria.promptResp != 'n') {
      alert("Please Enter 'y' for (yes) or 'n' for (no)");
    }

    if (criteria.promptResp == 'y') {
      criteria.isUpper = true;
    } else if (criteria.promptResp == 'n') {
      criteria.isUpper = false;
    }

  } while (criteria.promptResp != "y" && criteria.promptResp != "n");


  //prompt for special
  do {
    criteria.promptResp = "";
    criteria.promptResp = window.prompt("Would you like to include Special characters(y/n)?");

    if (criteria.promptResp != 'y' && criteria.promptResp != 'n') {
      alert("Please Enter 'y' for (yes) or 'n' for (no)");
    }

    if (criteria.promptResp == 'y') {
      criteria.isSpecial = true;
    } else if (criteria.promptResp == 'n') {
      criteria.isSpecial = false;
    }

  } while (criteria.promptResp != "y" && criteria.promptResp != "n");

    //prompt for numeric
    do {
      criteria.promptResp = "";
      criteria.promptResp = window.prompt("Would you like to include Numeric characters(y/n)?");
  
      if (criteria.promptResp != 'y' && criteria.promptResp != 'n') {
        alert("Please Enter 'y' for (yes) or 'n' for (no)");
      }
  
      if (criteria.promptResp == 'y') {
        criteria.isNumeric= true;
      } else if (criteria.promptResp == 'n') {
        criteria.isNumeric = false;
      }
  
    } while (criteria.promptResp != "y" && criteria.promptResp != "n");

  return randomize();

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
