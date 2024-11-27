document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("dataForm");
  const tableBody = document.querySelector("#dataTable tbody");
  const addRowButton = document.getElementById("addRowButton");
  const saveButton = document.getElementById("saveButton");
  const backButton = document.getElementById("backButton");

  // Funktion für den "Zeile hinzufügen"-Button
  addRowButton.addEventListener("click", () => {
    const formData = new FormData(form);
    const row = document.createElement("tr");

    // Formulardaten durchlaufen und in die Tabelle einfügen
    formData.forEach((value, key) => {
      const cell = document.createElement("td");
      const input = document.createElement("input");
      input.type = "text";
      input.value = value;
      input.disabled = true;  // Eingabefelder in der Tabelle nur als Anzeige (nicht bearbeitbar)
      cell.appendChild(input);
      row.appendChild(cell);
    });

    // Berechne den Wert des Lagers (lagerbestand * preisproeinheit)
    const lagerbestand = parseFloat(formData.get("lagerbestandInput"));
    const preisProEinheit = parseFloat(formData.get("preisproeinheitInput"));
    const wertLager = lagerbestand * preisProEinheit;
    const lagerWertCell = document.createElement("td");
    const lagerWertInput = document.createElement("input");
    lagerWertInput.type = "text";
    lagerWertInput.value = wertLager.toFixed(2);  // Formatierung auf 2 Dezimalstellen
    lagerWertInput.disabled = true;  // Eingabefeld nicht bearbeitbar
    lagerWertCell.appendChild(lagerWertInput);
    row.appendChild(lagerWertCell);

    // Löschen-Schaltfläche hinzufügen
    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Zeile löschen";
    deleteButton.addEventListener("click", () => {
      row.remove();
      updateLocalStorage();  // Update LocalStorage nach dem Löschen einer Zeile
      alert("Zeile gelöscht");
    });
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    tableBody.appendChild(row);

    // Formular zurücksetzen
    form.reset();

    // Speichern der neuen Daten im LocalStorage
    const savedData = loadTableDataFromStorage();
    savedData.push(Object.fromEntries(formData));
    localStorage.setItem("tableData", JSON.stringify(savedData));

    updateLocalStorage(); // Sicherstellen, dass die Daten im LocalStorage nach dem Hinzufügen gespeichert werden
  });

  // Funktion für den Speichern-Button
  saveButton.addEventListener("click", () => {
    const rows = Array.from(tableBody.querySelectorAll("tr"));
    const data = rows.map((row) => {
      const cells = row.querySelectorAll("input");
      return Array.from(cells).map((cell) => cell.value);
    });
    console.log("Gespeicherte Daten:", data);
    alert("Daten wurden gespeichert! (siehe Konsole)");
  });

  // Funktion zum Laden von gespeicherten Daten aus dem LocalStorage
  function loadTableDataFromStorage() {
    const savedData = localStorage.getItem("tableData")
      ? JSON.parse(localStorage.getItem("tableData"))
      : [];
    return savedData;
  }

  // Funktion zum Aktualisieren des LocalStorage nach jeder Änderung
  function updateLocalStorage() {
    const rows = Array.from(tableBody.querySelectorAll("tr"));
    const data = rows.map((row) => {
      const cells = row.querySelectorAll("input");
      const rowData = {};
      cells.forEach((cell, index) => {
        rowData[`column${index}`] = cell.value;
      });
      return rowData;
    });
    localStorage.setItem("tableData", JSON.stringify(data));
  }

  // Lade die Tabelle beim Laden der Seite
  function loadTableData() {
    const savedData = loadTableDataFromStorage();

    savedData.forEach((formValues) => {
      const row = document.createElement("tr");

      Object.keys(formValues).forEach((key) => {
        const cell = document.createElement("td");
        const input = document.createElement("input");
        input.type = "text";
        input.value = formValues[key];
        input.disabled = true;  // Eingabefelder in der Tabelle nur als Anzeige (nicht bearbeitbar)
        cell.appendChild(input);
        row.appendChild(cell);
      });

      // Löschen-Schaltfläche hinzufügen
      const deleteCell = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Zeile löschen";
      deleteButton.addEventListener("click", () => {
        row.remove();
        updateLocalStorage();  // Update LocalStorage nach dem Löschen einer Zeile
        alert("Zeile gelöscht");
      });
      deleteCell.appendChild(deleteButton);
      row.appendChild(deleteCell);

      tableBody.appendChild(row);
    });
  }

  loadTableData(); // Tabelle beim Laden der Seite mit gespeicherten Daten füllen
});
