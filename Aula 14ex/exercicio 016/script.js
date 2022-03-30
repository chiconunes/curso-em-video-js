function contar() {
    var fini = document.querySelector('input#txtIni')
    var ffim = document.querySelector('input#txtFim')
    var fpas = document.querySelector('input#txtPas')
    var res  = document.querySelector('div#res')
     
    res.innerHTML = 'Contando '
    for (let index = Number(fini.value); index <= Number(ffim.value); index+= Number(fpas.value)) {
        var emogi = (index < Number(ffim.value)? '&#x1F57A':'' )
        res.style.textAlign = 'center'
        res.innerHTML += `${index} `+ emogi   
    } 

    res.innerHTML +='&#x1F3F3'

    
    
}