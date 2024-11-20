// URL zur Lagerbestandsseite
const lagerBestandsURL = "https://example.com/lagerbestand";

// QR-Code Generierung und Zeitmanagement
const generateQRCode = () => {
  const qrCodeContainer = document.getElementById("qrcode");

  // Entferne alten QR-Code
  qrCodeContainer.innerHTML = "";

  // Generiere neuen QR-Code
  new QRCode(qrCodeContainer, {
    text: lagerBestandsURL,
    width: 200,
    height: 200,
  });

  // Aktualisiere Zeitstempel
  const timestamp = new Date();
  updateTimestamp(timestamp);
};

// Aktualisiere die Anzeige der Zeit
const updateTimestamp = (timestamp) => {
  const formattedTime = timestamp.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  document.getElementById("timestamp").textContent = `Letzte Generierung: ${formattedTime}`;
};

// Timer, um alle 2 Stunden den QR-Code neu zu generieren
const startQRCodeTimer = () => {
  generateQRCode(); // Initialer QR-Code
  setInterval(generateQRCode, 2 * 60 * 60 * 1000); // Alle 2 Stunden
};

// Manuelles Neu-Generieren durch Button
document.getElementById("regenButton").addEventListener("click", () => {
  generateQRCode();
});

// Login-Handling
function handleLogin(event) {
  event.preventDefault();

  // Abrufen von Eingaben
  const enteredPersonalnummer = document.getElementById("personalnummer").value;
  const enteredPassword = document.getElementById("login-password").value;

  // Abrufen von gespeicherten Daten (Simulation)
  const storedPersonalnummer = localStorage.getItem("personalnummer");
  const storedPassword = localStorage.getItem("loginPassword");

  // Überprüfung der Daten
  if (
    enteredPersonalnummer === storedPersonalnummer &&
    enteredPassword === storedPassword
  ) {
    alert("Login erfolgreich! Willkommen zur Sicherheitsapp.");
    window.location.href = "../Lagerbestand.html"; // Weiterleitung zur Lagerbestandsseite
  } else {
    alert("Ungültige Anmeldedaten. Bitte versuchen Sie es erneut.");
  }
}

// Initialisierung beim Laden der Seite
window.onload = () => {
  startQRCodeTimer();
};
