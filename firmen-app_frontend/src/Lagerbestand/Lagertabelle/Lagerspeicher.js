// Funktion zum Löschen einer einzelnen Zeile und Aktualisieren des LocalStorage
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

// Funktion zum Löschen der ausgewählten Zeilen und Bestätigung der Anzahl der gelöschten Zeilen
function deleteSelectedRows() {
  const selectedRows = document.querySelectorAll('.select-row:checked'); // Alle markierten Zeilen finden

  // Überprüfen, ob überhaupt Zeilen ausgewählt wurden
  if (selectedRows.length === 0) {
    alert("Bitte wählen Sie mindestens eine Zeile aus!");
    return;
  }

  // Lösche alle ausgewählten Zeilen und zähle die gelöschten Zeilen
  let deletedCount = 0;
  selectedRows.forEach(row => {
    const tableRow = row.closest('tr'); // Finde die entsprechende Zeile
    tableRow.remove(); // Lösche die Zeile
    deletedCount++; // Erhöhe den Zähler für gelöschte Zeilen
  });

  // Aktualisiere den LocalStorage nach dem Löschen
  updateLocalStorage();

  // Zeige eine Bestätigung mit der Anzahl der gelöschten Zeilen an
  alert(`Es wurden ${deletedCount} Zeile(n) erfolgreich gelöscht.`);
}

// Funktion zum Aktualisieren des LocalStorage
function updateLocalStorage() {
  const tableBody = document.querySelector("#lagerTable tbody");
  const rows = Array.from(tableBody.querySelectorAll("tr"));

  // Hole die Daten aus den Zeilen (außer der Löschen-Spalte)
  const data = rows.map((row) => {
    const cells = Array.from(row.querySelectorAll("td"));
    return cells.slice(0, -1).map((cell) => cell.textContent); // Ignoriere die Löschen-Schaltfläche und ggf. Checkbox
  });

  // Speichern der aktualisierten Daten im localStorage
  localStorage.setItem("lagerDaten", JSON.stringify(data));
}

// Funktion zum Laden der gespeicherten Daten aus dem LocalStorage und Anzeigen der Tabelle
function loadData() {
  const savedData = localStorage.getItem("lagerDaten");
  const tableBody = document.querySelector("#lagerTable tbody");
  tableBody.innerHTML = ""; // Tabelle zurücksetzen

  if (savedData) {
    const rowsData = JSON.parse(savedData);

    // Durch die gespeicherten Daten gehen und neue Zeilen erstellen
    rowsData.forEach((rowData) => {
      const row = document.createElement("tr");

      // Checkbox für jede Zeile hinzufügen
      const checkboxCell = document.createElement("td");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.classList.add("select-row");
      checkboxCell.appendChild(checkbox);
      row.appendChild(checkboxCell);

      // Zellen der Zeile aus den gespeicherten Daten hinzufügen
      rowData.forEach((cellData) => {
        const cell = document.createElement("td");
        cell.textContent = cellData;
        row.appendChild(cell);
      });

      // Löschen-Button für jede Zeile hinzufügen
      const deleteButtonCell = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Löschen";
      deleteButton.classList.add("btn-delete");
      deleteButton.onclick = function () {
        deleteRow(deleteButton);
      };
      deleteButtonCell.appendChild(deleteButton);
      row.appendChild(deleteButtonCell);

      // Zeile zur Tabelle hinzufügen
      tableBody.appendChild(row);
    });
  } else {
    alert("Keine gespeicherten Daten gefunden.");
  }
}

// Direktes Laden der Tabelle beim Start der Seite
window.addEventListener("load", loadData);

// Funktion für den Zurück-Button
function goToLagerbestand() {
  window.location.href = "/lagerbestand"; // Pfad zur Lagerbestandseite
}
