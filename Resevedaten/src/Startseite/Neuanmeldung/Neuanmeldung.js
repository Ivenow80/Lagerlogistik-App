// Funktion zur QR-Code-Erstellung basierend auf den eingegebenen Daten
function generateEmployeeQRCode() {
    const vorname = document.getElementById("vorname").value.trim();
    const nachname = document.getElementById("nachname").value.trim();
    const personalnummer = document.getElementById("personalnummer").value.trim();
    const statusMessage = document.getElementById("status-message");
    const qrCodeContainer = document.getElementById("qr-code");

    // Überprüfen, ob alle Felder ausgefüllt sind
    if (!vorname || !nachname || !personalnummer) {
        statusMessage.textContent = "Bitte füllen Sie alle Felder aus, um den QR-Code zu erstellen.";
        return;
    }

    // Erstellen einer personalisierten Mitarbeiter-ID für den QR-Code-Inhalt
    const employeeID = `Mitarbeiter: ${vorname} ${nachname}, Personalnummer: ${personalnummer}`;

    // QR-Code-Container leeren und neuen QR-Code generieren
    qrCodeContainer.innerHTML = "";

    QRCode.toCanvas(qrCodeContainer, employeeID, {
        width: 200,
        margin: 2,
        color: {
            dark: "#000000",  // QR-Code-Farbe (schwarz)
            light: "#f9f9f9"  // Hintergrundfarbe (hellgrau)
        }
    }, function (error) {
        if (error) {
            console.error("Fehler beim Erstellen des QR-Codes:", error);
            statusMessage.textContent = "Fehler beim Erstellen des QR-Codes.";
        } else {
            statusMessage.textContent = "QR-Code erfolgreich erstellt!";
            console.log("QR-Code erfolgreich erstellt:", employeeID);
        }
    });
}
