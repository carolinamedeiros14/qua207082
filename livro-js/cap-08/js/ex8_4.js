const frm = document.querySelector("form")
const resp = document.querySelector("pre")

//vetor global para armazenar os itens do pedido
const itens = []

//quando o radio button pizza é clicado
frm.rbPizza.addEventListener("click", () => {
    frm.inBebida.className = "oculta"
    frm.inPizza.className = "exibe"
})

//quando o radio button bebida é clicado
frm.rbBebida.addEventListener("click", () => {
    frm.inBebida.className = "exibe"
    frm.inPizza.className = "oculta"
})

//quando o campo detalhes recer foco
frm.inDetalhes.addEventListener("focus", () => {
    //se radio button pizza estiver marcado
    if(frm.rbPizza.checked){
        const pizza = frm.inPizza.value
        //uso do operador ternerário, para indicar o número de sabores
        const num = (pizza == "media") ? 2 : (pizza == "grande") ? 3:4
        //atribuir placeholder e exibir uma dica do preenchimento 
        frm.inDetalhes.placeholder = `Até ${num} sabores`
    } else {
        const bebida = frm.inBebida.value
        const sugestao = (bebida == "refri") ? "Coca-cola, Guaraná, Fanta" :
        (bebida == "suco") ? "Limão, laranja, maracujá" : "Copo ou jarra?"
        frm.inDetalhes.placeholder = sugestao
    }
})

//limpar detalhes quando o campo perder o foco
frm.inDetalhes.addEventListener("blur", () => {
    frm.inDetalhes.placeholder = ""
})

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    let produto = ""
    if(frm.rbPizza.checked){
        //obter o numero do index do item selecionado
        const num = frm.inPizza.selectedIndex
        //obter o texto do item selecionado
        produto = frm.inPizza.options[num].text
    }else{
        //obter o numero do index do item selecionado
        const num = frm.inBebida.selectedIndex
        //obter o texto do item selecionado
        produto = frm.inBebida.options[num].text
    }
    //obter o texto informado no detalhes
    const detalhes = frm.inDetalhes.value
    //adicionar vetor
    itens.push(produto + `(${detalhes})`)
    //exibir os itens do pedido
    resp.innerText = itens.join("\n")
    //limpar o formulário
    frm.reset()
    //disparar click no rbPizza
    frm.rbPizza.dispatchEvent(new Event("click"))
})