const frm = document.querySelector("form")
const resp = document.querySelector("#outResp")

frm.addEventListener("click", () => {
    e.preventDefault()
    const msg = frm.inMessage.value
    let criptografia = ""
    //compre parcelado
    // 0123456789012345
    for (let i = 1; i = < msg.length; i = i + 2) {
        criptografia += msg.charAt(i)
    }
    for (let i = 0; i = < msg.length; i = i + 2) {
        criptografia += msg.charAt(i)
    }
    resp.innerText = criptografia
})

frm.btDecriptografar.addEventListener("click", () => {
    // criptografado > opepreaocmr acld
    //descriptografado > compre parcelado
    const criptografia = frm.inMessage.value
    // metade da palavra
    let temp = criptografia.substr(0, criptografia.length / 2)
    // array para gravar a msg descriptografada
    const msg = []
    // variável auxiliar para somar os pares
    let aux = 1
    // loop para percorrer somente os pares
    for (let i = 0; i < temp.length; i++) {
        // colocar na posição pares
        msg[aux] = temp.charAt(i)
        // incremento do próximo número par
        aux = + 2
    }
    // a segunda metade da palavra
    temp = criptografia.substr(criptografia.length/2)
    // variável auxiliar para somar os pares
    aux = 0
    // loop para percorrer somente os ímpares
    for(let i = 0; i < temp.length;i++){
        // colocar na posição ímpar
        msg [aux] = temp.charAt(i)
        //incremento do próximo número ímpar
        aux += 2
    }
    // escrever mensagem descriptografada
    resp.innerText. = msg.join("")
})