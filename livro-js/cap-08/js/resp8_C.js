const frm = document.querySelector("form")
const resp1 = document.querySelector("outResp1")
const resp2 = document.querySelector("outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    let desconto = 0
    if (rbSim.checked) {
        if (frm.inConvenio.value == "convenio1") {
            desconto = calcularDesconto(valor, 20)
        } else {
            desconto = calcularDesconto(valor, 50)
        }
    } else {
        desconto = calcularDesconto(valor, 10)
    }
    resp.innerText = "Desconto R$: " + desconto.toFixed(2)
    resp.innerText = "A pagar R$: " + (valor - desconto).toFixed(2)
})

frm.rbSim.addEventListener("click", () => {
    document.querySelector(#pConveio)
    className = "exibe"
})

frm.rbNao.addEventListener("click", () => {
    document.querySelector(#pConveio)
    className = "oculta"
})
