// Variable pour vérifier si l'utilisateur a entré quelque chose
var hasEnteredInput = false;
var flag = "JeSuisLeFlag";

// Fonction pour vérifier si l'utilisateur a entré quelque chose
function checkInput() {
  var userInput = document.getElementById("inputCode").value;
  hasEnteredInput = userInput.trim() !== "";
}

// Fonction pour exécuter le code saisi par l'utilisateur
function executeCode() {
  if (hasEnteredInput && userInput != "alert(flag);" || userInput != "alert(flag)" {
    alert("javascript ?");
  }

  var userInput = document.getElementById("inputCode").value;
  try {
    eval(userInput); // Exécute le code JavaScript entré par l'utilisateur
  } catch (error) {
    console.error(error);
  }
}
