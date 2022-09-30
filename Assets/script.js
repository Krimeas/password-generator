//need to generate four arrays
//need to add numbers
//need to add special characters
//need to add capital letters
//need to add lowercase letters (maybe combine with caps)

//Need to call on four arrays at random for each character in the 8-128 password
//need prompts for person to type length they want.
//need prompts for exclusions (numbers, lowercase, etc.)
//must select/type at least one type (make it so nomatter what upper or lower they type in prompt it comes out correct.)
//prompts start when button pushed.
//password written to page when complete.



// Assignment Code
let generateBtn = document.querySelector("#generate");

// The list of possible 'characters' for the password as well as the possible length.  

// character arrays pulling ASCII due to issues wiht string variables being 'encrypted' in the generator.  
//Special Characters
let characters = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,];
// Numeric - 0,1,2,3,4,5,6,7,8,9
let numeric = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57,];

//Letters A-Z, and a-z.
let caseUp = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,];
let caseLo = [91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122,];

// This foxes weird errors, by why?  ASCII encription?  
// const UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
// const LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
// const NUMBER_CODES = arrayFromLowToHigh(48, 57);
// const SYMBOL_CODES = arrayFromLowToHigh(33, 47)
//   .concat(arrayFromLowToHigh(58, 64))
//   .concat(arrayFromLowToHigh(91, 96))
//   .concat(arrayFromLowToHigh(123, 126));
// function arrayFromLowToHigh(low, high) {
//   const array = [];
//   for (let i = low; i <= high; i++) {
//     array.push(i);
//   }
//   return array;
// }


// 
// let charLength = [...Array(128).keys()]

function generatePassword () {

// Prompts user interaction and choices. characterlength gives alert is incorrect entry is made. 
  let numericTF = confirm("Would you like numbers to appear in your password?");
  let charactersTF = confirm("Would you like special characters to appear in your password?");
  let caseLoTF = confirm("Would you like lowercase letters to appear in your password?");
  let caseUpTF = confirm("Would you like uppercase letters to appear in your password?");

  let characterLength = prompt("How many characters between 8 and 128 would you like?");
    if (characterLength<8 || characterLength>128) {
    alert("That is an invalid number.  Please enter a number between 8 and 128.");
    }
    
  let PWFinal = [];

//if Statement cycle for choosing which booleans to include

//Same errors as below... must be variable issues.  
  if (charactersTF) 
  PWFinal = PWFinal.concat(characters)
  if (numericTF) 
  PWFinal = PWFinal.concat(numeric)
  if (caseUpTF) 
  PWFinal = PWFinal.concat(caseUp)
  if (caseLoTF) 
  PWFinal = PWFinal.concat(caseLo)

  //Could not get away from errors on listed if's - changed strategy to above; maybe the character arrays?
  // if (numericTF, charactersTF, caseLoTF, caseUpTF) {
  //   PWFinal = PWFinal.concat(caseLo, caseUp, characters, numeric);
  //     //TTTT - Works
  // }
  // if (numericTF && !charactersTF && caseLoTF && caseUpTF){
  //   PWFinal = PWFinal.concat(numeric, caseLo, caseUp);
  //     //TFTT - Errors
  // }
  // if (numericTF && charactersTF && !caseLoTF && caseUpTF){
  //   PWFinal = PWFinal.concat(numeric, characters, caseUp);
  //     //TTFT - Errors
  // }
  // if (numericTF && !charactersTF && !caseLoTF && caseUpTF){
  //   PWFinal = PWFinal.concat(numeric,caseUp);
  //     //TFFT - Errors
  // }
  // if (numericTF && charactersTF && caseLoTF && !caseUpTF){
  //   PWFinal = PWFinal.concat(numeric,characters,caseLo);
  //     //TTTF - Works
  // }
  // if (numericTF && !charactersTF && caseLoTF && !caseUpTF){
  //   PWFinal = PWFinal.concat(numeric,caseLo);
  //     //TFTF - Half Works - Characters still but no Uppercase.
  // }
  // if (numericTF && charactersTF && !caseLoTF && !caseUpTF){
  //   PWFinal = PWFinal.concat(numeric,characters);
  //     //TTFF - Works
  // }
  // if (numericTF && !charactersTF && !caseLoTF && !caseUpTF){
  //   PWFinal = PWFinal.concat(numeric);
  //     //TFFF - Works
  // }
  // if (!numericTF && charactersTF && caseLoTF && caseUpTF){
  //   PWFinal = PWFinal.concat(characters,caseLo,caseUp);
  //     //FTTT - Errors
  // }
  // if (!numericTF && !charactersTF && caseLoTF && caseUpTF){
  //   PWFinal = PWFinal.concat(caseLo,caseUp);
  //     //FFTT - Errors
  // }
  // if (!numericTF && charactersTF && !caseLoTF && caseUpTF){
  //   PWFinal = PWFinal.concat(characters,caseUp);
  //     //FTFT - Errors
  // }
  // if (!numericTF && !charactersTF && !caseLoTF && caseUpTF){
  //   PWFinal = PWFinal.concat(caseUp);
  //     //FFFT - Errors
  // }
  // if (!numericTF && charactersTF && caseLoTF && !caseUpTF){
  //   PWFinal = PWFinal.concat(characters,caseLo);
  //     //FTTF - Works
  // }
  // if (!numericTF && !charactersTF && caseLoTF && !caseUpTF){
  //   PWFinal = PWFinal.concat(caseLo);
  //     //FFTF - Half works (adds in characters for some reason?)
  // }
  // if (!numericTF && charactersTF && !caseLoTF && !caseUpTF){
  //   PWFinal = PWFinal.concat(characters);
  //     //FTFF - Works
  // }

//warning about no character types selected
  if (!numericTF && !charactersTF && !caseLoTF && !caseUpTF){
    alert("You did not ask for any character types.");
      //FFFF - Works
  }

// warning about no numbers
  if (PWFinal.length === 0){
  alert("We cannot generate a password without any values.");
  }

//No Idea how this works, sadly. Looks like function buried inside of it, becasue of return.  it is doing the math to make sure the statement puts out the correct qty of characters.
  let passwordCharacters = Array.from({length: characterLength}, () => {
    let characterCode = PWFinal[Math.floor(Math.random() * PWFinal.length)];
    return String.fromCharCode(characterCode);
      })
  return passwordCharacters.join('');
}






// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

