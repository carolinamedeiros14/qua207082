const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const promocao = preco * 2.5
    const PrecoPorProduto = preco / 2

       
    resp1.innerText = `${produto} - Promoção: Leve ${promocao.toFixed(2)}`
    resp2.innerText = `O terceiro produto custa apenas ${PrecoPorProduto.toFixed(2)}`
   
    e.preventDefault()
})