const frm = document.querySelector("form")
const resp = document.querySelector("#outResp")

frm.btCriptografar.addEventListener("click", () => {
    const msg = frm.inMessage.value
    let pares = ""
    let impares = ""

    for (let i = 0; i < msg.length; i++) {
        if (i % 2 == 0) {
            pares += msg.charAt(i)
        } else {
            impares += msg.charAt(i)
        }
    }
    resp.innerText = pares + impares
})

frm.btDecriptografar.addEventListener("click", () => {
    const msg = frm.inMessage.value

    let original = ""
    const tam = msg.length
    const metade = Math.ceil(tam / 2)
    const impares = msg.substring(metade)

    for (let i = 0; i < metade; i++) {
        original += msg.charAt(i)

        if (i < impares.length) {
            original += impares.charAt(i)
        }
    }
    resp.innerText = original
})