// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions()
{
  // Variable to store length of password from user input
  var length = parseInt(prompt('Enter the length of your password (minimum 8, maximum 128):'));

  // Check whether length is a number and within the specified range
  if (isNaN(length) || length < 8 || length > 128)
  {
    alert('Password length must be a number between 8 and 128 characters.');
    return;
  }

  // Boolean value for including special characters
  var includeSpecialCharacters = confirm('Include special characters?');

  // Boolean value for including numeric characters
  var includeNumericCharacters = confirm('Include numeric characters?');

  // Boolean value for including lowercase characters
  var includeLowerCasedCharacters = confirm('Include lowercase characters?');

  // Boolean value for including uppercase characters
  var includeUpperCasedCharacters = confirm('Include uppercase characters?');

  // Any one character type is should be selected
  if (!includeSpecialCharacters && !includeNumericCharacters && !includeLowerCasedCharacters && !includeUpperCasedCharacters)
  {
    alert('At least one character type should be selected.');
    return;
  }

  // Object to store user input
  var passwordOptions = {
    length: length,
    includeSpecialCharacters: includeSpecialCharacters,
    includeNumericCharacters: includeNumericCharacters,
    includeLowerCasedCharacters: includeLowerCasedCharacters,
    includeUpperCasedCharacters: includeUpperCasedCharacters
  };

  return passwordOptions;

}

// Function for getting a random element from an array
function getRandom(arr)
{
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

// Function to generate password with user input
function generatePassword()
{
  var options = getPasswordOptions();

  // Variable for password 
  var resultant_password = '';

  // Types of characters that can be included in password stored in this array
  var optionalCharacters = [];

  // Types of characters that must be included in password stored in this array
  var requiredCharacters = [];


  // Add characters to arrays based on user input
  if (options.includeSpecialCharacters) {
    optionalCharacters = optionalCharacters.concat(specialCharacters);
    requiredCharacters.push(getRandom(specialCharacters));
  }
  if (options.includeNumericCharacters) {
    optionalCharacters = optionalCharacters.concat(numericCharacters);
    requiredCharacters.push(getRandom(numericCharacters));
  }
  if (options.includeLowerCasedCharacters) {
    optionalCharacters = optionalCharacters.concat(lowerCasedCharacters);
    requiredCharacters.push(getRandom(lowerCasedCharacters));
  }
  if (options.includeUpperCasedCharacters) {
    optionalCharacters = optionalCharacters.concat(upperCasedCharacters);
    requiredCharacters.push(getRandom(upperCasedCharacters));
  }


  // Form password from user input
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(optionalCharacters);
    resultant_password += possibleCharacter;
  }



  return resultant_password
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);