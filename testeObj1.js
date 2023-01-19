objeto1 = () =>{
    var pessoa = {
        nome: "Joao",
        hello: function(){
            return "Hello World"
        }
    }
   
    console.log(pessoa);
    console.log(pessoa.nome)
    console.log(pessoa.hello())
 }
objeto1()