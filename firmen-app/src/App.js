import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';  // Importiere den QR-Code-Generator
import './App.css';

// Konstante für das Firmenlogo (als Beispiel)
const FIRMA_LOGO = 'logo_neu.png';  // Achte darauf, dass sich das Bild im 'public'-Verzeichnis befindet!

function App() {
  // Mitarbeiterdaten können nun über den State dynamisch geändert werden
  const [personalnummer, setPersonalnummer] = useState('123456789');
  const [vorname, setVorname] = useState('Max');
  const [nachname, setNachname] = useState('Mustermann');

  // Erstellen eines Datenstrings für den QR-Code (Personalnummer, Vorname, Nachname)
  const mitarbeiterDaten = { personalnummer, vorname, nachname };
  const qrData = JSON.stringify(mitarbeiterDaten);

  // Funktion für das Aktualisieren der Mitarbeiterdaten (optional, wenn du Input-Felder hinzufügst)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'personalnummer') {
      setPersonalnummer(value);
    } else if (name === 'vorname') {
      setVorname(value);
    } else if (name === 'nachname') {
      setNachname(value);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Firmen App</h1>

        {/* Firmenlogo anzeigen */}
        <div className="firmen-logo">
          <img src={FIRMA_LOGO} alt="Firmenlogo" style={{ width: 100, height: 100 }} />
        </div>

        {/* Mitarbeiterinformationen anzeigen */}
        <div className="mitarbeiter-info">
          <h2>Mitarbeiterinformationen</h2>
          <p><strong>Personalnummer:</strong> {personalnummer}</p>
          <p><strong>Name:</strong> {vorname} {nachname}</p>
        </div>

        {/* Optional: Eingabefelder zur Bearbeitung der Mitarbeiterdaten */}
        <div className="input-fields">
          <label>
            Personalnummer:
            <input
              type="text"
              name="personalnummer"
              value={personalnummer}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Vorname:
            <input
              type="text"
              name="vorname"
              value={vorname}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Nachname:
            <input
              type="text"
              name="nachname"
              value={nachname}
              onChange={handleInputChange}
            />
          </label>
        </div>

        {/* QR-Code anzeigen */}
        <div className="qr-code">
          <h3>QR-Code für die Mitarbeiterdaten</h3>
          {/* QR-Code anzeigen mit QRCodeCanvas */}
          <QRCodeCanvas value={qrData} size={256} />
        </div>
      </header>
    </div>
  );
}

export default App;
