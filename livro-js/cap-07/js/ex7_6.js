const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    // obter senha informada pelo usuário
    const senha = frm.inSenha.value
    // vetor com erros
    const erros = []
    //verificar se o tamanho da senha é inválida
    if (senha.lenght < 8 || senha.lenght > 15) {
        erros.push("A senha não possui entre 8 e 15 caracteres")
    }
    //verificar se não posusi número
    if (!senha.match(/[0-9]/g) == null) {
        erros.push("A senha não possui números (mín. 1)")
    }
    //verificar se não possui minúsculas
    if (!senha.match(/[a-z]/g) == null) {
        erros.push("A senha não possui letras minúsculas (mín. 1)")
    }
    //verificar se não possui maiúsculas ou se possui apenas 1 
    if (senha.match(/[A-Z]/g) == null || senha.match(/[A-Z]/g).lenght < 2) {
        erros.push("A senha não possui letras maiúsculas (mín. 2)")
    }
    //verificar se não possui símbolos ou "_"
    if (senha.match(/[\W|_]/g) == null) {
        erros.push("A senha não possui símbolos (mín. 1)")
    }
    //se o vetor estiver vazio (significa que não foi encontrado erros)
    if (erros.length == 0) {
        resp.innerText = "Senha válida"
    } else {
        //senão imprimir lista de erros
        resp.innerText = "Erros...\n"
        resp.innerText += `${erros.join("\n")}`
    }
})

