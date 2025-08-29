// cria a referência ao formulário e aos elementos h3 e h4
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit",(e)=>{
    const titulo = frm.inTitulo.value // obtém conteúdo dos campos
    const duracao = frm.inDuracao.value // obtém conteúdo dos campos

    const horas = Math.floor(duracao / 60)
    const minutos = duracao % 60

    resp1.innerText = titulo
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`

    e.preventDefault() // evita envio do form
})
