const frm = document.querySelector("form")
const resp1 = document.querySelector("outResp1")
const resp2 = document.querySelector("outResp2")
const resp3 = document.querySelector("outResp3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    //obter conteúdo do formulário
    const modelo = frm.inModelo.value
    const ano = Number(frm.inAno.value)
    const preco = Number(frm.inPreco.value)
    //chamar a function classificarVeiculo e salvar na variável classificacao
    const classificacao = classificarVeiculo(ano)
    //chamar a function calcularEntrada e salvar na variável entrada
    const entrada = calcularEntrada(preco, classificacao)
    const parcela = (preco - entrada) / 10
    //exibir resposta
    resp1.innerText = modelo + " - " + classificacao
    resp2.innerText = `Entrada R$: ${entrada.toFixed(2)}`
    resp3.innerText = `Parcela R$: ${parcela.toFixed(2)}`
})
//desenvolver a function classificarVeiculo
function classificarVeiculo(ano) {
    const anoAtual = new Date().getFullYear()
    if (ano == anoAtual) {
        return "Novo"
    } else if (ano >= Number(anoAtual) - 2) {
        return "Seminovo"
    } else {
        return "Usado"
    }
}
//desenvolver a function calcularEntrada
const calcularEntrada = (preco, classificacao) => {
    if (classificacao == "Novo") {
        return preco * 0.5
    } else {
        return preco * 0.3
    }
}