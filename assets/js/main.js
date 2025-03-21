function validateForm(event) {
    event.preventDefault();
    let isValid = true;
    let errorMessages = [];

    let fornavn = document.getElementById("fornavn");
    let efternavn = document.getElementById("efternavn");
    let adresse = document.getElementById("adresse");
    let postnummer = document.getElementById("postnummer");
    let email = document.getElementById("email");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    fornavn.classList.remove("error");
    efternavn.classList.remove("error");
    adresse.classList.remove("error");
    postnummer.classList.remove("error");
    email.classList.remove("error");

    if (fornavn.value.length < 2) {
        errorMessages.push("Fornavn skal være mindst 2 karakterer.");
        fornavn.classList.add("error");
        isValid = false;
    }
    if (efternavn.value.length < 2) {
        errorMessages.push("Efternavn skal være mindst 2 karakterer.");
        efternavn.classList.add("error");
        isValid = false;
    }
    if (adresse.value.length < 5) {
        errorMessages.push("Adresse skal være mindst 5 karakterer.");
        adresse.classList.add("error");
        isValid = false;
    }
    if (!/^[0-9]+$/.test(postnummer.value)) {
        errorMessages.push("Postnummer må kun indeholde tal.");
        postnummer.classList.add("error");
        isValid = false;
    }
    if (!emailPattern.test(email.value)) {
        errorMessages.push("Indtast en gyldig e-mailadresse.");
        email.classList.add("error");
        isValid = false;
    }

    console.clear();
    console.log("Valideringsresultater:", errorMessages.length ? errorMessages : "Ingen fejl");

    document.getElementById("errorMessages").innerHTML = errorMessages.join("<br>");

    if (isValid) {
        document.getElementById("formContainer").innerHTML = "<h2>Tak for informationen</h2>";
    }
}