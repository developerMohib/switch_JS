
let alphabet = prompt("Enter Your letter : " );
let letter = alphabet.toLowerCase();

switch(letter){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        document.write( letter + " is a vowel.");
        break; 

    default:
        document.write( letter + " isnot a vowel.");
}