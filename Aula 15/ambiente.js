let num = [5,8,2]
num[3] = 6
num.push(7)
console.log(`Nosso vetor é o ${num}`)
console.log(`O Vetor tem ${num.length} posicoes`)

num.sort()
console.log(`Nosso vetor é o ${num}`)
console.log(`O Vetor tem ${num.length} posicoes`)

// for (let index = 0; index < num.length; index++) {
//     console.log(`Posicao ${index} valor ${num[index]} ` );
    
// }

/* nova forma de varrer um array */
for (let pos in num) {
    console.log(`Posicao ${pos} valor ${num[pos]} ` );
    
}

/* Procurando posicoes */
// let pos = num.indexOf(8)
// console.log(`O Valor 8 esta na posicao ${pos} ` );
let valor = 5
let pos1 = num.indexOf(Number(valor))
console.log(pos1)
console.log(pos1  = -1 ? `Nao foi localizado` : `esta na posicao ${pos1}`)

console.log(`O Valor ${valor} ${pos1  = -1 ? 'Nao foi localizado' : `esta na posicao ${pos1}`}` );


