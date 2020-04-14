//Created functions that create random values
function getRandomLower() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function getRandomUpper() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function getRandomNumber() {
  var numbers =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomSymbol() {
  var symbols =
    "!@#$%^&*(){}[]=<>/0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

document.querySelector("#generate").addEventListener("click", selectPass);

function createPassword(passwordLength, myFunction) {
  //Creo una variable para almacenar el resultado final de esta funci�n
  //(En javascript no hace falta declarar las variables pero es lo m�s aconsejable)
  var pass = "";

  //Evaluamos la longitud de la cadena passwordLength
  if (passwordLength < 8 || passwordLength > 128) {
    //Si no est� entre 8 y 128 caracteres (inclusivos ambos) se notifica
    //al usuario y se detiene la funci�n (con la sentencia return)

    alert("Password lenght must be min 8 characters and max 128 characters.");
    return;
  } else {
    //Si la cadena cumple con la longitud entonces ejecutamos la funci�n
    //correspondiente. myFunction se espera como par�metro
    for (var i = 0; i < passwordLength; i++) {
      //myFunction entra sin par�ntesis  a createPassword, y aqu� le
      //agregamos los par�ntesis, he aqu� el secreto para que se ejecute correctamente

      pass += myFunction(); //esta puede ser getRandomLower, getRandomNumber, getRandomUpper o getRandomSymbol
    }
  }
  //pass guarda la cadena generada en el for. La l�nea pass += myFunction(); se interpreta como:
  //a la variable pass(que al principio est� vac�a) concatena (+) y asignale (=) el resultado de
  //la ejecuci�n de myFunction
  return pass;
}

//Created an array to store password criteria
var passwordCrit = ["numerical", "alphanumerical", "with symbols"];
//creamos una variable para guardar el resultado de la creaci�n del password
var password = "";

//Created a prompt to ask the user to select password criteria
var selectPass = prompt(
  "Select password criteria 'numerical', 'alphanumerical', 'with symbols'"
);
selectPass = selectPass.toLocaleLowerCase();

//Created If/else statement to determine which criteria has been selected by the user
if (selectPass === passwordCrit[0]) {
  passwordLength = prompt(
    "Now select password lenght min 8 charac. Max 128 charac."
  );

  //Invocamos createPassword con los par�metros (longitud de la cadena, funci�n a ejecutar)
  //El resultado lo guardamos en la variable password
  password = createPassword(passwordLength, getRandomNumber);
} else if (selectPass === passwordCrit[1]) {
  passwordLength = prompt(
    "Now select password lenght min 8 charac. Max 128 charac."
  );

  //Invocamos createPassword con los par�metros (longitud de la cadena, funci�n a ejecutar)
  //El resultado lo guardamos en la variable password
  password = createPassword(passwordLength, getRandomUpper);
} else if (selectPass === passwordCrit[2]) {
  passwordLength = prompt(
    "Now select password lenght min 8 charac. Max 128 charac."
  );

  //Invocamos createPassword con los par�metros (longitud de la cadena, funci�n a ejecutar)
  //El resultado lo guardamos en la variable password
  password = createPassword(passwordLength, getRandomSymbol);
} else {
  alert("Please select a valid input");
}

//Mostramos los resultados por consola.
//Puedes borrar todos los comentarios en espa�ol o sustituir los necesarios con los tuyos
console.log(selectPass);
console.log(passwordLength);
console.log(password);

// Password element is displayed into generate a password text-box
var passwordText = document.getElementById("password");
passwordText.textContent = password;

var generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", createPassword);
