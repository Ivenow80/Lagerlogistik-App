import QRCode from 'qrcode'; // Importiere das qrcode-Paket

function generateEmployeeQRCode() {
  // Werte aus den Eingabefeldern holen und trimmen (entfernen von Leerzeichen)
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
  qrCodeContainer.innerHTML = ""; // Vorherigen QR-Code entfernen

  // QR-Code erstellen und ins Canvas-Element einfügen
  QRCode.toCanvas(qrCodeContainer, employeeID, {
    width: 200, // Breite des QR-Codes
    margin: 2,  // Rand des QR-Codes
    color: {     // Farben für den QR-Code
      dark: "#000000",  // Dunkel (schwarz)
      light: "#f9f9f9"  // Hell (hellgrau)
    }
  }, function (error) {
    // Fehlerbehandlung
    if (error) {
      console.error("Fehler beim Erstellen des QR-Codes:", error);
      statusMessage.textContent = "Fehler beim Erstellen des QR-Codes.";
    } else {
      statusMessage.textContent = "QR-Code erfolgreich erstellt!";
      console.log("QR-Code erfolgreich erstellt:", employeeID);
    }
  });
}
