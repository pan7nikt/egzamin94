var zam_id = 0;

function zaznacz() {
    var currentRow = 0;
    for (i = 0; i < 4; i++) {
        currentRow = document.getElementById(i);
        if (currentRow.innerHTML == 0) {
            currentRow.style.backgroundColor = "red";
        } else if (currentRow.innerHTML < 5) {
            currentRow.style.backgroundColor = "yellow";
        } else {
            currentRow.style.backgroundColor = "honeydew";
        }
    }
}

zaznacz();

function aktualizuj(pole) {
    var input = prompt("Podaj nową ilość:");
    if (!isNaN(input) && input != null) {
        document.getElementById(pole).innerHTML = input;
    } else {
        alert("Podaj liczbę");
    }
    zaznacz();
}

function zamow(id) {
    zam_id++;
    alert("Zamowienie nr: " + zam_id + " Produkt: " + document.getElementById(id).innerHTML)
}