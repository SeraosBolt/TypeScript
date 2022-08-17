class Produto{
    codigo:string;
    descricao: string;
    preco: number

    constructor(paramcod: string, paramdesc: string, parampreco: number){
        this.codigo = paramcod
        this.descricao = paramdesc
        this.preco = parampreco
    }

    getDados(){
        return 'Produto: '+this.codigo+": "+this.descricao+" - R$: " +this.preco
    }
}


