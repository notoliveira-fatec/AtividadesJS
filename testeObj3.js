class Pessoa{
    constructor(){
        this.nome = "Eduardo"
    }
    hello(){
        return "Hello Pessoa"
    }
}

function objeto4(){
    var pessoa = new Pessoa()
    console.log(pessoa);
    console.log(pessoa.nome)
    console.log(pessoa.hello())
}

objeto4()