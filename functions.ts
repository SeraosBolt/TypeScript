//FUNÇÕES EM JAVASCRIPT
//procedimento
function showText(texto: string){
    console.log('MENSAGEM RECEBIDA: ' + texto)
}
//função com o tipo de retorno delcarado
function soma(val1: number,val2: number): number{
    return val1 + val2
}
//OUTRRA OPÇÃO DE FUNÇÃO COM PARAMETRO
function checklessten(num: number): boolean {
    if(num < 10){
        return true
    }
    else{
        return false
    }
} 

//FUNÇÃO COM PARAMETROS OPCIONAIS
function addNumbers(num1:number, num2:number,  num3?:number): number{
    let numbersadd: number = num1+num2+Number(num3)
    return numbersadd
}

addNumbers(0,2)


//FUNÇÃO COM PARAMETRO REST COM OS ... E O ARRAY PARA ARMAZENAR OS PARAMETROS EXCEDENTES
function restTeste(name:string, ...restoNomes: string[]){
    return name + " " + restoNomes.join(' ')
}

var nome_completo = restTeste('Matheus','fernando','dos','santos','Soares','da silva','Sauro')
console.log(nome_completo)

//ARROW FUNCTION
let functeste = (x:number, y:number) =>{
    let resul: number
    resul = x+y
    return resul
}

console.log(functeste(1,2))