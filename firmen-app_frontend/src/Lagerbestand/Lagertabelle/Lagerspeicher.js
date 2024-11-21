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
  