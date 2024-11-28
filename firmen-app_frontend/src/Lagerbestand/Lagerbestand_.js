document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("lagerForm");
  
    // Funktion zum Speichern der Daten
    function speichern() {
      const formData = new FormData(form);
      const formValues = {};
  
      // Formulardaten in ein Objekt umwandeln
      formData.forEach((value, key) => {
        formValues[key] = value;
      });
  
      // Daten im LocalStorage speichern
      localStorage.setItem("lagerDaten", JSON.stringify(formValues));
  
      alert("Daten erfolgreich gespeichert!");
    }
    window.location.href = "Lagerspeicher.html";
    // Funktion zum Laden der gespeicherten Date
    // Funktion zum Löschen der Daten aus LocalStorage
    function löschen() {
      localStorage.removeItem("lagerDaten");
      alert("Daten erfolgreich gelöscht!");
      // Formular leeren
      form.reset();
    }
    
    // Funktion zum Logout
    function logout() {
      // Hier könnte ein Redirect zu einer Logout-Seite erfolgen
      alert("Sie wurden abgemeldet!");
      // Redirect zu einer Login-Seite oder einer anderen Seite
      window.location.href = "Loginseite.html"; // Beispiel: Weiterleitung zu login.html
    }
  
    // EventListener für die Buttons
    const speichernButton = document.querySelector("button[onclick='speichern()']");
    const logoutButton = document.querySelector("button[onclick='logout()']");
    const löschenButton = document.querySelector("button[onclick='löschen()']");
  
    speichernButton.addEventListener("click", speichern);
    logoutButton.addEventListener("click", logout);
    löschenButton.addEventListener("click", löschen);
  });
  