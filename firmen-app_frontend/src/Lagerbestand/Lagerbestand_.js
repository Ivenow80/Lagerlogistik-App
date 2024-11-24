// Funktion zum Hinzufügen eines neuen dynamischen Eingabefeldes
function hinzufuegen() {
    const container = document.getElementById("inputContainer");

    // Neues Eingabefeld erstellen
    const neueEingabe = document.createElement("div");
    neueEingabe.classList.add("entry");

    neueEingabe.innerHTML = `
        <label>Feldname:</label>
        <input type="text" class="labelInput" placeholder="Feldname eingeben"><br>

        <label>Wert:</label>
        <input type="text" class="valueInput" placeholder="Wert eingeben"><br>
    `;

    // Eingabefeld in den Container einfügen
    container.appendChild(neueEingabe);
}

// Funktion zum Speichern der Formulardaten
function speichern() {
    console.log("Speichern-Funktion wird aufgerufen.");

    // Speichern der statischen Formulardaten
    const formData = {
        position: document.getElementById("posInput").value,
        artikelnummer: document.getElementById("artikelnummerInput").value,
        artikelbezeichnung: document.getElementById("artikelbezeichnugInput").value,
        lager: document.getElementById("lagerInput").value,
        lagerplatz: document.getElementById("lagerplatzInput").value,
        lagerbestand: document.getElementById("lagerbestandInput").value,
        warenentnahme: document.getElementById("warenentnahmeInput").value,
        warehinzugefügt: document.getElementById("warehinzugefügtInput").value,
        einheit: document.getElementById("einheitInput").value,
        preisproeinheit: document.getElementById("preisproeinheitInput").value,
        mindestmenge: document.getElementById("mindestmengeInput").value,
        nachbestellen: document.getElementById("nachbestellenInput").checked,
        minbestellmenge: document.getElementById("minbestellmengeInput").value,
        lieferant: document.getElementById("lieferantInput").value,
        besttellmenge: document.getElementById("besttellmengeInput").value,
        nachbestelltam: document.getElementById("nachbestelltamInput").value,
        lieferzeit: document.getElementById("lieferzeitInput").value,
        mitarbeiter: document.getElementById("mitarbeiterInput").value,
        personalnummer: document.getElementById("personalnummerInput").value
    };

    console.log(formData);  // Überprüfe die Formulardaten

    // Speichern der dynamischen Felder
    const entries = document.querySelectorAll(".entry");
    const savedData = [];

    entries.forEach((entry) => {
        const label = entry.querySelector(".labelInput").value || "Unbenanntes Feld";
        const value = entry.querySelector(".valueInput").value;
        savedData.push({ label, value });
    });

    console.log(savedData);  // Überprüfe die gespeicherten dynamischen Felder

    // Zusammenführen der statischen und dynamischen Daten
    const allData = { ...formData, dynamischeFelder: savedData };

    // Speichern der gesammelten Daten im Local Storage
    localStorage.setItem('lagerdaten', JSON.stringify(allData));

    // Bestätigung anzeigen
    alert("Daten erfolgreich gespeichert!");

    // Weiterleitung zur Lagertabelle nach Bestätigung des Alerts
    window.location.href = "./Lagertabelle/Lagertabelle.html"; // Hier den Pfad zur Lagertabelle anpassen
}

// Logout Funktion
function logout() {
    alert("Logout-Funktion aufgerufen.");

    // Weiterleitung zur Login-Seite nach Bestätigung des Alerts
    window.location.href = "./Loginseite_Lager/Loginseite_Lager.html"; // Hier den Pfad zur Loginseite anpassen
}
