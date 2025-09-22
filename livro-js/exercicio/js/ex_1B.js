const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')

frm.addEventListener("submit", (e) => {
    const valor15min = frm.inValor.value
    const tempo = Number(frm.inTempo.value)

    const periodo = Math.ceil(tempo/15)
    const total = periodo * valor15min

       
    resp1.innerText = `Valor a pagar ${total.toFixed(2)}`
   
    e.preventDefault()
})