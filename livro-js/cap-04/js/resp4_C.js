const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const valor = Number(frm.inValor.value);

    resp2.innerText = "";

    if (valor < 1.00) {
        resp1.innerText = "Valor Insuficiente";
    } else if (valor < 1.75) {
        const troco = valor - 1.00;
        resp1.innerText = `Tempo: 30 minutos`;
        if (troco > 0) {
            resp2.innerText = `Troco R$: ${troco.toFixed(2)}`;
        }
    } else if (valor < 3.00) {
        const troco = valor - 1.75;
        resp1.innerText = `Tempo: 60 minutos`;
        if (troco > 0) {
            resp2.innerText = `Troco R$: ${troco.toFixed(2)}`;
        }
    } else {
        const troco = valor - 3.00;
        resp1.innerText = `Tempo: 120 minutos`;
        if (troco > 0) {
            resp2.innerText = `Troco R$: ${troco.toFixed(2)}`;
        }
    }
});