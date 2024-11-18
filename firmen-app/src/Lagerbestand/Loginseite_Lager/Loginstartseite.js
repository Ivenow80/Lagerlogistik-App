// QR-Code generieren mit Personalnummer und Passwort
document.addEventListener('DOMContentLoaded', function () {
    const personalnummer = localStorage.getItem('personalnummer');
    const password = localStorage.getItem('loginPassword');
    
    if (personalnummer && password) {
        const loginData = `Personalnummer: ${personalnummer}, Passwort: ${password}`;

        // QR-Code erstellen und in den QR-Container einfügen
        QRCode.toCanvas(document.getElementById('qr-container'), loginData, function (error) {
            if (error) {
                console.error('Fehler beim Generieren des QR-Codes:', error);
            } else {
                console.log('QR-Code erfolgreich generiert!');
            }
        });
    } else {
        console.error('Kein gespeichertes Login-Daten im localStorage gefunden.');
    }
});

// Funktion zur Handhabung des Login-Formulars
function handleLogin(event) {
    event.preventDefault();
    
    const enteredPersonalnummer = document.getElementById('personalnummer').value;
    const enteredPassword = document.getElementById('login-password').value;

    // Abrufen der gespeicherten Personalnummer und Passwort aus localStorage
    const storedPersonalnummer = localStorage.getItem('personalnummer');
    const storedPassword = localStorage.getItem('loginPassword');

    if (enteredPersonalnummer === storedPersonalnummer && enteredPassword === storedPassword) {
        alert('Login erfolgreich! Willkommen zur Sicherheitsapp.');
        window.location.href = 'Startseite.html'; // Weiterleitung zur Startseite
    } else {
        alert('Ungültige Anmeldedaten. Bitte versuchen Sie es erneut.');
    }
}
