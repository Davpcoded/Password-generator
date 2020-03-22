//Created functions that create random values 
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() *26) +97);
  }
  
function getRandomUpper() { 
    return String.fromCharCode(Math.floor(Math.random() *26) +65);
  }
  
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() *10) +48);
  }
  
function getRandomSymbol() {
    var symbols = "!@#$%^&*(){}[]=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
  }



//Created an array to store password criteria
var passwordCrit = ["numerical", "alphanumerical", "with symbols"];

//Created a prompt to ask the user to select password criteria
var selectPass = prompt("Select password criteria 'numerical', 'alphanumerical', 'with symbols'");
    selectPass = selectPass.toLocaleLowerCase();

    //Created If/else statement to determine which criteria has been selected by the user
if (selectPass === passwordCrit[0]) {
    var passwordLength = prompt("Now select password lenght min 8 charac. Max 128 charac.");
        
}
else if (selectPass === passwordCrit[1]) {
    prompt("Now select password lenght min 8 charac. Max 128 charac.");
}
else if (selectPass === passwordCrit[2]) {
    prompt("Now select password lenght min 8 charac. Max 128 charac.");
}
else  {
    alert("Please select a valid input");
}

console.log(passwordCrit[1]);

