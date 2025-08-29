const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMedicamento.value
    const preco = Number(frm.inPreco.value)
    
    const desconto = preco * 2
    const valorPromocional = Math.floor(desconto)
       
    resp1.innerText = `Promoção de ${medicamento}`
    resp2.innerText = `Leve 2 por apenas R$: ${valorPromocional.toFixed(2)}`
    
    e.preventDefault()
})