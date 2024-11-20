import React from 'react';
import { QRCodeCanvas} from 'qrcode.react';  // Importiere den QR-Code-Generator als QRCodeCanvas
import './App.css';

// Konstante für das Firmenlogo (als Beispiel)
const FIRMA_LOGO = 'logo_neu.png';

// Konstante für die Personalnummer und Mitarbeiterdaten
const mitarbeiterDaten = {
  personalnummer: '',
  vorname: '',
  nachname: '',
};

function App() {
  const { personalnummer, vorname, nachname } = mitarbeiterDaten;

  // Erstellen eines Datenstrings für den QR-Code (Personalnummer, Vorname, Nachname)
  const qrData = JSON.stringify(mitarbeiterDaten);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Firmen App</h1>

        {/* Firmenlogo anzeigen */}
        <div className="firmen-logo">
          <img src={FIRMA_LOGO} alt="Firmenlogo" style={{ width: 250, height: 250 }} />
        </div>

        {/* Mitarbeiterinformationen anzeigen */}
        <div className="mitarbeiter-info">
          <h2>Mitarbeiterinformationen</h2>
          <p><strong>Personalnummer:</strong> {personalnummer}</p>
          <p><strong>Name:</strong> {vorname} {nachname}</p>
        </div>

        <div className="qr-code">
          <h3>QR-Code für die Mitarbeiterdaten</h3>
          {/* Hier wird der QR-Code mit QRCodeCanvas generiert */}
          <QRCodeCanvas value={qrData} size={256} />
        </div>
      </header>
    </div>
  );
}

export default App;
