
let n = window.document.querySelector('input#txtNum').value
let txtArea = window.document.querySelector('textarea#txtArea')
let sel = window.document.querySelector('select#sel')
let res = window.document.querySelector('div#res')
let valores = []

function adicionar() {  
    n = Number(n)
    if (n>100 ||n<1 ) {
        alert(`Número ${n} invalido.`)
        return false
    } 

    
      
     
    if (sel.childElementCount > 0) {
        for (const key in sel.childNodes) {
            if (sel.childNodes[key].value == n) {                
                alert(`Ja existe o valor ${sel.childNodes[key].value} na posicao ${key}`)    
            return     
            }
        }        
    } 

    let opt = document.createElement('option')
    opt.text  = `Valor ${n} adicionado`
    opt.value = n
    sel.appendChild(opt)
       
    alert(`Valor adicionado ${sel.childNodes[sel.childElementCount].value}`)     
}

function resumir() {
    
    

    let nMaxValue = 0 
    let nMinValue = 0 
    let nSum      = 0 
    let nAVG      = 0 
    let nCurr     = 0
    let icont     = 0 

    if (sel.childElementCount == 0) {
        alert(`Nao foi encontrado valores`)
        return
    }
    
    alert(`sel.childNodes ${sel.childNodes}`)
    for (let index = 0; index < sel.childElementCount; index++) {
        icont = Number(index)+1
        nCurr = Number(sel.childNodes[icont].value)

        nMaxValue = nMaxValue <nCurr ? nCurr:nMaxValue
        nMinValue = nMinValue ==0?1:nMinValue >nCurr ? nCurr:nMinValue
        nSum     += nCurr
        nAVG      = nSum / sel.childElementCount
         alert(`index ${index}`)

        
    } 
    // for (const key in sel.childNodes) {
    //     icont = Number(key)+1
    //     nCurr = Number(sel.childNodes[icont].value)

    //     nMaxValue = nMaxValue <nCurr ? nCurr:nMaxValue
    //     nMinValue = nMinValue >nCurr ? nCurr:nMinValue
    //     nSum     += nCurr
    //     nAVG      = nSum / sel.childElementCount
    //      alert(`key ${key}`)
    //     // alert(`nCurr ${nCurr}`)
    //     // alert(`nCurrtypeof ${typeof(nCurr)}`)
    //     // alert(`icont ${icont}`)
    //     // alert(`icont typeof ${typeof(icont)}`)
    //     // alert(`child ${nCurr}`)
    //     // if (nCurr == n) {                
    //     //     alert(`Ja existe o valor ${nCurr} na posicao ${icont}`)    
    //     // return     
    //     // }  
    // }  
    // alert(`nMaxValue ${nMaxValue}`)
    // alert(`nMinValue ${nMinValue}`)
    // alert(`nSum ${nSum}`)
    // alert(`nAVG ${nAVG}`)
    // alert(`nCurr ${nCurr}`)
    // alert(`icont ${icont}`)
    res.innerHTML = ''
    res.innerHTML +=`Ao todo temos ${sel.childElementCount} números cadastrados <br>`
    res.innerHTML +=`O maior valor informado foi ${nMaxValue} <br>`
    res.innerHTML +=`O menor valor informado foi ${nMinValue} <br>`
    res.innerHTML +=`Somando todos os valores, temos ${nSum} <br>`
    res.innerHTML +=`A média dos valores é  ${nAVG} <br>`
}