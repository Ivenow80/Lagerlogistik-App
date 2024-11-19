// Funktion für das Speichern der Daten und das Hinzufügen zur Tabelle
function speichern() {
  const artikel = document.getElementById('artikelInput').value;
  const bestand = document.getElementById('bestandInput').value;


  if (!artikel || !bestand) {
    alert('Bitte füllen Sie beide Felder aus!');
    return;
  }


  // Neue Zeile in die Tabelle einfügen
  const tabelle = document.querySelector('.tg tbody');
  const neueZeile = document.createElement('tr');


  neueZeile.innerHTML = `
    <td class="tg-fymr" contenteditable="true">${tabelle.rows.length + 1}</td>
    <td class="tg-0pky" contenteditable="true">-</td>
    <td class="tg-0pky" contenteditable="true">${artikel}</td>
    <td class="tg-0pky" contenteditable="true">-</td>
    <td class="tg-0pky" contenteditable="true">-</td>
    <td class="tg-0r18" contenteditable="true">${bestand}</td>
    <td class="tg-dxqr" contenteditable="true">-</td>
    <td class="tg-c3ow" contenteditable="true">-</td>
    <td class="tg-0pky" contenteditable="true">-</td>
    <td class="tg-fymr" contenteditable="true">-</td>
    <td class="tg-0pky" contenteditable="true">-</td>
    <td class="tg-0pky" contenteditable="true">-</td>
    <td class="tg-zz2x" contenteditable="true">-</td>
    <td class="tg-0pky" contenteditable="true">-</td>
    <td class="tg-0pky" contenteditable="true">-</td>
    <td class="tg-0pky" contenteditable="true">-</td>
    <td class="tg-0pky" contenteditable="true">-</td>
    <td class="tg-l6li" contenteditable="true">-</td>
    <td class="tg-0pky" contenteditable="true">-</td>
    <td class="tg-l6li" contenteditable="true">-</td>
  `;


  tabelle.appendChild(neueZeile);


  // Zellen zum Auswählen und Ändern der Farben (Text und Hintergrund) aktivieren
  const zellen = neueZeile.querySelectorAll('td');
  zellen.forEach(zelle => {
    zelle.addEventListener('click', function() {
      // Wenn eine Zelle angeklickt wird, wende die ausgewählten Farben darauf an
      const textColor = document.getElementById('textColor').value;
      const bgColor = document.getElementById('bgColor').value;


      this.style.color = textColor; // Textfarbe der angeklickten Zelle ändern
      this.style.backgroundColor = bgColor; // Hintergrundfarbe der angeklickten Zelle ändern
    });
  });


  alert('Daten erfolgreich gespeichert und zur Tabelle hinzugefügt!');
}


