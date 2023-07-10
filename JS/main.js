let availableDiscountCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

function calculateOffer(e) {
    e.preventDefault();

    let hours = parseInt(document.getElementById("hours").value);
    let optionTypeOffer = parseInt(document.getElementById("type-of-work").value);
    let discountCode = document.getElementById("discount-code").value.toUpperCase();

    let finalPrice = 0;

    switch (optionTypeOffer) {
        case 1:
            // Backend offer type
            finalPrice = 20.5 * hours;
            break;
        case 2:
            // Frontend offer type
            finalPrice = 15.3 * hours;
            break;
        case 3:
            // Project Analysis offer type
            finalPrice = 33.6 * hours;
            break;
    }

    let discountApplied = false;

    if (availableDiscountCodes.includes(discountCode)) {
        finalPrice *= 0.75; // Applica lo sconto del 25%
        discountApplied = true;

        // Rimuovere il codice sconto dall'array dei codici disponibili
        availableDiscountCodes = availableDiscountCodes.filter(code => code !== discountCode);
    }

    finalPrice = finalPrice.toFixed(2);

    document.getElementById("price").innerHTML = "Il prezzo finale è di: " + finalPrice + " €";

    if (!discountApplied) {
        alert("Il codice sconto inserito non è valido");
        document.getElementById("discount-code").classList.add("text-danger");
    } else {
        document.getElementById("discount-code").classList.remove("text-danger");
    }
}
