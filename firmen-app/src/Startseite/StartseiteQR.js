// QR_Anmeldung.js

// Funktion zum Generieren eines Einmalpassworts
function generateOneTimePassword() {
    const otp = Math.random().toString(36).slice(-8); // Einfach generiertes Passwort
    document.getElementById('otp-display').innerText = `Ihr Einmal-Passwort: ${otp}`;
    document.getElementById('generated-password').style.display = 'block';
}

// Funktion zur Handhabung der Login-Eingabe
function handleLogin(event) {
    event.preventDefault();
    const enteredPassword = document.getElementById('otp-password').value;
    const displayedOtp = document.getElementById('otp-display').innerText.split(': ')[1];

    if (enteredPassword === displayedOtp) {
        alert('Einmaliges Passwort korrekt. Bitte erstellen Sie ein neues Passwort.');
        document.getElementById('password-creation-form').style.display = 'block';
    } else {
        alert('Ungültiges Passwort. Bitte versuchen Sie es erneut.');
    }
}

// Funktion zum Speichern des neuen Passworts und Weiterleitung zur Login-Seite
function saveNewPassword(event) {
    event.preventDefault();
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const personalNumber = document.getElementById('otp-personalnummer').value;

    if (newPassword !== confirmPassword) {
        alert('Die Passwörter stimmen nicht überein. Bitte erneut eingeben.');
        return;
    }

    // Speichern der Personalnummer und des neuen Passworts im localStorage
    localStorage.setItem('personalnummer', personalNumber);
    localStorage.setItem('loginPassword', newPassword);

    console.log(`Passwort für Mitarbeiter mit Personalnummer ${personalNumber} gespeichert: ${newPassword}`);
    alert('Neues Passwort erfolgreich gespeichert!');

    // Weiterleitung zur Login-Seite
    window.location.href = '../Lagerbestand/Loginseite_Lager/Loginseite_Lager.html'; // Weiterleitung zur Lagerseite
}

// Funktion für "Passwort vergessen"
function forgotPassword() {
    alert("Bitte wenden Sie sich an den Support oder folgen Sie dem Link zur Passwort-Wiederherstellung.");
    // Optionale Weiterleitung zu einer Passwort-Wiederherstellungsseite:
    // window.location.href = "passwort-wiederherstellung.html";
}
