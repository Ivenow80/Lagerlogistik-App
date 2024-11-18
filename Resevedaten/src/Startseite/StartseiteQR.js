document.addEventListener('DOMContentLoaded', () => {
  const qrReader = new Html5Qrcode('qr-reader');
  const loginStatus = document.getElementById('login-status');

  // Erfolgreicher Scan: Mitarbeiter-ID anzeigen
  function onScanSuccess(decodedText) {
      loginStatus.textContent = `Mitarbeiter-ID: ${decodedText}`;

      // QR-Scanner stoppen, nachdem der Code gelesen wurde
      qrReader.stop()
          .then(() => {
              console.log("QR-Code-Scanner gestoppt");
          })
          .catch(error => {
              console.error("Fehler beim Stoppen des Scanners:", error);
          });
  }

  // Fehler beim Scannen behandeln
  function onScanFailure(error) {
      console.warn(`Scan fehlgeschlagen: ${error}`);
  }

  // QR-Scanner starten
  qrReader.start(
      { facingMode: "environment" },
      {
          fps: 10,
          qrbox: { width: 250, height: 250 }
      },
      onScanSuccess,
      onScanFailure
  ).catch(error => {
      console.error("Fehler beim Starten des QR-Scanners:", error);
  });
});
