document.addEventListener('DOMContentLoaded', function () {
  // Formularelemente
  const dataForm = document.getElementById('dataForm');
  const positionInput = document.getElementById('positionInput');
  const artikelnummerInput = document.getElementById('artikelnummerInput');
  const artikelbezeichnungInput = document.getElementById('artikelbezeichnungInput');
  const lagerInput = document.getElementById('lagerInput');
  const lagerplatzInput = document.getElementById('lagerplatzInput');
  const lagerbestandInput = document.getElementById('lagerbestandInput');
  const warenEntnahmeInput = document.getElementById('warenEntnahmeInput');
  const wareHinzugefuegtInput = document.getElementById('wareHinzugefuegtInput');
  const einheitInput = document.getElementById('einheitInput');
  const preisProEinheitInput = document.getElementById('preisProEinheitInput');
  const wertLagerbestandInput = document.getElementById('wertLagerbestandInput');
  const mindestmengeInput = document.getElementById('mindestmengeInput');
  const nachbestellenInput = document.getElementById('nachbestellenInput');
  const minimaleBestellmengeInput = document.getElementById('minimaleBestellmengeInput');
  const lieferantInput = document.getElementById('lieferantInput');
  const bestellmengeInput = document.getElementById('bestellmengeInput');
  const nachbestelltAmInput = document.getElementById('nachbestelltAmInput');
  const lieferzeitInput = document.getElementById('lieferzeitInput');
  const mitarbeiterInput = document.getElementById('mitarbeiterInput');
  const personalnummerInput = document.getElementById('personalnummerInput');

  // Funktion zur Berechnung des Lagerwerts
  function berechneLagerwert() {
    const lagerbestand = parseFloat(lagerbestandInput.value);
    const preisProEinheit = parseFloat(preisProEinheitInput.value);
    if (!isNaN(lagerbestand) && !isNaN(preisProEinheit)) {
      const wert = lagerbestand * preisProEinheit;
      wertLagerbestandInput.value = wert.toFixed(2); // Rundet auf 2 Dezimalstellen
    }
  }

  // Event-Listener zur Berechnung des Lagerwerts bei Eingabe
  lagerbestandInput.addEventListener('input', berechneLagerwert);
  preisProEinheitInput.addEventListener('input', berechneLagerwert);

  // Event-Listener für den Hinzufügen-Button
  const addButton = document.getElementById('addButton');
  addButton.addEventListener('click', function (event) {
    event.preventDefault(); // Verhindert das Absenden des Formulars

    // Berechnung des Lagerwerts, falls noch nicht passiert
    berechneLagerwert();

    // Bestätigungsmeldung für das Hinzufügen
    alert('Artikel wurde hinzugefügt!');

    // Ausgabe der Formulardaten in der Konsole
    console.log('Artikel hinzugefügt:', {
      Position: positionInput.value,
      Artikelnummer: artikelnummerInput.value,
      Artikelbezeichnung: artikelbezeichnungInput.value,
      Lager: lagerInput.value,
      Lagerplatz: lagerplatzInput.value,
      Lagerbestand: lagerbestandInput.value,
      WarenEntnahme: warenEntnahmeInput.value,
      WareHinzugefuegt: wareHinzugefuegtInput.value,
      Einheit: einheitInput.value,
      PreisProEinheit: preisProEinheitInput.value,
      WertLagerbestand: wertLagerbestandInput.value,
      Mindestmenge: mindestmengeInput.value,
      Nachbestellen: nachbestellenInput.checked,
      MinimaleBestellmenge: minimaleBestellmengeInput.value,
      Lieferant: lieferantInput.value,
      Bestellmenge: bestellmengeInput.value,
      NachbestelltAm: nachbestelltAmInput.value,
      Lieferzeit: lieferzeitInput.value,
      Mitarbeiter: mitarbeiterInput.value,
      Personalnummer: personalnummerInput.value,
    });

    // Formular zurücksetzen, aber den Wert für Lagerwert beibehalten
    dataForm.reset();
    wertLagerbestandInput.value = lagerbestandInput.value;
    preisProEinheitInput.value = preisProEinheitInput.value; // Optional: Wert für Lagerbestand zurücksetzen
  });

  // Event-Listener für den Speichern-Button
  const saveButton = document.getElementById('saveButton');
  saveButton.addEventListener('click', function (event) {
    event.preventDefault(); // Verhindert das Absenden des Formulars

    // Bestätigung der Speicherung
    alert('Daten gespeichert!');

    // Ausgabe der Formulardaten in der Konsole
    const formData = {
      Position: positionInput.value,
      Artikelnummer: artikelnummerInput.value,
      Artikelbezeichnung: artikelbezeichnungInput.value,
      Lager: lagerInput.value,
      Lagerplatz: lagerplatzInput.value,
      Lagerbestand: lagerbestandInput.value,
      WarenEntnahme: warenEntnahmeInput.value,
      WareHinzugefuegt: wareHinzugefuegtInput.value,
      Einheit: einheitInput.value,
      PreisProEinheit: preisProEinheitInput.value,
      WertLagerbestand: wertLagerbestandInput.value,
      Mindestmenge: mindestmengeInput.value,
      Nachbestellen: nachbestellenInput.checked,
      MinimaleBestellmenge: minimaleBestellmengeInput.value,
      Lieferant: lieferantInput.value,
      Bestellmenge: bestellmengeInput.value,
      NachbestelltAm: nachbestelltAmInput.value,
      Lieferzeit: lieferzeitInput.value,
      Mitarbeiter: mitarbeiterInput.value,
      Personalnummer: personalnummerInput.value,
    };

    console.log('Formulardaten gespeichert:', formData);

    // Weiterleitung nach Bestätigung des Alerts
    alert('Du wirst nun zur Lagerspeicher-Seite weitergeleitet.');
    window.location.href = './Lagertabelle/Lagerspeicher.html'; // Angepasster Pfad für Weiterleitung
  });

  // Event-Listener für den Zurück-Button
  const backButton = document.getElementById('backButton');
  backButton.addEventListener('click', function (event) {
    event.preventDefault(); // Verhindert das standardmäßige Verhalten (z. B. ein Formularabsenden)
    alert('Du wirst zur vorherigen Seite zurückkehren!'); // Zurück-Nachricht
    window.history.back(); // Geht zur vorherigen Seite
  });
});
