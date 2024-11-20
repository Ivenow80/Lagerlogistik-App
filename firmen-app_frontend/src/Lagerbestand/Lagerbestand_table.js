// Funktion für das Speichern der Daten und das Hinzufügen zur Tabelle
function speichern() {
  const pos = document.getElementById('posInput').value.trim();
  const artikelnummer = document.getElementById('artikelnummerInput').value.trim();
  const artikelbezeichnung = document.getElementById('artikelbezeichnugInput').value.trim();
  const lager = document.getElementById('lagerInput').value.trim();
  const lagerplatz = document.getElementById('lagerplatzInput').value.trim();
  const lagerbestand = document.getElementById('lagerbestandInput').value.trim();
  const warenentnahme = document.getElementById('warenentnahmeInput').value.trim();
  const warehinzugefügt = document.getElementById('warehinzugefügtInput').value.trim();
  const einheit = document.getElementById('einheitInput').value.trim();
  const preisproeinheit = document.getElementById('preisproeinheitInput').value.trim();
  const wertlagerbestand = document.getElementById('wertlagerbestandInput').value.trim();
  const mindestmenge = document.getElementById('mindestmengeInput').value.trim();
  const nachbestellen = document.getElementById('nachbestellenInput').value.trim();
  const minbestellmenge = document.getElementById('minbestellmengeInput').value.trim();
  const lieferant = document.getElementById('lieferantInput').value.trim();
  const bestellmenge = document.getElementById('besttellmengeInput').value.trim();
  const nachbestelltam = document.getElementById('nachbestelltamInput').value.trim();
  const lieferzeit = document.getElementById('lieferzeitInput').value.trim();
  const mitarbeiter = document.getElementById('mitarbeiterInput').value.trim();
  const personalnummer = document.getElementById('personalnummerInput').value.trim();

  // Überprüfen, ob alle erforderlichen Felder ausgefüllt sind
  const requiredFields = [
    pos, artikelnummer, artikelbezeichnung, lager, lagerplatz, lagerbestand,
    warenentnahme, warehinzugefügt, einheit, preisproeinheit, wertlagerbestand,
    mindestmenge, nachbestellen, minbestellmenge, lieferant, bestellmenge,
    nachbestelltam, lieferzeit, mitarbeiter, personalnummer
  ];

  if (requiredFields.some(field => !field)) {
    alert('Bitte füllen Sie alle erforderlichen Felder aus!');
    return;
  }

  // Neue Zeile in die Tabelle einfügen
  const tabelle = document.querySelector('.tg tbody');
  const neueZeile = document.createElement('tr');

  neueZeile.innerHTML = `
    <td class="tg-fymr" contenteditable="true">${tabelle.rows.length + 1}</td>
    <td class="tg-0pky" contenteditable="true">${pos}</td>
    <td class="tg-0pky" contenteditable="true">${artikelnummer}</td>
    <td class="tg-0pky" contenteditable="true">${artikelbezeichnung}</td>
    <td class="tg-0pky" contenteditable="true">${lager}</td>
    <td class="tg-0pky" contenteditable="true">${lagerplatz}</td>
    <td class="tg-0pky" contenteditable="true">${lagerbestand}</td>
    <td class="tg-0pky" contenteditable="true">${warenentnahme}</td>
    <td class="tg-0r18" contenteditable="true">${warehinzugefügt}</td>
    <td class="tg-dxqr" contenteditable="true">${einheit}</td>
    <td class="tg-c3ow" contenteditable="true">${preisproeinheit}</td>
    <td class="tg-0pky" contenteditable="true">${wertlagerbestand}</td>
    <td class="tg-0pky" contenteditable="true">${mindestmenge}</td>
    <td class="tg-zz2x" contenteditable="true">${minbestellmenge}</td>
    <td class="tg-0pky" contenteditable="true">${bestellmenge}</td>
    <td class="tg-0pky" contenteditable="true">${nachbestelltam}</td>
    <td class="tg-0pky" contenteditable="true">${lieferzeit}</td>
    <td class="tg-0pky" contenteditable="true">${mitarbeiter}</td>
    <td class="tg-l6li" contenteditable="true">${personalnummer}</td>
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

  // Bestätigung, dass die Daten gespeichert wurden
  alert('Daten erfolgreich gespeichert und zur Tabelle hinzugefügt!');
}
