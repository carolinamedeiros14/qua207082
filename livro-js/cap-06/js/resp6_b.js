const frm = document.querySelector("form")
const resp1 = document.querySelector("outResp1")
const resp2 = document.querySelector("outResp2")

const numeros = []
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const num = Number(frm.inNumero.value)
    if (numeros.includes(num) == true) {
        alert("Número repetido")
        return
    }
    numeros.push(num)
    resp1.innerText = "Numeros: " + numeros.join(", ")
    frm.inNumero.value = ""
    frm.inNumero.focus()
})

frm.btVerificar.addEventListener("click", () => {
    let ordem = true
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i - 1] > numeros[i]) {
            ordem = false
            break
        }
    }
    if (ordem) {
        resp2.innerText = "Os números estão em ordem crescente"
    } else {
        resp2.innerText = "Os números NÃO estão em ordem crescente"
    }

})