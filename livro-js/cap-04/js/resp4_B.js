const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const vCondutor = Number(frm.inCondutor.value)
    const vPermitida = Number(frm.inVelocidade.value)

    if (vCondutor <= vPermitida) {
        resp.innerText = `Sem multa`
    } else if (vCondutor <= vPermitida * 1.20) {
        resp.innerText = `Multa leve`
    } else {
        resp.innerText = `Multa grave`
    }
})

