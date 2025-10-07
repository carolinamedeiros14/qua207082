const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    if (validarNome(nome) == false) {
        alert("Informe o nome completo")
        return
    }
    const sobrenome = obterSobrenome(nome)
    const vogais = contarVogais(nome)
    resp.innerText = `Senha inicial: ${sobrenome}${vogais}`
})


function validarNome(nome) {
    return nome.match(/ /g) != null
    }

function obterSobrenome(nome) {
    const nomes = nome.split(" ")
    return nomes[nomes.length -1].toLowerCase()
}

function contarVogais(nome) {
    const vogais = nome.match(/[aeiou]/g)
    return vogais.length.toString().padStart(2,"0")
}