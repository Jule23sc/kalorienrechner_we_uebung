"use strict";
//input sichern
const form = document.querySelector("#kalorienrechner");
//output festlegen
const outputGrundUmsatzKcal = document.querySelector("#grundumsatz_kcal");
const outputGrundUmsatzKj = document.querySelector("#grundumsatz_kj");
const outputGesamtUmsatzKcal = document.querySelector("#gesamtumsatz_kcal");
const outputGesamtUmsatzKj = document.querySelector("#gesamtumsatz_kj");

//function
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const size = document.querySelector("#size").value;
    const age = document.querySelector("#age").value;
    const weight = document.querySelector("#weight").value;
    const activity = document.querySelector("#activitymenu").value;

    const radioFemale = document.querySelector("#female").checked;
    const radioMale = document.querySelector("#male").checked;

    let grundUmsatzKcal
    if (radioFemale) {
        grundUmsatzKcal = 655.1 + (9.6*weight) + (1.8*size) - (4.7*age)
    }   else {
            grundUmsatzKcal = 66.47 + (13.7*weight) + (5*size) - (6.8*age)
        }

    const gesamtUmsatzKcal = grundUmsatzKcal*activity;
    
    const grundUmsatzKj = grundUmsatzKcal * 4.184;
    const gesamtUmsatzKj = gesamtUmsatzKcal * 4.184;

    outputGrundUmsatzKcal.textContent = grundUmsatzKcal.toFixed(2);
    outputGesamtUmsatzKcal.textContent = gesamtUmsatzKcal.toFixed(2);
    outputGrundUmsatzKj.textContent = grundUmsatzKj.toFixed(2);
    outputGesamtUmsatzKj.textContent = gesamtUmsatzKj.toFixed(2);
})