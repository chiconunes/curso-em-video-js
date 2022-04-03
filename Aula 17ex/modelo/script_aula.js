
let n       = window.document.querySelector('input#txtNum') 
let txtArea = window.document.querySelector('textarea#txtArea')
let sel = window.document.querySelector('select#sel')
let res = window.document.querySelector('div#res')
let valores = []

function isNumero(n){
    if (Number(n) >=1  && Number(n)<=100) {
        return true        
    }else{
        return false
    }
}

function inList(n,l){
    if (l.indexOf(Number(n)) > -1) {
        return true
    }else{
        return false
    } 
}

function adicionar() {   
    if (isNumero(n.value) && !inList(n.value, valores) ) {
        valores.push(Number(n.value))

        let opt = document.createElement('option')
        opt.text  = `Valor ${n.value} adicionado`
        opt.value = n
        sel.appendChild(opt)

    }else{
        alert(`Número ${n.value} invalido.`)
        return false
    }  
    n.value =''
    n.focus()
    res.innerHTML = ''
     
}

function resumir() {
    
    if (valores.length == 0 ) {
        alert('Adicione valores antes de finalizar!')        
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma  = 0 
        let media = 0 
        for (const key in valores) {
            soma +=  valores[key]            
            if (valores[key]> maior) 
                maior = valores[key] 
            if (valores[key]< menor)
                menor = valores[key]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML +=`<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML +=`<p>O maior valor informado ${maior} </p>`
        res.innerHTML +=`<p>O menor valor informado ${menor} </p>`
        res.innerHTML +=`<p>Somando todos os valores, temos ${soma} </p>`
        res.innerHTML +=`<p>A média dos valores digitados é ${media} </p>`
        res.innerHTML +=`<p> </p>` 

    }
     
   
    
    // res.innerHTML +=`O maior valor informado foi ${nMaxValue} <br>`
    // res.innerHTML +=`O menor valor informado foi ${nMinValue} <br>`
    // res.innerHTML +=`Somando todos os valores, temos ${nSum} <br>`
    // res.innerHTML +=`A média dos valores é  ${nAVG} <br>`
}