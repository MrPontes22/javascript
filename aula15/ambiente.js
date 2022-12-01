var num = [5,8,4]
num[3]=(6)
num.push(7)
num.sort()
console.log(`O vetor tem(${num.length}) posições`)
console.log(num)

var pos = num.indexOf(8)
if (pos == -1){
    console.log(`Valor não encontrado`)
}else{
    console.log(`O valor da posição é: ${pos}`)
}


