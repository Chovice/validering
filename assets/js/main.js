function validateField(field, minLength, errorMessage) {
    field.classList.remove("error");
    if (field.value.length < minLength) {
        field.classList.add("error");
        return errorMessage;
    }
    return "";
}

function validateEmail(field) {
    field.classList.remove("error");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(field.value)) {
        field.classList.add("error");
        return "Indtast en gyldig e-mailadresse.";
    }
    return "";
}

function validatePostnummer(field) {
    field.classList.remove("error");
    if (!/^[0-9]+$/.test(field.value)) {
        field.classList.add("error");
        return "Postnummer må kun indeholde tal.";
    }
    return "";
}

function validateForm() {
    let errorMessages = [];
    let fornavn = document.getElementById("fornavn");
    let efternavn = document.getElementById("efternavn");
    let adresse = document.getElementById("adresse");
    let postnummer = document.getElementById("postnummer");
    let email = document.getElementById("email");
    
    errorMessages.push(validateField(fornavn, 2, "Fornavn skal være mindst 2 karakterer."));
    errorMessages.push(validateField(efternavn, 2, "Efternavn skal være mindst 2 karakterer."));
    errorMessages.push(validateField(adresse, 5, "Adresse skal være mindst 5 karakterer."));
    errorMessages.push(validatePostnummer(postnummer));
    errorMessages.push(validateEmail(email));
    
    errorMessages = errorMessages.filter(msg => msg !== "");
    
    console.clear();
    console.log("Valideringsresultater:", errorMessages.length ? errorMessages : "Ingen fejl");
    
    document.getElementById("errorMessages").innerHTML = errorMessages.join("<br>");
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("input").forEach(input => {
        input.addEventListener("input", validateForm);
    });
});