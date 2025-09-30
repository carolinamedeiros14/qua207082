const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit",(e) =>{
    e.preventDefault()
    let frase = frm.inFrase.value.toUpperCase()
    resp.innerText = frase
    frase = frase.replace(/ /g,"")
    let palindromo = ""
    for(let i = frase.length-1; i >= 0; i = i-1){
        palindromo += frase[i]
    }
    if(palindromo == frase){
        resp.innerText += " é um palíndromo"
    }else{
        resp.innerText += " não é um palíndromo"
    }
})