let amigo = {nome:"jose",
sexo:"M",
peso:84.5,
engordar(p=0){
    console.log("Engordou ")
    this.peso += p
}}

console.log(amigo)
console.log(typeof amigo)
console.log(amigo.nome)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)