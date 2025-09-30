const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const msg = frm.inMensagem.value
    let criptografia = ""
    // compre parcelado
    // 0123456789012345
    for(let i = 1; i < msg.length; i = i+2){
        criptografia += msg.charAt(i)
    }
    for(let i = 0; i < msg.length; i = i+2){
        criptografia += msg.charAt(i)
    }
    resp.innerText = criptografia
})

frm.btDescriptografar.addEventListener("click",()=>{
    // criptografado    -> opepreaocmr acld
    // descriptografado -> compre parcelado
    const criptografia = frm.inMensagem.value
    // array para gravar a msg descriptografada
    const msg = []
    // metade da palavra
    let temp = criptografia.substr(0,criptografia.length/2)
    // variável auxiliar para somar os pares
    let aux = 1
    // loop para percorrer somente os pares
    for(let i = 0; i < temp.length;i++){
        // colocar na posição pares
        msg[aux] = temp.charAt(i)
        // incremento do próximo numero par
        aux += 2
    }
    // a segunda metade da palavra
    temp = criptografia.substr(criptografia.length/2)
    // variável auxiliar para somar os impares
    aux = 0
    // loop para percorrer somente os impares
    for(let i = 0; i < temp.length;i++){
        // colocar na posição impar
        msg[aux] = temp.charAt(i)
        // incremento do próximo numero impar
        aux += 2
    }
    // escrever mensagemdescriptografada
    resp.innerText = msg.join("")
})