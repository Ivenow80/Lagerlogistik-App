// Speichern-Funktion
function speichern() {
    // Holt alle Daten aus dem Formular
    const form = document.getElementById('dataForm');
    const formData = new FormData(form);
  
    // Extrahiere die Formulardaten
    let formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });
  
    // Berechnung des Lagerbestandswerts (falls noch nicht automatisch berechnet wird)
    const wertLager = parseFloat(formValues.preisproeinheit) * parseInt(formValues.lagerbestand);
  
    // Füge die Formulardaten als neue Zeile in die Tabelle ein
    const table = document.querySelector('.tg tbody');
    const newRow = document.createElement('tr');
  
    // HTML-Inhalt der neuen Zeile
    newRow.innerHTML = `
      <td class="tg-fymr" contenteditable="true">${formValues.pos}</td>
      <td class="tg-fymr" contenteditable="true">${formValues.artikelnummer}</td>
      <td class="tg-fymr" contenteditable="true">${formValues.artikelbezeichnung}</td>
      <td class="tg-fymr" contenteditable="true">${formValues.lager}</td>
      <td class="tg-fymr" contenteditable="true">${formValues.lagerplatz}</td>
      <td class="tg-fymr" contenteditable="true">${formValues.lagerbestand}</td>
      <td class="tg-fymr" contenteditable="true">${formValues.warenentnahme}</td>
      <td class="tg-fymr" contenteditable="true">${formValues.warehinzugefügt}</td>
      <td class="tg-fymr" contenteditable="true">${formValues.einheit}</td>
      <td class="tg-fymr" contenteditable="true">${formValues.preisproeinheit}</td>
      <td class="tg-fymr" contenteditable="true">${wertLager.toFixed(2)}</td> <!-- Lagerwert berechnet -->
      <td class="tg-fymr" contenteditable="true">${formValues.mindestmenge}</td>
      <td class="tg-fymr" contenteditable="true">${formValues.nachbestellen}</td>
      <td class="tg-fymr" contenteditable="true">${formValues.minbestellmenge}</td>
      <td class="tg-fymr" contenteditable="true">${formValues.lieferant}</td>
      <td class="tg-fymr" contenteditable="true">${formValues.bestellmenge}</td>
      <td class="tg-fymr" contenteditable="true">${formValues.nachbestelltam}</td>
      <td class="tg-fymr" contenteditable="true">${formValues.lieferzeit}</td>
      <td class="tg-fymr" contenteditable="true">${formValues.mitarbeiter}</td>
      <td class="tg-fymr" contenteditable="true">${formValues.personalnummer}</td>
    `;
  
    // Neue Zeile in die Tabelle einfügen
    table.appendChild(newRow);
  
    // Lokale Speicherung der Daten (optional)
    const savedData = localStorage.getItem('tableData') ? JSON.parse(localStorage.getItem('tableData')) : [];
    savedData.push(formValues);
    localStorage.setItem('tableData', JSON.stringify(savedData));
  
    // Formular zurücksetzen
    form.reset();
  
    // Bestätigung, dass die Daten gespeichert wurden
    alert('Die Tabelle wurde erfolgreich gespeichert!');
  }
  
  // Laden der gespeicherten Daten beim Laden der Seite
  window.onload = function() {
    const savedData = localStorage.getItem('tableData') ? JSON.parse(localStorage.getItem('tableData')) : [];
  
    const table = document.querySelector('.tg tbody');
    savedData.forEach(data => {
      const newRow = document.createElement('tr');
      Object.values(data).forEach(value => {
        const td = document.createElement('td');
        td.textContent = value;
        newRow.appendChild(td);
      });
      table.appendChild(newRow);
    });
  }
  