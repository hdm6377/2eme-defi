// Variable pour vérifier si l'utilisateur a entré quelque chose
var flag = "JeSuisLeFlag";

// Fonction pour exécuter le code saisi par l'utilisateur
function executeCode() {
  var userInput = document.getElementById("inputCode").value;
  
  // Vérifie si l'utilisateur a entré quelque chose
  if (userInput.trim() !== "" && userInput !== "alert(flag)") {
    alert("javascript ?");
  }
  
  try {
    eval(userInput); // Exécute le code JavaScript entré par l'utilisateur
  } catch (error) {
    console.error(error);
  }
}