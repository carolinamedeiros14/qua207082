const prompt = require('prompt-sync')()
const valor = Number(prompt("Valor: R$ "))
const num = Number(prompt("N° de parcelas: "))
const valorParcelas = Math.floor(valor/num)
const valorFinal = valorParcelas + (valor % num)
for (let i = 1; i < num; i++) {
    console.log(`${i}° parcela: R$ ${valorParcelas.toFixed(2)}`)
}
console.log(`${num}° parcela: R$ ${valorFinal.toFixed(2)}`)