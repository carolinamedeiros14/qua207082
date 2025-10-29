const frm = document.querySelector("form")
const respErro = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")

const erros = [] // vetor de escopo global com número já apostados
const sorteado = Math.floor(Math.random()*100) + 1// num aletório entre 1 e 100
const CHANCES = 6 // constante com o número máximo de chances

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    if (numero == sorteado) {
        respDica.innerText = `Parabéns!! Número sortedo: ${sorteado}`
        frm.btSubmit.disabled = true // troca status dos botões
        frm.btNovo.className = "exibe"
    } else {
        if (erros.includes(numero)) { // se número existe no vetor erros
            alert(`Você já apostou o número ${numero}. Tente outro`)
        }else{
            erros.push(numero) // adiciona o número ao vetor
            const numErros = erros.length // obtém o tamanho do vetor
            const numChances = CHANCES - numErros // calcula nº chances
            // exibe nº erros, conteúdo do vetor e nº chances
            respErro.innerText = `${numErros} (${erros.join("-")})`
            respChances.innerText = numChances
            if(numChances == 0){
                alert("Suas chances acabaram..")
                frm.btSubmit.disabled = true
                frm.btNovo.className = "exibe"
                respDica.innerText = `Game Over!! Número Sorteado: ${sorteado}`
            }else{
                // usa operador ternário para mensagem da dica
                const dica = sorteado > numero ? "maior" : "menor"
                respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`
            }
        }
    }
    frm.inNumero.value = ""
    frm.inNumero.focus()
})

frm.btNovo.addEventListener("click",()=>{
    location.reload() // recarrega a página
})