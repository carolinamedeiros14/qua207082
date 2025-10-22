const frm = document.querySelector("form")
const tbody = document.querySelector("tbody")
let lsPaciente = []
let filtro = localStorage.getItem("filtro") 
filtro = filtro == null ? "" : filtro
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const status = frm.inStatus.value
    const local = frm.inLocal.value
    const inicioPrevisto = frm.inInicioPrevisto.value
    const index = frm.inIndex.value
    // incluir ou atualizar
    index == "" ? lsPaciente.push({nome,status,local,inicioPrevisto}) : lsPaciente[index] = {nome,status,local,inicioPrevisto}
    atualizarTabela()
})

function prepararEdicao(index){
    frm.inNome.value = lsPaciente[index].nome
    frm.inStatus.value = lsPaciente[index].status
    frm.inLocal.value = lsPaciente[index].local
    frm.inInicioPrevisto.value = lsPaciente[index].inicioPrevisto
    frm.inIndex.value = index
    frm.btApagar.disabled = false
}

frm.btApagar.addEventListener("click", () => {
    const index = frm.inIndex.value
    if(index == ""){
        alert("Necessário selecionar 1 pacinte.")
        return
    }
    if(confirm("Deseja realmente apagar esse pacinte?") == false){
        return
    }
    lsPaciente.splice(index,1)
    atualizarTabela() 
    
})

const cores = {
    "Pré - Operatório":"bg-warning-subtle",
    "Transferído":"bg-primary-subtle",
    "Em Recuperação":"bg-success-subtle"
}

function atualizarTabela() {    
    limpar()
    localStorage.setItem("lsPaciente",JSON.stringify(lsPaciente))
    tbody.innerHTML = ""
    let cont = 0
    for(i of lsPaciente){
        if(filtro == "" || filtro.includes(i.status)){
            tbody.innerHTML += 
            `<tr onclick="prepararEdicao(${cont})" >
                <td>${i.nome}</td>
                <td class="${cores[i.status]}">${i.status} (${i.local}) </td>
                <td>${i.inicioPrevisto}</td>
            </tr>`
        }
        cont++
    }    
}

function limpar(){
    frm.inNome.value = ""
    frm.inStatus.value = ""
    frm.inIndex.value = ""
    frm.inLocal.value = ""
    frm.inInicioPrevisto.value = ""
    frm.btApagar.disabled = true
}

if(localStorage.getItem("lsPaciente") != null){
    lsPaciente = JSON.parse(localStorage.getItem("lsPaciente"))
    atualizarTabela()
}