const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

function retornarTracos(nome) {
    let tracos = ""
    for (let i = 0; i < nome.length; i++) {
        if (nome.charAt(i) == " ") {
            tracos += " "
        } else {
            tracos += "-"
        }
    }
    return tracos;
}

function categorizarAluno(idade) {
    if (idade <= 12) {
        return "Infantil"
    } else if (idade <= 18) {
        return "Juvenil"
    } else {
        return "Adulto"
    }
}

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)
    const tracos = retornarTracos(nome)
    const categoria = categorizarAluno(idade)
    
    resp1.innerText = nome + "\n" + tracos
    resp2.innerText = `Categoria: ${categoria}`
})