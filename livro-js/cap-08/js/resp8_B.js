const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value.trim()
    if (nome.includes(" ") == false) {
        alert("Informe o nome completo")
        return
    }
})