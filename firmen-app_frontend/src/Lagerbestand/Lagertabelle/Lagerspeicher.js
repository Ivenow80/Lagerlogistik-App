// Funktion zum Löschen einer ganzen Zeile und Aktualisieren des LocalStorage
function deleteRow(button) {
  // Hole die Zeile, in der der Button ist
  const row = button.closest("tr");

  // Entferne die Zeile aus der Tabelle
  row.remove();

  // Bestätigungs-Alert anzeigen
  alert("Die Zeile wurde erfolgreich gelöscht!");

  // Aktualisiere den LocalStorage nach dem Löschen
  updateLocalStorage();
}

// Funktion zum Aktualisieren des LocalStorage
function updateLocalStorage() {
  const tableBody = document.querySelector("#lagerTable tbody");
  const rows = Array.from(tableBody.querySelectorAll("tr"));

  // Hole die Daten aus den Zeilen (außer der Löschen-Spalte)
  const data = rows.map((row) => {
    const cells = Array.from(row.querySelectorAll("td"));
    return cells.slice(0, -1).map((cell) => cell.textContent); // Ignoriere die Löschen-Schaltfläche
  });

  // Speichern der aktualisierten Daten im localStorage
  localStorage.setItem("lagerDaten", JSON.stringify(data));
}

// Funktion zum Laden der gespeicherten Daten aus dem localStorage und Anzeigen der Tabelle
function loadData() {
  const savedData = localStorage.getItem('lagerDaten');
  const tableBody = document.querySelector('#lagerTable tbody');
  tableBody.innerHTML = ''; // Tabelle zurücksetzen

  if (savedData) {
    const rowsData = JSON.parse(savedData);

    // Durch die gespeicherten Daten gehen und neue Zeilen erstellen
    rowsData.forEach(rowData => {
      const row = document.createElement('tr');

      rowData.forEach(cellData => {
        const cell = document.createElement('td');
        cell.textContent = cellData;
        row.appendChild(cell);
      });

      // Löschen-Button für jede Zeile hinzufügen
      const deleteButtonCell = document.createElement('td');
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Löschen';
      deleteButton.classList.add('btn-delete');
      deleteButton.onclick = function () {
        deleteRow(deleteButton);
      };
      deleteButtonCell.appendChild(deleteButton);
      row.appendChild(deleteButtonCell);

      tableBody.appendChild(row);
    });
  } else {
    alert('Keine gespeicherten Daten gefunden.');
  }
}

// Direktes Laden der Tabelle beim Start der Seite
window.addEventListener('load', loadData);
