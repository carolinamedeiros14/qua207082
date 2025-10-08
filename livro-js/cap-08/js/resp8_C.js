const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const valor = Number(frm.inValor.value)
    let desconto = 0
    if(rbSim.checked){        
        if(frm.inConvenio.value == "amigo"){
            desconto = calcularDesconto(valor, 20)
        }else{
            desconto = calcularDesconto(valor, 50)
        }
    }else{
        desconto = calcularDesconto(valor, 10)
    }
    resp1.innerText = "Desconto R$: "+desconto.toFixed(2)
    resp2.innerText = "A pagar R$: "+(valor-desconto).toFixed(2)
})

frm.rbSim.addEventListener("click",() => {
    document.querySelector("#pConvenio").className = "exibe"
})

frm.rbNao.addEventListener("click",() => {
    document.querySelector("#pConvenio").className = "oculta"
})

function calcularDesconto(valor, taxa){
    return valor * (taxa/100)
}