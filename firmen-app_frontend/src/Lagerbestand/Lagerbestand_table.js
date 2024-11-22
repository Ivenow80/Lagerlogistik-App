// Funktion zum Speichern der Formulardaten
function speichern() {
  // Werte aus dem Formular abrufen
  const pos = document.getElementById("posInput").value;
  const artikelnummer = document.getElementById("artikelnummerInput").value;
  const artikelbezeichnung = document.getElementById("artikelbezeichnugInput").value;
  const lager = document.getElementById("lagerInput").value;
  const lagerplatz = document.getElementById("lagerplatzInput").value;
  const lagerbestand = document.getElementById("lagerbestandInput").value;
  const warenentnahme = document.getElementById("warenentnahmeInput").value;
  const warehinzugefügt = document.getElementById("warehinzugefügtInput").value;
  const einheit = document.getElementById("einheitInput").value;
  const preisproeinheit = document.getElementById("preisproeinheitInput").value;
  const mindestmenge = document.getElementById("mindestmengeInput").value;
  const nachbestellen = document.getElementById("nachbestellenInput").checked ? "Ja" : "Nein";
  const minbestellmenge = document.getElementById("minbestellmengeInput").value;
  const lieferant = document.getElementById("lieferantInput").value;
  const bestellmenge = document.getElementById("besttellmengeInput").value;
  const nachbestelltam = document.getElementById("nachbestelltamInput").value;
  const lieferzeit = document.getElementById("lieferzeitInput").value;
  const mitarbeiter = document.getElementById("mitarbeiterInput").value;
  const personalnummer = document.getElementById("personalnummerInput").value;

  // Berechnung des Lagerwertes (Lagerbestand * Preis pro Einheit)
  const lagerwert = lagerbestand * preisproeinheit;

  // Neue Zeile in der Tabelle erstellen
  const tableBody = document.querySelector("table tbody");
  const newRow = document.createElement("tr");

  // Neue Zellen für die Zeile erstellen
  newRow.innerHTML = `
    <td>${pos}</td>
    <td>${artikelnummer}</td>
    <td>${artikelbezeichnung}</td>
    <td>${lager}</td>
    <td>${lagerplatz}</td>
    <td>${lagerbestand}</td>
    <td>${warenentnahme}</td>
    <td>${warehinzugefügt}</td>
    <td>${einheit}</td>
    <td>${preisproeinheit}</td>
    <td>${lagerwert}</td>
    <td>${mindestmenge}</td>
    <td>${nachbestellen}</td>
    <td>${minbestellmenge}</td>
    <td>${lieferant}</td>
    <td>${bestellmenge}</td>
    <td>${nachbestelltam}</td>
    <td>${lieferzeit}</td>
    <td>${mitarbeiter}</td>
    <td>${personalnummer}</td>
  `;

  // Zeile zur Tabelle hinzufügen
  tableBody.appendChild(newRow);

  // Formular zurücksetzen
  document.getElementById("dataForm").reset();
}



  // Holt alle Daten aus dem Formular



// Laden der gespeicherten Daten beim Laden der Seite
// load funktion die woanders hin muss
// window.onload = function() {
//   const savedData = localStorage.getItem('tableData') ? JSON.parse(localStorage.getItem('tableData')) : [];

//   const table = document.querySelector('.tg tbody');
//   savedData.forEach(data => {
//     const newRow = document.createElement('tr');
//     Object.values(data).forEach(value => {
//       const td = document.createElement('td');
//       td.textContent = value;
//       td.contentEditable = "true"; // Macht die Zellen bearbeitbar
//       newRow.appendChild(td);
//     });
//     table.appendChild(newRow);
//   });

//   // Event-Listener für Logout-Button
//   document.getElementById('logoutButton').addEventListener('click', logout);


//   // Event-Listener für Speichern-Button
//   document.getElementById('speichernButton').addEventListener('click', speichern);
// }
