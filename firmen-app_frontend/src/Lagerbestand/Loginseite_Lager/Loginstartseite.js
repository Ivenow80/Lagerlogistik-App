// Event-Listener für den Haupt-Zurück-Button
document.getElementById("backButtonMain").addEventListener("click", () => {
  const userConfirmed = confirm("Sie gehen jetzt zurück zur Neuanmeldeseite. Möchten Sie fortfahren?");
  if (userConfirmed) {
    window.location.href = "../../Startseite/Startseite.html"; // Hier den tatsächlichen Pfad zur Neuanmeldeseite angeben
  }
});

// Event-Listener für den Zurück-Button im Passwort-Reset-Formular
document.getElementById("backButton").addEventListener("click", () => {
  const userConfirmed = confirm("Sie gehen jetzt zurück zur Neuanmeldeseite. Möchten Sie fortfahren?");
  if (userConfirmed) {
    window.location.href = "../../Startseite/Startseite.html"; // Hier den tatsächlichen Pfad zur Neuanmeldeseite angeben
  }
});

// QR-Code für Lagerbestandsseite generieren
const generateQRCode = () => {
  const qrCodeContainer = document.getElementById("qrcode");
  const lagerBestandsURL = "https://example.com/lagerbestand"; // URL zur Lagerbestandsseite

  qrCodeContainer.innerHTML = ""; // Entferne alten QR-Code
  new QRCode(qrCodeContainer, {
    text: lagerBestandsURL,
    width: 200,
    height: 200,
  });

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
  generateQRCode();
  setInterval(generateQRCode, 2 * 60 * 60 * 1000); // Alle 2 Stunden
};

// Manuelles Neu-Generieren durch Button
document.getElementById("regenButton").addEventListener("click", () => {
  generateQRCode();
});

// Initialisieren der QR-Code-Funktionalität
window.onload = startQRCodeTimer;

// Funktion zur Handhabung des Login-Formulars
function handleLogin(event) {
  event.preventDefault();

  const enteredPersonalnummer = document.getElementById("personalnummer").value;
  const enteredPassword = document.getElementById("login-password").value;

  const storedPersonalnummer = localStorage.getItem("personalnummer");
  const storedPassword = localStorage.getItem("loginPassword");

  if (enteredPersonalnummer === storedPersonalnummer && enteredPassword === storedPassword) {
    alert("Login erfolgreich! Willkommen zur Sicherheitsapp.");
    window.location.href = "../Lagerbestand.html"; // Weiterleitung zur Startseite
  } else {
    alert("Ungültige Anmeldedaten. Bitte versuchen Sie es erneut.");
  }
}

// Funktion zum Handhaben von "Passwort vergessen"
function handleForgotPassword() {
  alert("Bitte generieren Sie ein neues Passwort und erstellen Sie ein neues.");
  
  document.getElementById("password-reset-form").style.display = "block";

  const newGeneratedPassword = Math.random().toString(36).slice(-8);
  document.getElementById("generated-password").value = newGeneratedPassword;
}

// Funktion zum Zurücksetzen des Passworts
function resetPassword(event) {
  event.preventDefault();

  const newPassword = document.getElementById("new-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (newPassword !== confirmPassword) {
    alert("Die Passwörter stimmen nicht überein. Bitte erneut eingeben.");
    return;
  }

  const personalnummer = document.getElementById("personalnummer").value;
  localStorage.setItem("personalnummer", personalnummer);
  localStorage.setItem("loginPassword", newPassword);

  alert("Ihr neues Passwort wurde erfolgreich erstellt!");
  window.location.href = "../Lagerbestand.html"; // Weiterleitung nach erfolgreichem Reset
}
