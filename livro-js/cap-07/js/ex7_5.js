const frm = document.querySelector("form")
const resp = document.querySelector("span")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    // obter o nome informado e retirar espaços em branco no início e final
    const nome = frm.inNome.value.trim()
    // se o nome não (!) possuir espaço alert para inserir nome completo
    if (nome.includes(" ") == false) {
        alert("Informe o nome completo")
        return
    }
    // dividir o nome em itens de vetor, criado a cada ocorrência de espaço
    const nomes = nome.split(" ")
    // vai concatenar letras
    let email = ""
    // obter o n° de itens do vetor partes
    const tam = parent.length - 1
    // percorrer o vetor (exceto o último)
    for (let i = 0; i < tam; i++) {
        // concatenar a letra inicial de cada item
        email += parte[i].charAt(0)
    }
    // concatenar as letras iniciais com a última parte (sobrenome) e empresa
    email += parte[tam] + "@empresa.com.br"
    // exibir email minúsculo
    resp.innerText = email.toLowerCase()
})