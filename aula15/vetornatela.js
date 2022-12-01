var num =[4,3,6,5,8,1,2,9,7]
num.push(0)
num.sort()
console.log(`O vetor tem ${num.length} posições`)
console.log(`Os índices do vetor são: ${num}`)
/*
for(pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor: ${num[pos]}`)
}
*/
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor:${num[pos]}`)
}