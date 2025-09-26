const frm = document.querySelector("form")
// constante multa por atraso
const TAXA_MULTA = 2/100
// constante juros por dia de atraso
const TAXA_JUROS = 0.33/100

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    // obter a data de vencimento
    const dtVencimento = frm.inVenc.value
    // obter o valor da conta
    const valor = Number(frm.inValor.value)
    // criar variável da data atual
    const hoje = new Date()
    // criar objeto da data de vencimento tipo Date()
    const vencimento = new Date()
    // preencher o objeto data de vencimento com os valores da data
    const parte = dtVencimento.split("-")
    vencimento.setDate(Number(parte[2]))
    vencimento.setMonth(Number(parte[1]) -1)
    vencimento.setFullYear(Number(parte[0]))
    // calcular a diferença entre as datas (em milissegundos)
    const atraso = hoje - vencimento
    // inicializar multa e juros com 0
    let multa = 0
    let juros = 0
    // se conta estiver em atraso fazer os cálculos necessários
    if (atraso > 0) {
        // converter ms do atraso em dias
        // 24 * 60m * 60s * 1000ms = 86400000
        const diasAtraso = Math.floor(atraso / 86400000)
        // calcular multa
        multa = valor * TAXA_MULTA
        // calcular juros
        juros = valor * TAXA_JUROS * diasAtraso
    }
    // calcular valor total
    const total = valor + multa + juros
    // exibir valores
    frm.outMulta.value = multa.toFixed(2)
    frm.outJuros.value = juros.toFixed(2)
    frm.outTotal.value = total.toFixed(2)
})