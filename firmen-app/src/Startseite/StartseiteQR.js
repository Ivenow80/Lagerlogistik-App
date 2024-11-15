// Event-Listener für die Erstanmeldung (Passwort erstellen)
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('erstanmeldung-button').addEventListener('click', generateAndShowPassword);
});

// Funktion zum Generieren eines einmaligen Passworts
function generateOneTimePassword() {
    const username = document.getElementById('otp-username').value;
    const personalnummer = document.getElementById('otp-personalnummer').value;

    if (username && personalnummer) {
        const otp = generatePassword(); // Generiert das einmalige Passwort
        document.getElementById('otp-display').textContent = otp;
        document.getElementById('generated-password').style.display = 'block';
    } else {
        alert('Bitte Personalnummer und Name eingeben!');
    }
}

// Funktion zur Passwortgenerierung (12 Zeichen lang, alphanumerisch mit Sonderzeichen)
function generatePassword() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=';
    let result = '';
    const passwordLength = 12; // Länge des Passworts

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }
    return result;
}

// Funktion zum Umschalten der Passwortsichtbarkeit
function togglePasswordVisibility() {
    const passwordField = document.getElementById('otp-display');
    const passwordButton = document.getElementById('show-password-btn');
    
    if (passwordField.style.display === 'none') {
        // Passwort anzeigen
        passwordField.style.display = 'block';
        passwordButton.textContent = 'Passwort ausblenden';
    } else {
        // Passwort ausblenden
        passwordField.style.display = 'none';
        passwordButton.textContent = 'Passwort anzeigen';
    }
}

// QR-Code Erzeugung
function generateQRCode() {
    const qrCodeContainer = document.getElementById('qr-code');
    qrCodeContainer.innerHTML = ''; // QR-Code-Container leeren

    const personalnummer = document.getElementById('personalnummer').value;
    if (personalnummer) {
        const qrCode = new QRCode(qrCodeContainer, {
            text: personalnummer,
            width: 128,
            height: 128
        });
    } else {
        alert("Bitte Personalnummer eingeben, um einen QR-Code zu generieren.");
    }
}

// Login-Handling (Beispiel)
function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const personalnummer = document.getElementById('personalnummer').value;
    const password = document.getElementById('password').value;

    console.log("Login Info:", username, personalnummer, password);
    // Hier können Sie die Login-Logik hinzufügen (z. B. mit einer API)
    alert("Login erfolgreich!");
}

// Funktion zur Passwortanzeige und Erstellen
function generateAndShowPassword() {
    const generatedPassword = generatePassword();
    // Passwort im HTML anzeigen
    document.getElementById('display-password').textContent = generatedPassword;
    // Zeige das Passwort an
    document.getElementById('passwort-display').style.display = 'block';
}

// Funktion zum Generieren eines Login-Codes
function generateLoginCode() {
    const loginCode = generatePassword(); // Verwende die gleiche Passwortgenerierungsfunktion für den Login-Code
    document.getElementById('generated-login-code').textContent = loginCode;
}
