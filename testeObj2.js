function Pessoa(){
    
        this.nome =  "Joao";
        this.hello = function(){
            return "Hello World";
        }
    }
    
    function objeto3(){
        var pessoa = new Pessoa();
    
        console.log(pessoa);
        console.log(pessoa.nome);
        console.log(pessoa.hello());
 }



objeto3();