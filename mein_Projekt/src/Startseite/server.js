const express = require('express');
const path = require('path');
const QRCode = require('qrcode'); // Importiere das QR-Code-Modul

const app = express();
const port = process.env.PORT || 5000;

// API-Endpunkt zum Erstellen des QR-Codes
app.get('/api/generate-qr', (req, res) => {
  const { vorname, nachname, personalnummer } = req.query;

  // Überprüfen, ob alle Felder vorhanden sind
  if (!vorname || !nachname || !personalnummer) {
    return res.status(400).json({ error: 'Fehlende Parameter' });
  }

  const employeeID = `Mitarbeiter: ${vorname} ${nachname}, Personalnummer: ${personalnummer}`;

  // QR-Code generieren
  QRCode.toDataURL(employeeID, {
    width: 200,
    margin: 2,
    color: {
      dark: '#000000', // Dunkel (schwarz)
      light: '#f9f9f9'  // Hell (hellgrau)
    }
  }, (error, url) => {
    if (error) {
      return res.status(500).json({ error: 'Fehler beim Erstellen des QR-Codes.' });
    }

    res.json({ qrCodeUrl: url }); // Rückgabe der URL des QR-Codes
  });
});

// Statische Dateien für das Frontend bereitstellen (React-Build)
app.use(express.static(path.join(__dirname, 'build')));

// Alle anderen Routen auf die index.html von React umleiten
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Server starten
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
