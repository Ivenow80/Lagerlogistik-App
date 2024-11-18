import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';  // Importiere den QR-Code-Generator
import './App.css';  // Importiere das CSS

// Konstante für das Firmenlogo (achte darauf, dass das Bild im public-Verzeichnis ist)
const FIRMA_LOGO = 'logo_neu.png';

function App() {
  // State für die Eingabewerte und den Status
  const [vorname, setVorname] = useState('');
  const [nachname, setNachname] = useState('');
  const [personalnummer, setPersonalnummer] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [qrData, setQrData] = useState('');

  // Funktion zum Erstellen des QR-Codes
  const generateEmployeeQRCode = () => {
    // Trimmen der Eingabewerte
    const trimmedVorname = vorname.trim();
    const trimmedNachname = nachname.trim();
    const trimmedPersonalnummer = personalnummer.trim();

    if (!trimmedVorname || !trimmedNachname || !trimmedPersonalnummer) {
      setStatusMessage('Bitte füllen Sie alle Felder aus, um den QR-Code zu erstellen.');
      return;
    }

    // Erstellen einer personalisierten Mitarbeiter-ID für den QR-Code-Inhalt
    const employeeID = `Mitarbeiter: ${trimmedVorname} ${trimmedNachname}, Personalnummer: ${trimmedPersonalnummer}`;

    // Setzen der QR-Daten und Statusnachricht
    setQrData(employeeID);
    setStatusMessage('QR-Code erfolgreich erstellt!');
  };

  return (
    <div className="app-container">
      <h1>Neuanmeldung - Sicherheits-App</h1>

      <div className="firmen-logo">
        <img src={FIRMA_LOGO} alt="Firmenlogo" style={{ width: 100, height: 100 }} />
      </div>

      <form id="registration-form">
        <label htmlFor="vorname">Vorname:</label>
        <input
          type="text"
          id="vorname"
          name="vorname"
          value={vorname}
          onChange={(e) => setVorname(e.target.value)}
          required
        />
        <br /><br />

        <label htmlFor="nachname">Nachname:</label>
        <input
          type="text"
          id="nachname"
          name="nachname"
          value={nachname}
          onChange={(e) => setNachname(e.target.value)}
          required
        />
        <br /><br />

        <label htmlFor="personalnummer">Personalnummer:</label>
        <input
          type="text"
          id="personalnummer"
          name="personalnummer"
          value={personalnummer}
          onChange={(e) => setPersonalnummer(e.target.value)}
          required
        />
        <br /><br />

        <button type="button" onClick={generateEmployeeQRCode}>
          QR-Code erstellen
        </button>
      </form>

     
      {statusMessage && <p>{statusMessage}</p>}

      {qrData && (
        <div id="qr-code-container">
          <h3>Ihr QR-Code:</h3>
          {/* QR-Code anzeigen mit QRCodeCanvas */}
          <QRCodeCanvas value={qrData} size={256} />
        </div>
      )}
    </div>
  );
}

export default App;
