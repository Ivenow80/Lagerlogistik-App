document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("dataForm");
  const saveButton = document.getElementById("saveButton");
  const backButton = document.getElementById("backButton");
  const tableBody = document.querySelector("#dataTable tbody");

  // Funktion zum Hinzufügen einer Zeile
  function addRow(formData) {
    const row = document.createElement("tr");

    // Formulardaten in Zellen einfügen
    Object.entries(formData).forEach(([key, value]) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });

    // Berechnung des Lagerwerts
    const preis = parseFloat(formData.preisproeinheitInput || 0);
    const bestand = parseInt(formData.lagerbestandInput || 0);
    const lagerWert = preis * bestand;
    const lagerWertCell = document.createElement("td");
    lagerWertCell.textContent = lagerWert.toFixed(2);
    row.appendChild(lagerWertCell);

    // Löschen-Schaltfläche hinzufügen
    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Löschen";
    deleteButton.style.backgroundColor = "#ff4d4d";
    deleteButton.style.color = "#fff";
    deleteButton.style.border = "none";
    deleteButton.style.borderRadius = "5px";
    deleteButton.style.cursor = "pointer";
    deleteButton.addEventListener("click", () => {
      row.remove();
      updateLocalStorage();
    });
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    // Zeile zur Tabelle hinzufügen
    tableBody.appendChild(row);
    updateLocalStorage();
  }

  // Funktion zum Speichern der Tabellen-Daten in den LocalStorage
  function updateLocalStorage() {
    const rows = Array.from(tableBody.querySelectorAll("tr"));
    const data = rows.map((row) => {
      const cells = Array.from(row.querySelectorAll("td"));
      return cells.slice(0, -1).map((cell) => cell.textContent); // Ignoriere die Löschen-Schaltfläche
    });
    localStorage.setItem("tableData", JSON.stringify(data));
  }

  // Funktion zum Laden der gespeicherten Daten aus dem LocalStorage
  function loadTableData() {
    const savedData = JSON.parse(localStorage.getItem("tableData") || "[]");
    savedData.forEach((rowData) => {
      const row = document.createElement("tr");
      rowData.forEach((cellData) => {
        const cell = document.createElement("td");
        cell.textContent = cellData;
        row.appendChild(cell);
      });

      // Löschen-Schaltfläche hinzufügen
      const deleteCell = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Löschen";
      deleteButton.style.backgroundColor = "#ff4d4d";
      deleteButton.style.color = "#fff";
      deleteButton.style.border = "none";
      deleteButton.style.borderRadius = "5px";
      deleteButton.style.cursor = "pointer";
      deleteButton.addEventListener("click", () => {
        row.remove();
        updateLocalStorage();
      });
      deleteCell.appendChild(deleteButton);
      row.appendChild(deleteCell);

      tableBody.appendChild(row);
    });
  }

  // EventListener für das Formular (zum Hinzufügen neuer Zeilen)
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Standardformular-Verhalten verhindern

    const formData = Object.fromEntries(new FormData(form).entries());
    addRow(formData); // Neue Zeile hinzufügen
    form.reset(); // Formular zurücksetzen
  });

  // EventListener für den "Speichern"-Button
  saveButton.addEventListener("click", () => {
    updateLocalStorage();
    alert("Daten erfolgreich gespeichert!");
  });

  // EventListener für den "Zurück"-Button
  backButton.addEventListener("click", () => {
    window.history.back(); // Zur vorherigen Seite zurückkehren
  });

  // Beim Laden der Seite gespeicherte Daten wiederherstellen
  loadTableData();
});
