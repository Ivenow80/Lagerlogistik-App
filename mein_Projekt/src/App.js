import React, { useState } from 'react'; // Importiere React und useState
import logo from './assets/images/logo_neu.png'; // Importiere das Logo
import './App.css'; // Importiere die CSS-Datei

function App() {
  const [vorname, setVorname] = useState('');  // State für Vorname
  const [nachname, setNachname] = useState('');  // State für Nachname
  const [personalnummer, setPersonalnummer] = useState('');  // State für Personalnummer
  const [statusMessage, setStatusMessage] = useState('');  // State für Status-Nachrichten
  const [qrCodeUrl, setQrCodeUrl] = useState(null);  // State für die QR-Code-URL

  // Funktion zum Erstellen des QR-Codes
  const generateEmployeeQRCode = () => {
    // Überprüfen, ob alle Felder ausgefüllt sind
    if (!vorname || !nachname || !personalnummer) {
      setStatusMessage('Bitte füllen Sie alle Felder aus, um den QR-Code zu erstellen.');
      return; // Beende die Funktion, wenn Felder leer sind
    }

    // Anfrage an den Express-Server senden, um den QR-Code zu generieren
    fetch(`/api/generate-qr?vorname=${vorname}&nachname=${nachname}&personalnummer=${personalnummer}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.qrCodeUrl) {
          setQrCodeUrl(data.qrCodeUrl); // Setze die URL des QR-Codes
          setStatusMessage('QR-Code erfolgreich erstellt!');  // Erfolgsmeldung
        } else {
          setStatusMessage('Fehler beim Erstellen des QR-Codes.');  // Fehler anzeigen
        }
      })
      .catch((error) => {
        console.error('Fehler:', error);
        setStatusMessage('Fehler beim Erstellen des QR-Codes.');
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Lagerlogistik Logo" />
        <h1>QR-Code Generator</h1>
        <p>Optimieren Sie Ihre Logistikprozesse mit unserem QR-Code Generator!</p>
      </header>

      <div className="app-container">
        {/* Eingabefelder für Vorname, Nachname und Personalnummer */}
        <div>
          <label>Vorname:</label>
          <input
            type="text"
            value={vorname}
            onChange={(e) => setVorname(e.target.value)}  // setze Vorname
          />
        </div>

        <div>
          <label>Nachname:</label>
          <input
            type="text"
            value={nachname}
            onChange={(e) => setNachname(e.target.value)}  // setze Nachname
          />
        </div>

        <div>
          <label>Personalnummer:</label>
          <input
            type="text"
            value={personalnummer}
            onChange={(e) => setPersonalnummer(e.target.value)}  // setze Personalnummer
          />
        </div>

        {/* Button zum Erstellen des QR-Codes */}
        <button onClick={generateEmployeeQRCode}>QR-Code erstellen</button>

        {/* Anzeige der Statusmeldung */}
        {statusMessage && <p>{statusMessage}</p>}

        {/* Anzeige des QR-Codes, wenn er erstellt wurde */}
        {qrCodeUrl && (
          <div>
            <h3>QR-Code:</h3>
            <img src={qrCodeUrl} alt="QR-Code" />
          </div>
        )}

        {/* Link zu React */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Erfahren Sie mehr über React
        </a>
      </div>
    </div>
  );
}

export default App;
