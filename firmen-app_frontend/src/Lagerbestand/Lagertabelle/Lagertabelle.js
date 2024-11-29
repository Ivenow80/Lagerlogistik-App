document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("dataForm");
  const saveButton = document.getElementById("saveButton");
  const backButton = document.getElementById("backButton");
  const tableBody = document.querySelector("#dataTable tbody");

  // Funktion zum Hinzufügen einer Zeile
  function addRow(formData) {
    const row = document.createElement("tr");

    let formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
      const cell = document.createElement("td");
      const input = document.createElement("input");
      input.type = "text";
      input.value = value;
      cell.appendChild(input);
      row.appendChild(cell);
    });

    // Berechne den Wert des Lagers
    const wertLager =
      parseFloat(formValues.preisproeinheitInput) *
      parseInt(formValues.lagerbestandInput || 0);
    const lagerWertCell = document.createElement("td");
    const lagerWertInput = document.createElement("input");
    lagerWertInput.type = "text";
    lagerWertInput.value = wertLager.toFixed(2);
    lagerWertCell.appendChild(lagerWertInput);
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
    deleteButton.style.padding = "5px 10px";
    deleteButton.addEventListener("click", () => {
      row.remove();
      updateLocalStorage();  // Update LocalStorage nach dem Löschen einer Zeile
    });
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    // Zeile zur Tabelle hinzufügen
    tableBody.appendChild(row);

    // Speichern der neuen Daten im LocalStorage
    const savedData = loadTableDataFromStorage();
    savedData.push(formValues);
    localStorage.setItem("tableData", JSON.stringify(savedData));

    // Formular zurücksetzen
    form.reset();
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

  // Funktion zum Laden der gespeicherten Daten aus dem LocalStorage
  function loadTableData() {
    const savedData = JSON.parse(localStorage.getItem("tableData") || "[]");
    savedData.forEach((rowData) => {
      const row = document.createElement("tr");
      rowData.forEach((cellData) => {
        const cell = document.createElement("td");
        const input = document.createElement("input");
        input.type = "text";
        input.value = formValues[key];
        input.disabled = true; // Eingabefeld für angezeigte Daten
        cell.appendChild(input);
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
      deleteButton.style.padding = "5px 10px";
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

  // Funktion zur Aktualisierung des LocalStorage
  function updateLocalStorage() {
    const rows = Array.from(tableBody.querySelectorAll("tr"));
    const data = rows.map((row) => {
      const cells = row.querySelectorAll("input");
      const rowData = {};
      Array.from(cells).forEach((cell, index) => {
        const input = cell.querySelector("input");
        rowData[form.elements[index].name] = input.value;
      });
      return rowData;
    });

    localStorage.setItem("tableData", JSON.stringify(data));
  }

  // Lade die Tabelle beim Laden der Seite
  loadTableData();

  // Funktion für den "Zurück"-Button
  backButton.addEventListener("click", () => {
    alert("Einen Schritt zurück");
  });
});