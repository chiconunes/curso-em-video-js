function contar() {
    var fini = document.querySelector('input#txtIni')
    var ffim = document.querySelector('input#txtFim')
    var fpas = document.querySelector('input#txtPas')
    var res  = document.querySelector('div#res')

    if (Number(fini.value.length) == 0){
        alert('Numeo Inicial invalido')
        res.innerHTML ='Impossivel contar'
        return false
    }
    if (Number(ffim.value.length) == 0){
        alert('Numeo Final invalido')
        res.innerHTML ='Impossivel contar'
        return false
    }
    if (Number(fpas.value.length) == 0){
        alert('Numeo Passo invalido')
        res.innerHTML ='Impossivel contar'
        return false
    }
    if (Number(fpas.value) <= 0){
        alert('Numeo Passo invalido! Considerando PASSO 1')
        p = 1
    }

     
    res.innerHTML = 'Contando '
    let i =  Number(fini.value)
    let f =  Number(ffim.value)
    let p =  Number(fpas.value)
    p =  (i>f?p*-1:p*1) //garantindo contagem regressiva
 
    
    for (let index = i; (i>f?index > f:index < f); index+= p) {
        var emogi = ((i>f?index-1 > f:index+1 < f)? '\u{1F923}':'' )
        res.style.textAlign = 'center'
        res.innerHTML += `${index} `+ emogi   
    } 

    res.innerHTML +='&#x1F3F3'

    
    
}