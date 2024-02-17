function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Vérifiez les identifiants
  if (username === "admin" && password === "admin") {
    // Redirigez l'utilisateur vers la page du défi CTF
    window.location.href = "CTF.html";
    return false; // Empêche le formulaire de se soumettre normalement
  } else {
    alert("Identifiants incorrects");
    return false;
  }
}