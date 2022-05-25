// Assignment code here
const alphabetsLower = "abcdefghijklmnopqrstuvwxyz";
const alphabetsHigher = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

let criteria = {
  length: 0,
}

let randomize = () => {
  let charSelector;
  let charRestrict = 3;
  let password = "";

  for (let i = 0; i < criteria.length; i ++) {
    //generate random number between 1 and 3 to choose between lowercase, uppercase, and special characters
    charSelector = Math.floor(Math.random() * charRestrict + 1);
    console.log(charSelector);

    if (charSelector == 1) { //append lowercase letter
      password += alphabetsLower[Math.floor(Math.random() * 25)];

    } else if (charSelector == 2) {  //append uppcase letter
      password += alphabetsHigher[Math.floor(Math.random() * 25)];
      
    } else if (charselector == 3) { //append special character
      password += specialChar[Math.floor(Math.random() * specialChar.length)];

    } else if (char) { //append numeric
      
    }


  }

  return password;
}


let generatePassword = () => {
  do {
    criteria.length = window.prompt("Enter your desired length for the password(min: 8 characters, max 128 characters):");

    if(criteria.length < 8 || criteria.length > 128) {
      alert("password length must be between 8 and 128");
    }

  } while (criteria.length < 8 && criteria.length > 128);


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
