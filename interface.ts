//INTERFACE É COMO UM CONTRATO CONDE AS PARTES VINCULADAS DEVEM ACORDAR EM USAR
//OS PARAMETROS ESCRITO NA INTERFACE

interface testeInterface{
    nome: string
    idade?: number // podemos passar parametros opcionais para as interfaces
}

function escreve(pessoa :testeInterface){
    console.log(pessoa.nome)
    console.log(pessoa.idade)
}

let minhaPessoa ={
    nome: "Matheus",
    idade: 12
}

//vai acessar o objeto e verificar se ele tem a assinatura da interface nome/idade
//se estiver certo escre o nome e idade se não acusa erro
escreve(minhaPessoa)

interface TipoRelogio {
    current_time: Date;
    set_time(d: Date)
}

//CLASSE RELOGIO CONTRATA OS METODOS DA TIPPORELOGIO
class Relogio implements TipoRelogio{
    current_time: Date
    set_time(d: Date) {
        this.current_time = d
    }

    constructor(h:number, m: number){}
}

interface color{
    color: string
}

interface tamanhoCaneta{
    penWidth: number
}
//INTERFACE QUE ESTENDE DE OUTRAS INTERFACES
interface Square extends color, tamanhoCaneta{
    tamanho_forma: number
}

var forma_geometrica =  <Square>{} 
forma_geometrica.color = "TETEU"
forma_geometrica.penWidth = 10
forma_geometrica.tamanho_forma = 100

