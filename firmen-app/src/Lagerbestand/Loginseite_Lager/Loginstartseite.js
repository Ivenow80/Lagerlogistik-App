// QR-Code generieren mit Personalnummer und Passwort
const personalnummer = localStorage.getItem("personalnummer");
const password = localStorage.getItem("loginPassword");

const loginData = `Personalnummer: ${personalnummer}, Passwort: ${password}`;

// QR-Code erstellen und in den QR-Container einfügen
QRCode.toCanvas(
  document.getElementById("qr-container"),
  loginData,
  function (error) {
    if (error) console.error(error);
    console.log("QR Code generiert!");
  }
);

// Funktion zur Handhabung des Login-Formulars
function handleLogin(event) {
  event.preventDefault();

  const enteredPersonalnummer = document.getElementById("personalnummer").value;
  const enteredPassword = document.getElementById("login-password").value;

  // Abrufen der gespeicherten Personalnummer und Passwort aus localStorage
  const storedPersonalnummer = localStorage.getItem("personalnummer");
  const storedPassword = localStorage.getItem("loginPassword");

  if (
    enteredPersonalnummer === storedPersonalnummer &&
    enteredPassword === storedPassword
  ) {
    alert("Login erfolgreich! Willkommen zur Sicherheitsapp.");
    window.location.href = "../Lagerbestand.html"; // Weiterleitung zur Startseite
  } else {
    alert("Ungültige Anmeldedaten. Bitte versuchen Sie es erneut.");
  }
}
