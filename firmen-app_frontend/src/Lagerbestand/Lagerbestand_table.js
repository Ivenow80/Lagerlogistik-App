function speichern() {
  // Eingabefelder auslesen
  const form = document.getElementById('dataForm');
  const inputs = form.querySelectorAll('input');

  // Daten als Objekt speichern
  const lagerDaten = JSON.parse(localStorage.getItem('lagerDaten')) || [];
  const neuerEintrag = {};

  inputs.forEach(input => {
    neuerEintrag[input.id.replace('Input', '')] = input.value.trim();
  });

  // Überprüfen, ob alle erforderlichen Felder ausgefüllt sind
  const requiredFields = Object.values(neuerEintrag);
  if (requiredFields.some(field => !field)) {
    alert('Bitte füllen Sie alle erforderlichen Felder aus!');
    return;
  }

  // Speichern in localStorage
  lagerDaten.push(neuerEintrag);
  localStorage.setItem('lagerDaten', JSON.stringify(lagerDaten));

  // Neue Zeile in die Tabelle einfügen
  const tabelle = document.querySelector('.tg tbody');
  const neueZeile = document.createElement('tr');

  neueZeile.innerHTML = `
    <td class="tg-fymr" contenteditable="true">${tabelle.rows.length + 1}</td>
    <td class="tg-0pky" contenteditable="true">${neuerEintrag.pos}</td>
    <td class="tg-0pky" contenteditable="true">${neuerEintrag.artikelnummer}</td>
    <td class="tg-0pky" contenteditable="true">${neuerEintrag.artikelbezeichnung}</td>
    <td class="tg-0pky" contenteditable="true">${neuerEintrag.lager}</td>
    <td class="tg-0pky" contenteditable="true">${neuerEintrag.lagerplatz}</td>
    <td class="tg-0pky" contenteditable="true">${neuerEintrag.lagerbestand}</td>
    <td class="tg-0pky" contenteditable="true">${neuerEintrag.warenentnahme}</td>
    <td class="tg-0r18" contenteditable="true">${neuerEintrag.warehinzugefügt}</td>
    <td class="tg-dxqr" contenteditable="true">${neuerEintrag.einheit}</td>
    <td class="tg-c3ow" contenteditable="true">${neuerEintrag.preisproeinheit}</td>
    <td class="tg-0pky" contenteditable="true">${neuerEintrag.wertlagerbestand}</td>
    <td class="tg-0pky" contenteditable="true">${neuerEintrag.mindestmenge}</td>
    <td class="tg-zz2x" contenteditable="true">${neuerEintrag.minbestellmenge}</td>
    <td class="tg-0pky" contenteditable="true">${neuerEintrag.bestellmenge}</td>
    <td class="tg-0pky" contenteditable="true">${neuerEintrag.nachbestelltam}</td>
    <td class="tg-0pky" contenteditable="true">${neuerEintrag.lieferzeit}</td>
    
