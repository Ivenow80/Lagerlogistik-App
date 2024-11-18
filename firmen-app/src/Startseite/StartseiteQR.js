// Funktion zum Generieren eines Einmalpassworts
function generateOneTimePassword() {
    // Generiert ein zufälliges Einmalpasswort
    const otp = Math.random().toString(36).slice(-8); // Einfach generiertes Passwort
    document.getElementById('otp-display').innerText = `Ihr Einmal-Passwort: ${otp}`;
    document.getElementById('generated-password').style.display = 'block';
}

// Funktion zur Handhabung der Login-Eingabe
function handleLogin(event) {
    event.preventDefault();
    const enteredPassword = document.getElementById('otp-password').value;
    const displayedOtp = document.getElementById('otp-display').innerText.split(': ')[1];
    
    // Überprüft, ob das eingegebene Passwort dem Einmalpasswort entspricht
    if (enteredPassword === displayedOtp) {
        alert('Einmaliges Passwort korrekt. Bitte erstellen Sie ein neues Passwort.');
        document.getElementById('password-creation-form').style.display = 'block';  // Zeigt das Formular zur Passworterstellung an
    } else {
        alert('Ungültiges Passwort. Bitte versuchen Sie es erneut.'); // Gibt eine Fehlermeldung aus, wenn das Passwort falsch ist
    }
}

// Funktion zum Speichern des neuen Passworts
function saveNewPassword(event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Formulars
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const personalNumber = document.getElementById('otp-personalnummer').value;

    // Überprüft, ob die Passwörter übereinstimmen
    if (newPassword !== confirmPassword) {
        alert('Die Passwörter stimmen nicht überein. Bitte erneut eingeben.');
        return;
    }

    // Beispielhafter Speichervorgang (hier könnte eine API verwendet werden, um das Passwort zu speichern)
    console.log(`Passwort für Mitarbeiter mit Personalnummer ${personalNumber} gespeichert: ${newPassword}`);
    alert('Neues Passwort erfolgreich gespeichert!');

    // Weiterleitung zur Login-Seite
    window.location.href = 'Loginseite.html'; // Leitet nach erfolgreicher Passwortspeicherung auf die Login-Seite weiter
}

// Event-Listener für das Formular zur Passworterstellung
document.getElementById('create-password-form').addEventListener('submit', saveNewPassword);

// Event-Listener für den Login-Formular
document.getElementById('registration-form').addEventListener('submit', handleLogin);

// Event-Listener für den Button zur OTP-Generierung
document.getElementById('erstanmeldung-button').addEventListener('click', generateOneTimePassword);
