document.addEventListener('DOMContentLoaded', () => {
    const buttons = {
        erstanmeldung: document.getElementById('erstanmeldung-button'),
        newPassword: document.getElementById('create-new-password-btn'),
        customPassword: document.getElementById('custom-password-btn')
    };


    buttons.erstanmeldung?.addEventListener('click', generateAndShowPassword);
    buttons.newPassword?.addEventListener('click', createNewPassword);
    buttons.customPassword?.addEventListener('click', createCustomPassword);
});


// Funktion zur Generierung eines Passworts
function generatePassword(length = 12) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=';
    let result = '';


    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }
    return result;
}


// Funktion zur Anzeige eines generierten Passworts
function generateAndShowPassword() {
    const password = generatePassword();
    displayPassword('otp-display', password, 'generated-password');
}


// Login-Handling (Beispiel)
function handleLogin(event) {
    event.preventDefault();


    const username = document.getElementById('otp-username').value;
    const personalnummer = document.getElementById('otp-personalnummer').value;
    const password = document.getElementById('otp-password').value;


    console.log("Login Info:", username, personalnummer, password);
    // Hier können Sie die Login-Logik hinzufügen (z. B. mit einer API)
    alert("Login erfolgreich!");
}


// Funktion zur Erstellung eines neuen Passworts
function createNewPassword() {
    const password = generatePassword();
    displayPassword('new-password-display', `Neues Passwort: ${password}`, 'new-password-container');
}


// Funktion zur Anzeige eines benutzerdefinierten Passworts
function createCustomPassword() {
    const customPassword = document.getElementById('custom-password-input').value.trim();


    if (customPassword.length >= 8) { // Mindestlänge von 8 Zeichen zur Sicherheit
        displayPassword('custom-password-display', `Ihr eingegebenes Passwort: ${customPassword}`, 'custom-password-container');
    } else {
        alert('Bitte geben Sie ein Passwort mit mindestens 8 Zeichen ein!');
    }
}


// Hilfsfunktion zur Anzeige des Passworts
function displayPassword(displayElementId, passwordText, containerElementId) {
    document.getElementById(displayElementId).textContent = passwordText;
    document.getElementById(containerElementId).style.display = 'block';
}


