 function gerarTabuada() {
     var fNum = window.document.querySelector('input#txtNum')
     var txtRes = window.document.querySelector('textarea#txtRes')
     
     txtRes.innerHTML = ''

     

     for (let index = 0; index <= 10; index++) {
         var mult = Number(fNum.value) * index
         txtRes.innerHTML += `${Number(fNum.value)} x ${index} = ${mult}\n` 
         
     }
 }