// Formular und Tabelle referenzieren
const form = document.getElementById("dataForm");
const tableBody = document.querySelector("#dataTable tbody");
const saveButton = document.getElementById("saveButton");

// Funktion zum Hinzufügen einer Zeile in die Tabelle
function addRow(formData) {
  const row = document.createElement("tr");

  // Formularwerte in die Tabelle einfügen
  const formValues = {};
  formData.forEach((value, key) => {
    formValues[key] = value;

    const cell = document.createElement("td");
    if (key === "nachbestellenInput") {
      // Für Checkbox: Anzeige als Ja/Nein
      cell.textContent = value === "on" ? "Ja" : "Nein";
    } else {
      cell.textContent = value;
    }
    row.appendChild(cell);
  });

  // Berechnung des Lagerwerts (Preis pro Einheit * Lagerbestand)
  const preis = parseFloat(formValues.preisProEinheitInput || 0);
  const bestand = parseInt(formValues.lagerbestandInput || 0, 10);
  const wertLager = (preis * bestand).toFixed(2);

  const lagerWertCell = document.createElement("td");
  lagerWertCell.textContent = wertLager;
  row.appendChild(lagerWertCell);

  // Zeile zur Tabelle hinzufügen
  tableBody.appendChild(row);

  // Alert nach erfolgreichem Hinzufügen der Zeile
  alert("Neue Zeile erfolgreich hinzugefügt!");

  // Formular zurücksetzen
  form.reset();

  // Speicher die Tabelle im LocalStorage
  saveTableData();
}

// Eventlistener für das Formular
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Verhindert das automatische Neuladen der Seite
  const formData = new FormData(form);
  addRow(formData);
});

// Funktion zum Speichern der Tabelle im LocalStorage
function saveTableData() {
  const tableRows = tableBody.querySelectorAll("tr");
  const tableData = [];

  tableRows.forEach(row => {
    const rowData = [];
    row.querySelectorAll("td").forEach(cell => {
      rowData.push(cell.textContent);
    });
    tableData.push(rowData);
  });

  // Speichert die Tabelle im LocalStorage
  localStorage.setItem("tableData", JSON.stringify(tableData));

  // Alert nach dem Speichern der Daten
  alert("Daten wurden erfolgreich gespeichert!");
}

// Eventlistener für den Speichern-Button
saveButton.addEventListener("click", function () {
  saveTableData();
});

// Funktion zum Laden der Tabelle aus dem LocalStorage, wenn die Seite geladen wird
window.addEventListener("load", function() {
  const savedData = localStorage.getItem("tableData");
  if (savedData) {
    const tableData = JSON.parse(savedData);
    tableData.forEach(rowData => {
      const row = document.createElement("tr");
      rowData.forEach(cellData => {
        const cell = document.createElement("td");
        cell.textContent = cellData;
        row.appendChild(cell);
      });
      tableBody.appendChild(row);
    });
  }
});
