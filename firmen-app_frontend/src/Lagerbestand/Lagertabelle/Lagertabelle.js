// Funktion für den Logout-Button
document.getElementById("logoutButton").addEventListener("click", function () {
  alert("Sie haben sich erfolgreich ausgeloggt.");
  window.location.href = "../Loginseite_Lager/Loginseite_Lager.html"; // Weiterleitung zur Loginseite
});

// Funktion zum Anwenden der Farbauswahl
document.getElementById("applyColorsButton").addEventListener("click", function () {
  // Hole die ausgewählten Farben
  const backgroundColor = document.getElementById("backgroundColorPicker").value;
  const textColor = document.getElementById("textColorPicker").value;

  // Wende die Farben auf die Tabelle an
  const table = document.querySelector(".lagerbestand table");
  table.style.backgroundColor = backgroundColor;
  table.style.color = textColor;

  // Optional: Informiere den Nutzer über die Farbänderung
  alert("Farben wurden angewendet!");
});

// Funktion für den Zurück-Button
document.getElementById("zurueckButton").addEventListener("click", function () {
  window.history.back(); // Gehe zur vorherigen Seite zurück
});

// Funktion für den Speichern-Button
document.getElementById("speichernButton").addEventListener("click", function () {
  // Überprüfen, ob das Formular valide ist
  const form = document.getElementById("dataForm");
  if (!form.checkValidity()) {
    alert("Bitte füllen Sie alle erforderlichen Felder aus!");
    return;
  }

  // Holt alle Daten aus dem Formular
  const formData = new FormData(form);

  // Extrahiere die Formulardaten
  let formValues = {};
  formData.forEach((value, key) => {
    formValues[key] = value;
  });

  // Berechnung des Lagerbestandswerts (falls noch nicht automatisch berechnet wird)
  const wertLager =
    parseFloat(formValues.preisproeinheit) *
    parseInt(formValues.lagerbestand);

  // Füge die Formulardaten als neue Zeile in die Tabelle ein
  const table = document.querySelector(".tg tbody");
  const newRow = document.createElement("tr");

  // HTML-Inhalt der neuen Zeile
  newRow.innerHTML = `
    <td class="tg-fymr" contenteditable="true">${formValues.posInput}</td>
    <td class="tg-fymr" contenteditable="true">${formValues.artikelnummerInput}</td>
    <td class="tg-fymr" contenteditable="true">${formValues.artikelbezeichnugInput}</td>
    <td class="tg-fymr" contenteditable="true">${formValues.lagerInput}</td>
    <td class="tg-fymr" contenteditable="true">${formValues.lagerplatzInput}</td>
    <td class="tg-fymr" contenteditable="true">${formValues.lagerbestandInput}</td>
    <td class="tg-fymr" contenteditable="true">${formValues.warenentnahmeInput}</td>
    <td class="tg-fymr" contenteditable="true">${formValues.warehinzugefügtInput}</td>
    <td class="tg-fymr" contenteditable="true">${formValues.einheitInput}</td>
    <td class="tg-fymr" contenteditable="true">${formValues.preisproeinheitInput}</td>
    <td class="tg-fymr" contenteditable="true">${wertLager.toFixed(2)}</td> <!-- Lagerwert berechnet -->
    <td class="tg-fymr" contenteditable="true">${formValues.mindestmengeInput}</td>
    <td class="tg-fymr" contenteditable="true">${formValues.nachbestellenInput}</td>
    <td class="tg-fymr" contenteditable="true">${formValues.minbestellmengeInput}</td>
    <td class="tg-fymr" contenteditable="true">${formValues.lieferantInput}</td>
    <td class="tg-fymr" contenteditable="true">${formValues.besttellmengeInput}</td>
    <td class="tg-fymr" contenteditable="true">${formValues.nachbestelltamInput}</td>
    <td class="tg-fymr" contenteditable="true">${formValues.lieferzeitInput}</td>
    <td class="tg-fymr" contenteditable="true">${formValues.mitarbeiterInput}</td>
    <td class="tg-fymr" contenteditable="true">${formValues.personalnummerInput}</td>
  `;

  // Neue Zeile in die Tabelle einfügen
  table.appendChild(newRow);

  // Lokale Speicherung der Daten (optional)
  const savedData = localStorage.getItem("tableData")
    ? JSON.parse(localStorage.getItem("tableData"))
    : [];
  savedData.push(formValues);
  localStorage.setItem("tableData", JSON.stringify(savedData));

  // Formular zurücksetzen
  form.reset();

  // Bestätigung, dass die Daten gespeichert wurden
  if (
    confirm(
      "Die Daten wurden erfolgreich gespeichert! Möchten Sie die Lagertabelle ansehen?"
    )
  ) {
    window.location.href = "./Lagerspeicher.html";
  }
});

// Laden der gespeicherten Daten beim Laden der Seite
window.addEventListener("load", function () {
  const savedData = localStorage.getItem("tableData")
    ? JSON.parse(localStorage.getItem("tableData"))
    : [];

  const table = document.querySelector(".tg tbody");
  savedData.forEach((data) => {
    const newRow = document.createElement("tr");
    Object.values(data).forEach((value) => {
      const td = document.createElement("td");
      td.textContent = value;
      td.contentEditable = "true"; // Macht die Zellen bearbeitbar
      newRow.appendChild(td);
    });
    table.appendChild(newRow);
  });
});
