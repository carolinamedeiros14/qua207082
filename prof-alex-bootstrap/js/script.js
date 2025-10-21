const frm = document.querySelector("form")
const tbody = document.querySelector("tbody")
let lsPessoa = []
// let filtro = localStorage.getPessoa("filtro") 
// filtro = filtro == null ? "" : filtro
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const status = frm.inStatus.value
    const statusValue = frm.inStatus.value // Pega o "value" (ex: 1, 2, 3)
    const statusText = frm.inStatus.options[frm.inStatus.selectedIndex].text // Pega o Texto (ex: Pré-operatório)
    const local = frm.inLocal.value
    const inicioPrevisto = frm.inInicioPrevisto.value
    const inicioCirurgia = frm.inInicioCirurgia.value
    const fimCirurgia = frm.inFimCirurgia.value
    const saidaPrevista = frm.inSaidaPrevista.value
    const index = frm.inIndex.value
    const pessoa = {
        nome,
        statusValue,
        statusText,
        local,
        inicioPrevisto,
        inicioCirurgia,
        fimCirurgia,
        saidaPrevista
    }


    index == "" ? lsPessoa.push({ nome, status }) : lsPessoa[index] = pessoa
    atualizarTabela()
})

function prepararEdicao(index) {
    frm.inPessoa.value = lsPessoa[index].nome
    frm.inStatus.value = lsPessoa[index].statusValue
    frm.inLocal.value = lsPessoa[index].local
    frm.inInicioPrevisto.value = lsPessoa[index].inicioPrevisto
    frm.inInicioCirurgia.value = lsPessoa[index].inicioCirurgia
    frm.inFimCirurgia.value = lsPessoa[index].fimCirurgia
    frm.inSaidaPrevista.value = lsPessoa[index].saidaPrevista
    frm.inIndex.value = index
    frm.btApagar.disabled = false
}

frm.btApagar.addEventListener("click", () => {
    const index = frm.inIndex.value
    if (index == "") {
        alert("Necessário selecionar 1 pessoa.")
        return
    }
    if (confirm("Deseja realmente apagar esse pessoa?") == false) {
        return
    }
    lsPessoa.splice(index, 1)
    atualizarTabela()

})

const cores = {
    "1": "bg-secondary-subtle", // Pré-operatório
    "2": "bg-primary-subtle", // Em sala cirúrgica
    "3": "bg-danger-subtle" // Pós-operatório (usei verde)
}

function atualizarTabela() {
    limpar()
    localStorage.setItem("lsPessoa", JSON.stringify(lsPessoa))
    tbody.innerHTML = ""
    if (lsPessoa.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center">Lista Vazia</td></tr>`
        return
    }
    let cont = 0
    for (const pessoa of lsPessoa) {
        // if(filtro == "" || filtro.includes(i.status)){
        tbody.innerHTML += 
            `<tr onclick="prepararEdicao(${cont})" style="cursor: pointer;">
                <td>${pessoa.nome}</td>
                <td class="${cores[pessoa.statusValue] || ''}">${pessoa.statusText}</td>
                <td>${pessoa.local || '-'}</td>
                <td>${pessoa.inicioPrevisto || '-'}</td>
                <td>${pessoa.inicioCirurgia || '-'}</td>
                <td>${pessoa.fimCirurgia || '-'}</td>
                <td>${pessoa.saidaPrevista || '-'}</td>
            </tr>`
        cont++
    }
}

function limpar() {
    frm.inPessoa.value = ""
    frm.inStatus.value = ""
    frm.inLocal.value = ""
    frm.inInicioPrevisto.value = ""
    frm.inInicioCirurgia.value = ""
    frm.inFimCirurgia.value = ""
    frm.inSaidaPrevista.value = ""
    frm.inIndex.value = ""
    frm.btApagar.disabled = true
    frm.inNome.focus()
}

if(localStorage.getItem("lsPessoa") != null){
lsPessoa = JSON.parse(localStorage.getPessoa("lsPessoa"))
}
atualizarTabela()

const lsFiltro = frm.querySelectorAll('input[type="checkbox"]')
for (const bt of lsFiltro) {
    bt.addEventListener("click", filtrar)
    if (filtro.includes(bt.value)) {
        bt.checked = true
    }
}

function filtrar() {
    filtro = ""
    for (const bt of lsFiltro) {
        filtro += bt.checked ? bt.value + "," : ""
    }
    atualizarTabela()
    localStorage.setPessoa("filtro", filtro)
}