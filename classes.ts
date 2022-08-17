
//CRIAMOS UMA CLASSE COM SEUS METODOS E FUNÇÕES
class Hello {
    hellotext: string
    //CONSTRUTOR PEGAS AS INFORMAÇÕES NO MOMENTO DO ESTANCIAMENTO DA CLASSE
    constructor(textin: string){
        this.hellotext = textin
    }
    //PODEMOS TAMBÉM CRIAR FUNÇÕES
    mensagem():string{
        return "Hello "+ this.hellotext
    }
}
class Area{
    pi: number
    constructor(){
        this.pi = 3.14
    }

    circulo(raio: number): number{
        return (raio*raio)*this.pi
    }
    quadrado(lado: number): number{
        return lado*lado
    }
    retangulo(ladoA: number, ladoB: number):number{
        return ladoA*ladoB
    }

}

//AQUI ATRIBUIMOS A ESSA VARIAVEL A CLASSE HELLO E PASSAR MUNDO GG PARA O CONTRUTOR
var meu_ola = new Hello('MUNDO GG')
//PODEMOS FAZER ACESSO A FUNÇÃO DENTRO DA CLASSE
console.log(meu_ola.mensagem())

var minhasAreas = new Area()

console.log(minhasAreas.circulo(5))
console.log(minhasAreas.quadrado(3))
console.log(minhasAreas.retangulo(3,5))


//herança
class Produtos{
    nome: string
    preco: number

    constructor(nome: string, val: number){
        this.nome = nome
        this.preco = val
    }
    precocomdesc(valdesc:number){
        var valfinal: number = this.preco -(this.preco*valdesc)
        console.log("O produto: "+this.nome+" Custa: R$"+valfinal)
    }
}

class Tv extends Produtos{
    size: number
    constructor(nome: string, preco: number, tamanho: number){
        super(nome, preco)
        this.size = tamanho
    }

    precocomdesc(valdesc: number): void {
        console.log('Tamanho da TV: '+this.size+'POL')
        super.precocomdesc(0.2)
    }
}

var meu_produto = new Produtos('Maça', 3.5)
meu_produto.precocomdesc(0.5)

var minha_tv = new Tv('Samsung',3500,35)
minha_tv.precocomdesc(0.2)