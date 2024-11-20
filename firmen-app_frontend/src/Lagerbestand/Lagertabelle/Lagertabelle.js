function speichern() {
    // Alle Eingabewerte aus den Formularfeldern holen
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

    // Berechnung des Lagerbestandswerts (falls noch nicht automatisch berechnet wird)
    const wertLager = parseFloat(preisproeinheit) * parseInt(lagerbestand);

    // Neue Zeile in die Tabelle einfügen
    const tabelle = document.querySelector('.tg tbody');
    const neueZeile = document.createElement('tr');

    // HTML-Inhalt der neuen Zeile
    neueZeile.innerHTML = `
        <td class="tg-fymr" contenteditable="true">${pos}</td>
        <td class="tg-fymr" contenteditable="true">${artikelnummer}</td>
        <td class="tg-fymr" contenteditable="true">${artikelbezeichnung}</td>
        <td class="tg-fymr" contenteditable="true">${lager}</td>
        <td class="tg-fymr" contenteditable="true">${lagerplatz}</td>
        <td class="tg-fymr" contenteditable="true">${lagerbestand}</td>
        <td class="tg-fymr" contenteditable="true">${warenentnahme}</td>
        <td class="tg-fymr" contenteditable="true">${warehinzugefügt}</td>
        <td class="tg-fymr" contenteditable="true">${einheit}</td>
        <td class="tg-fymr" contenteditable="true">${preisproeinheit}</td>
        <td class="tg-fymr" contenteditable="true">${wertLager.toFixed(2)}</td> <!-- Lagerwert berechnet -->
        <td class="tg-fymr" contenteditable="true">${mindestmenge}</td>
        <td class="tg-fymr" contenteditable="true">${nachbestellen}</td>
        <td class="tg-fymr" contenteditable="true">${minbestellmenge}</td>
        <td class="tg-fymr" contenteditable="true">${lieferant}</td>
        <td class="tg-fymr" contenteditable="true">${bestellmenge}</td>
        <td class="tg-fymr" contenteditable="true">${nachbestelltam}</td>
        <td class="tg-fymr" contenteditable="true">${lieferzeit}</td>
        <td class="tg-fymr" contenteditable="true">${mitarbeiter}</td>
        <td class="tg-fymr" contenteditable="true">${personalnummer}</td>
    `;

    // Neue Zeile in die Tabelle einfügen
    tabelle.appendChild(neueZeile);

    // Formular zurücksetzen, damit der Benutzer neue Daten eingeben kann
    document.getElementById('dataForm').reset();
}
