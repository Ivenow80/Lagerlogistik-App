// Funktion zum Generieren eines QR-Codes
const generateQRCode = () => {
    const qrCodeContainer = document.getElementById("qrcode");
    const lagerBestandsURL = "https://example.com/lagerbestand"; // URL zur Lagerbestandsseite
  
    // QR-Code-Container leeren, um alten QR-Code zu entfernen
    qrCodeContainer.innerHTML = "";
  
    // QR-Code generieren
    new QRCode(qrCodeContainer, {
      text: lagerBestandsURL,
      width: 200,
      height: 200,
    });
  
    // Zeitstempel aktualisieren
    const timestamp = new Date();
    updateTimestamp(timestamp);
  };
  
  // Funktion zum Aktualisieren des Zeitstempels
  const updateTimestamp = (timestamp) => {
    const formattedTime = timestamp.toLocaleTimeString("de-DE", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    document.getElementById("timestamp").textContent = `Letzte Generierung: ${formattedTime}`;
  };
  
  // Timer, um QR-Code alle 2 Stunden neu zu generieren
  const startQRCodeTimer = () => {
    generateQRCode(); // QR-Code bei Seitenaufruf generieren
    setInterval(generateQRCode, 2 * 60 * 60 * 1000); // Automatische Generierung alle 2 Stunden
  };
  
  // Manuelle Generierung durch Button
  document.getElementById("regenButton").addEventListener("click", () => {
    generateQRCode();
  });
  
  // Initialisierung beim Laden der Seite
  window.onload = startQRCodeTimer;
  