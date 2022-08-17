//LOOPS EM TYPESCRIPT
let i: number =1
let frase: string = ''

while(i<10){
    frase += 'O Número é: '+i+
    i++
}

let cont: number = 1
let textout: string = ''
//EXECUTA UMA VEZ E DEPOIS ELE CHECA A CONDIÇÃO
do{
    textout += "Acrescentando com outro loop = "+cont
    cont ++
}while(cont<10)

let x: number = 0
for(x;x<10;x++){
    textout = "AQUI TA RODANDO O LOOP FOR = "+x
}

var array_nomes: string[] = ['matheus','soares','joao','maria','jordy']
var outputnomes: string = ""

for(x;x<array_nomes.length;x++){
    console.log('NOme na lista = '+array_nomes[x])
}

//CRIANDO UM OBJETO 

class Fruta {
    nome: string;
    cor: string;
    tamanho: number;
    preco: Number
}


var maca: Fruta = {nome: 'Maça', cor: 'Vermelha', tamanho: 5, preco: 3.54}
var attrfruta: string = ""

for(var f in maca){
    attrfruta += maca[f] + " "
}
console.log(attrfruta)


//LOOP COM O CONDICIONAL BREAK PARA INTERRONPER O LOOP
let a: number
let resul: string

for(a =0;a<10;a++){
    if(a == 5){
        console.log("PARAOU O LOOP")
        break;
    }else{
        console.log("Continuando")
    }
}

//LOOP COM O CONDICIONAL CONTINUE PARA DAR UMA PAUSA NO LOOP
let b: number
let tresul: string
for(b = 0;b<10;b++){
    if(i ==6){
        //FAZ UMA PAUSA NO LOOP E DEPOIS RETOMA A PARTIR DA PROXIMA IRERAÇÃO
        console.log('Fiz uma pausa: '+b)
        continue;
    }else{
        console.log("SEGUE O BAILE: "+b)
    }
}

function check(param: any): void{
    if(param == "") throw Error('String Vazia')
    if(param >100) throw Error('Número muito alto')
    if(param <10) throw Error('Número muito baixo')
}
//FAZENDO TRATATIVA DE ERROS
try{
    check('')
}catch(erro){
    console.log(erro)
}finally{
    console.log('MESMO COM OU SEM ERROS EU EXECUTO')
}