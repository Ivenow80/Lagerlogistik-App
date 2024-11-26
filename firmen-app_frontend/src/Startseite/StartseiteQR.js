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
        
        // Zeigt das Formular zum Erstellen eines neuen Passworts
        document.getElementById('password-creation-form').style.display = 'block';

        // Benutzerinformationen (Array) wird angezeigt
        const userInfo = {
            username: document.getElementById('otp-username').value,
            personalnummer: document.getElementById('otp-personalnummer').value,
            message: 'Bitte erstellen Sie ein neues Passwort!'
        };

        // Speichern von Benutzername und Personalnummer im localStorage
        localStorage.setItem('userInfo', JSON.stringify(userInfo));

        // Zeigt die Benutzerinformationen und die Nachricht an
        document.getElementById('user-info-message').innerText = 
            `Benutzername: ${userInfo.username}\nPersonalnummer: ${userInfo.personalnummer}\nNachricht: ${userInfo.message}`;
        
        document.getElementById('user-info').style.display = 'block';
    } else {
        alert('Ungültiges Passwort. Bitte versuchen Sie es erneut.');
    }
}

// Funktion zum Speichern des neuen Passworts und Weiterleitung zur Login-Seite
function saveNewPassword(event) {
    event.preventDefault();
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (newPassword !== confirmPassword) {
        alert('Die Passwörter stimmen nicht überein. Bitte erneut eingeben.');
        return;
    }

    // Laden der gespeicherten Benutzerinformationen
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (!userInfo) {
        alert('Fehler: Benutzerinformationen konnten nicht gefunden werden.');
        return;
    }

    // Hinzufügen des neuen Passworts zu den Benutzerinformationen
    userInfo.password = newPassword;

    // Aktualisieren der Daten im localStorage
    localStorage.setItem('userInfo', JSON.stringify(userInfo));

    console.log(`Passwort für Mitarbeiter ${userInfo.username} (Personalnummer: ${userInfo.personalnummer}) gespeichert.`);
    alert('Neues Passwort erfolgreich gespeichert!');

    // Weiterleitung zur Login-Seite
    window.location.href = '../Lagerbestand/Loginseite_Lager/Loginseite_Lager.html'; // Weiterleitung zur Lagerseite
}

// Funktion für "Passwort vergessen"
function forgotPassword() {
    alert("Bitte generieren Sie ein Einmalpasswort und erstellen Sie ein neues Passwort.");
    
    // Zeigt den Einmalpasswort-Generierungsbereich an
    document.getElementById('generated-password').style.display = 'block';
}
