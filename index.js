let sanagich = 0;
let i = 0;
let input = document.querySelector("input");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let p = document.querySelector("p");

let savollar = ["39 - 25 = ?", "89 - 78 = ?", "15 * 4 = ?", "96 / 3 = ?", "100 * 1000 = ?"];
let javoblar = ["14", "11", "60", "32", "100000"];

one.addEventListener("click", (event) => {
    event.preventDefault();

    p.textContent = savollar[0];
});

two.addEventListener("click", (event) => {
    event.preventDefault();

    if (input.value === javoblar[i]) {
        sanagich = sanagich + 1;
    }

    i = i + 1;

    if (i === 5) {
        p.textContent = `Siz ${sanagich} savolga to'g'ri javob berdingiz`;
        input.value = "";
        return;
    }

    input.value = "";

    p.textContent = savollar[i];
});