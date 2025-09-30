const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const dataInfracao = frm.inDataInfracao.value.split("-")
    const valorMulta = Number(frm.inValorMulta.value)
    const dataDesconto = new Date ()
    dataDesconto.setFullYear(dataInfracao[0])
    dataDesconto.setMonth(dataInfracao[1]+1)
    dataDesconto.setDate(dataInfracao[2])
    dataDesconto = dataDesconto + (1000*60*60*24*90)
    resp1.innerText = "Data limite para o pagamento com desconto: "
    resp1.innerText += dataDesconto.getDate().padStar("0",2)
    resp1.innerText += (dataDesconto.getMonth()+1).padStar("0",2)
})