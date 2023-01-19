objeto1 = () =>{
    var pessoa = Object();
    pessoa.hello = function(){
        return "Hello Pessoa";
    }
    console.log(pessoa);
    console.log(pessoa.nome)
    console.log(pessoa.hello())
}

objeto1()