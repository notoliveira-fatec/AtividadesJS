
testeVar = ()=>{

    var a = 1;
    var b = 2;
    var soma = a + b;
    var nome = "Rodrigo" ; 

if(nome == undefined){
    console.log("\nTeste 1 - O nome não foi inicializado")
}

if(typeof(nome) == "undefined"){
    console.log("Teste 2 - O não foi inicializado\n")
}
console.log("Tipo do nome é %s e o tipo da soma é %s", typeof(nome), typeof(soma));
console.log("Olá %s, o resultado da soma é: %d", nome, soma, "que legal\n")
}
testeVar()