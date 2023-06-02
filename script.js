// Assignment code here
var number = "1 2 3 4 5 6 7 8 9 0"
var specialLetters = " $ #  %  @  *  &";
var upperCase = " A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"
var lowerCase = " a b c d e f g h i j k l m n o p q r s t u v w x y z"

var superString = ""
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword (){

  console.log("the button was clicked");
var passwordLength= 0

do {
   passwordLength = prompt("How many letters will the password have?");
  console.log ("password length,", passwordLength);
}
while (passwordLength< 8 || passwordLength > 128);



//while (passwordLength< 8 || passwordLength > 128);
//if (passwordLength<128 || passwordLength > 8 )
//alert("Your password can only be 8-128 long")


var confrimNumber = confirm ("do you want any numbers?")
console.log("true", confrimNumber)
if (confrimNumber===true){
  superString += number
  console.log (superString)
}

var confirmSpeacial = confirm ("Do you want any specail letters?");
console.log ("confrim speacial letters",confirmSpeacial)
if (confirmSpeacial===true) {
console.log ("its true")
superString += specialLetters
console.log (superString)
}

var confrimUppercase = confirm ("do you want any upper case letters?")
console.log("confrim Upper case letters",confrimUppercase)
if(confrimUppercase===true){
console.log("it worked")
superString += upperCase
console.log (superString)
}


var confrimLowercase = confirm ("do you want any lower case letters")
console.log ("confrim lowercase letters",confrimLowercase)
if (confrimLowercase===true){
  console.log("yay it worked")
  superString += lowerCase
  console.log(superString)
}

//4loop consal log password length 
var generatedPassword = ""
for (var i = 0, len = passwordLength, text = ""; i < len; i++) {
  var random = Math.floor(Math.random()* superString.length);  //get random number that is less that the super string 

  generatedPassword += superString[random] 
  console.log("the number the user put")

 
}

console.log (generatedPassword)

return (generatedPassword);
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword(superString);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
