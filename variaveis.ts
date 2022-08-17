//TIPO NUMÉRICO
let num: number
num = 4.2
let pi: number
pi = 3.14564
console.log('Numero: '+num+'PI: '+pi)

//BOOLEAN 
let verdade: boolean
verdade = true
let falso: boolean
falso = false

//STRING - TEXTO
let texto: string
texto = 'Matheus Soares'
console.log('Nome: '+texto)

//ANY TYPE  PODE ASSUMIR QUALQUER TIPO
let qualq_valor: any
qualq_valor = 987
console.log(qualq_valor)
qualq_valor = "Agora sou um texto"
console.log(qualq_valor)
qualq_valor = true
console.log('Tipo Boolean: '+qualq_valor)

//VOID NÃO RETORNA NADA USADAS EM PROCEDIMENTOS
function exibe_console(param: any): void{
    console.log(param)
}
//FUNCTION NÃO RETORNA VALOR EE APENAS PRINTA O RESULTADO
function calcsoma(): void {
    let num1: number = 10
    let num2: number = 12

    let result: number = num1+num2
    console.log('Resultado é igual: ' + result)
}

//ARRAYS, COLOCANDO [] APOS A DECLARAÇÃO DO TIPO
let array: number[] = [10,2,36,5,89,56,21]


enum Cores {Vermelho,Verde,Azul,Amarelo,Branco,Preto}

let my_cor = Cores.Vermelho
console.log('Numero da minha cor' + my_cor)



