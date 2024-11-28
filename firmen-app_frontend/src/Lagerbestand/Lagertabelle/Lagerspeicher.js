// Funktion zum Speichern der gesamten Tabelle im localStorage
function speichernTabelle() {
    const table = document.querySelector('.tg tbody');
    const rowsData = [];
  
    // Gehe durch jede Zeile der Tabelle und speichere die Zellen
    const rows = table.rows;
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const rowData = [];
  
      // Gehe durch jede Zelle in der Zeile
      for (let j = 0; j < row.cells.length; j++) {
        rowData.push(row.cells[j].innerText);
      }
      rowsData.push(rowData);
    }
  
    // Speichern der Daten im localStorage
    localStorage.setItem('lagerDaten', JSON.stringify(rowsData));
    
    // Bestätigung für den Benutzer
    alert('Daten wurden erfolgreich gespeichert!');
  }
  // Funktion zum Löschen eines Zellinhalts
function deleteCellContent(rowIndex, cellIndex) {
  const savedData = localStorage.getItem('tableData') 
    ? JSON.parse(localStorage.getItem('tableData')) 
    : [];

  // Überprüfen, ob die Indizes gültig sind
  if (
    rowIndex >= 0 && rowIndex < savedData.length &&
    cellIndex >= 0 && cellIndex < Object.keys(savedData[rowIndex]).length
  ) {
    const dataKeys = Object.keys(savedData[rowIndex]); // Schlüssel der Objekte
    savedData[rowIndex][dataKeys[cellIndex]] = ""; // Inhalt der Zelle löschen

    // Aktualisierte Daten im localStorage speichern
    localStorage.setItem('tableData', JSON.stringify(savedData));
    loadData(); // Tabelle neu laden
  }
}

// Funktion zum Laden und Rendern der Tabelle
function loadData() {
  const savedData = localStorage.getItem('tableData') 
    ? JSON.parse(localStorage.getItem('tableData')) 
    : [];

  const tableBody = document.querySelector('#lagerTable tbody');
  tableBody.innerHTML = ''; // Tabelle zurücksetzen

  savedData.forEach((data, rowIndex) => {
    const row = document.createElement('tr');

    // Daten jeder Zelle mit "Löschen"-Button erstellen
    Object.entries(data).forEach(([key, value], cellIndex) => {
      const cell = document.createElement('td');

      // Zelleninhalt
      const cellText = document.createElement('span');
      cellText.textContent = value || "-";

      // Löschen-Button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = "Löschen";
      deleteButton.classList.add('btn-delete');
      deleteButton.onclick = () => deleteCellContent(rowIndex, cellIndex);

      // Inhalte zusammenfügen
      cell.appendChild(cellText);
      cell.appendChild(deleteButton);
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });
}

// Beim Laden der Seite Tabelle initialisieren
window.onload = loadData;
function löschen(button) {
  // Hole die Zeile, in der der Button ist
  const row = button.closest("tr");

  // Entferne die Zeile aus der Tabelle
  row.remove();

  // Aktualisiere den LocalStorage (falls nötig)
  updateLocalStorage();
}

// Beispiel für die Funktion zum Aktualisieren des LocalStorage
function updateLocalStorage() {
  const tableBody = document.querySelector("#dataTable tbody");
  const rows = Array.from(tableBody.querySelectorAll("tr"));

  const data = rows.map((row) => {
    const cells = Array.from(row.querySelectorAll("td"));
    return cells.slice(0, -1).map((cell) => cell.textContent); // Ignoriere die Löschen-Schaltfläche
  });

  localStorage.setItem("tableData", JSON.stringify(data));
}

  // Funktion zum Laden der gespeicherten Daten aus dem localStorage
  function laden() {
    const savedData = localStorage.getItem('lagerDaten');
    if (savedData) {
      const rowsData = JSON.parse(savedData);
      const table = document.querySelector('.tg tbody');
  
      // Löschen der bestehenden Tabelle
      table.innerHTML = '';
  
      // Durch die gespeicherten Zeilen gehen und in die Tabelle einfügen
      rowsData.forEach(rowData => {
        const row = document.createElement('tr');
  
        rowData.forEach(cellData => {
          const cell = document.createElement('td');
          cell.innerText = cellData;
          row.appendChild(cell);
        });
  
        table.appendChild(row);
      });
    } else {
      alert('Keine gespeicherten Daten gefunden.');
    }
  }
  
  // Optional: Direktes Laden der Tabelle beim Start der Seite
  window.addEventListener('load', laden);
  